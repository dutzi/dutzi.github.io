---
title: Things I've Learnt Building How-Dep
date: '2020-01-03T22:37:14.201Z'
description: 'Going through some interesting concepts I first encountered when building a CLI tool that “counts your imports” and gives you a rough estimation of how dependent you are of your dependencies.'
tags: ['cli', 'react', 'ssr', 'ts-query']
---

[**How-dep**](https://github.com/dutzi/how-dep) is a CLI tool that analyzes your TypeScript<sup>1</sup> project, counting how many imports it encounters per each module your project depends on.

How-dep generates both a CLI report and a living, breathing HTML report. [Here's](https://dutzi.github.io/how-dep/example-report) an example of one.

To run how-dep, first install it (`yarn global add how-dep`), then run it in your project's root folder (`how-dep`).

Here's the gist of what I've learnt building it.

## Statically Analyzing a TypeScript File

<!-- Or, **Easily Traversing and Querying a TS File** -->

First, I needed a way to get all the module `imports` within a project. TS Query seemed pretty useful for that cause.

[TS Query](https://github.com/phenomnomnominal/tsquery) is a tool that allows you to query a TypeScript file for nodes (AST nodes), using a CSS selector-ish type syntax.

For example, running the following query will return all the functions who's name is "foo" (or more accurately, the nodes of the _names_ of the functions)

```js
FunctionDeclaration > Identifier[name="foo"]:first-child
```

You can play with it [here](https://tsquery-playground.firebaseapp.com/), it's pretty cool.

Using TS Query I was able to easily find all import statements and generate a report accordingly.

## Rendering an HTML File From the CLI

<!-- ### Utilizing React's SSR abilities to generate simple HTML file -->

Rendering a report _to_ the CLI is easy, simply log whatever you want and use [chalk](https://github.com/chalk/chalk) to color it up. Rendering an HTML report is not too complicated either, when utilizing React's SSR abilities.

After creating a simple React based report (**[the app](https://github.com/dutzi/how-dep/blob/master/src/web/App.tsx)**), I needed a way to dump it out into an HTML file and present it to the user. `renderToString` was a simple way to do it.

`ReactDOMServer.renderToString` will take a React Element, and spit out the HTML that renders it.

Dump its output to a temporary file, give it a name, and you have a static page that renders your app:

```tsx
import ReactDOMServer from 'react-dom/server'
import fs from 'fs-extra'
import tempDirectory from 'temp-dir'

// ...

const outputHTML = ReactDOMServer.renderToString(<App data={data}></App>)

const outputFilePath = `${tempDirectory}/how-dep-report.html`

fs.writeFileSync(outputFilePath, outputHTML)
```

<!-- ## hydrate -->

## Bringing Your Static HTML to Life

When rendering using React's `renderToString` you end up with an HTML file, all your hooks and event listeners are not part of it, the HTML only contains the markup that's needed to render the app on the client side _until_ the JS bundle that brings it to life arrives. To bring your React app to life you'll have to:

1. Load ReactDOM from the dumb HTML file
2. Load the React app (we'll bundle it using Webpack)
3. Run `ReactDOM.hydrate`, passing it the app and the HTML node the app is currently rendered in

So, first, lets bundle ReactDOM and the app we've made and dump it with all the rest into our dumb HTML file, to do that we'll use Webpack.

Out of the box Webpack comes with sensible defaults, enough for us to simply give it an entry file, an output path and watch it bundle it up.

Since I'm not an animal, I've used TypeScript when building how-dep, but since I'm too lazy to create a `webpack.config.js` file, I've used the TypeScript compiler to generate the JS files by adding the following to my package.json scripts map:

```json
  "build:watch": "tsc --watch"
```

I've set TSC to transpile the TS files into a folder named "dist".

Then, I've added the following scripts to my package.json:

```json
  "webpack:build": "webpack dist/web/App.js --mode=production -o ./dist/web/bundle.js",
  "webpack:watch": "npm run webpack:build -- --watch"
```

The first one runs Webpack on `App.js`, bundling it and all its dependencies into `dist/web/bundle.js`, the second one simply runs the first one in **watch mode**.

I've also added the following script:

```json
  "start": "concurrently \"npm:build:watch\" \"npm:webpack:watch\"",
```

Which uses [Concurrently](https://github.com/kimmobrunfeldt/concurrently) to run both npm scripts at the same time, this was useful when developing how-dep, greatly improving the feedback loop.

So now that we've got TSC and Webpack up and running, we have a bundled JS file we can consume from our dumb HTML report file so we can bring it life.

To consume the bundled JS we'll simply place it within a `<script>` tag which we'll render using the `renderToString` call we made earlier.

```tsx
const ouputHTML = ReactDOMServer.renderToString(
  <div>
    <script
      dangerouslySetInnerHTML={{
        __html: fs
          .readFileSync(path.join(__dirname, '/web/bundle.js'))
          .toString(),
      }}
    ></script>
    <App data={data}></App>
  </div>
)
```

Now, our HTML contains our bundled app, we just need to call `ReactDOM.hydrate` once it loads.

```tsx
if (process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    ReactDOM.hydrate(<App />, document.body)
  })
}
```

A few things to note about the block above, first, we only run it in production mode, so that when how-dep renders the app (i.e., when the user runs `how-dep` from the CLI) that piece of code won't run. We don't want it to run since the CLI runs in Node which has no clue what `window` is.

Second, adding the load event listener is simply good practice, it's there so that no matter where I place that bundle's `<script>` tag, it will only run _after_ the the app's markup has rendered.

At this point, the app renders fine initially, but once React's hydration starts the data is gone and nothing gets rendered.

That's because the app expects some props, which are now missing.

```tsx
export default function App({ data }) { // ...
```

To pass that data, we to add it serialize it and dump it out the HTML file.

Adding the following `<script>` tag within the module responsible of rendering the HTML file will expose everything we need through an object on the window:

```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `window.__HOW_DEP = {
      data: ${JSON.stringify(data)},
    }`,
  }}
></script>
```

So now, revisiting our code from before, we can write:

```tsx
if (process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    ReactDOM.hydrate(
      {/* highlight-range{2-2} */}
      <App
        data={(window as any).__HOW_DEP.data}
      />,
      document.body
    )
  })
}
```

And our HTML should now render fine once fully loaded. Amazing!

## Styling the App, the Lazy Way

Revisiting my previous point, I really didn't feel like creating a `webpack.config.js` file for this project. Having React and Webpack bundled within a CLI tool seemed crazy enough, and I was too lazy to read the docs.

So when the problem of styling the app came up, importing css files was out of the question.

Instead, I used good-ol' [Styled Components](https://www.styled-components.com/). Following their docs I simply had to add the following to my html rederer:

```tsx
import { ServerStyleSheet } from 'styled-components'
const sheet = new ServerStyleSheet()

// ...

const outputAppBody = ReactDOMServer.renderToString(
  sheet.collectStyles(/* script tags and app go here...  */)
)

const styleTags = sheet.getStyleTags()

const outputHTML = styleTags + outputAppBody
```

## Adding a Title and a Favicon

Adding both a title and favicon means dealing with the HTML's `<head>` tag. To do that in SSR world I used [React Helmet](https://github.com/nfl/react-helmet).

For the favicon to work, I decided to base64 encode it and bake it into a React component. I think I've used [this tool](https://www.base64-image.de/) for it, though I'm not sure.

<sup>1</sup> How-dep supports JavaScript as well, just provide it with a basic tsconfig.json file

<div class="dependencies">

**Dependencies:**
<span class="dep">[@phenomnomnominal/tsquery](https://npmjs.com/package/@phenomnomnominal/tsquery)</span>
<span class="dep">[yargs](https://npmjs.com/package/yargs)</span>
<span class="dep">[concurrently](https://npmjs.com/package/concurrently)</span>
<span class="dep">[fs-extra](https://npmjs.com/package/fs-extra)</span>
<span class="dep">[openurl](https://npmjs.com/package/openurl)</span>
<span class="dep">[react](https://npmjs.com/package/react)</span>
<span class="dep">[react-dom](https://npmjs.com/package/react-dom)</span>
<span class="dep">[react-helmet](https://npmjs.com/package/react-helmet)</span>
<span class="dep">[styled-components](https://npmjs.com/package/styled-components)</span>
<span class="dep">[temp-dir](https://npmjs.com/package/temp-dir)</span>

</div>
