---
title: Adding <em>React Fast Refresh</em> to Your Create React App Project
date: '2020-01-12T19:56:29.881Z'
description: 'While it is still in development you can finally try React Fast Refresh in your Create React App project, without even ejecting.'
tags: ['react', 'react-hot-loader', 'fast-refresh']
---

[React Fast Refresh](https://github.com/facebook/react/issues/16604) is the successor to [React Hot Loader](https://github.com/gaearon/react-hot-loader), a configuration option that lets you enjoy a (much) better development experience, by doing the following:

It listens to changes within your source files and sends them, and only them, to the browser (or mobile device, for [React Native](https://facebook.github.io/react-native/docs/fast-refresh)). When those changes arrive at the browser, the code segment that has changed is being "injected" into its module, replacing the previous code. If that module is able to accept said changes without having to reload the page, then your app gets updated without losing its state.

In other words, when you hit Save, instead of refreshing the page, React Fast Refresh will only reload the components affected by the change.

Dan Abramov (and others) have recently re-wrote this feature, renaming it React Fast Refresh. It was initially out for React Native, while React developers were promised a similar experience. Finally, it seems like the days of waiting are over<sup>1</sup> and, while it's still in development, you can now try it out in your Create React App (without even ejecting).

## Trying React Fast Refresh

Create React App, out of the box, does not yet support Fast Refresh (as it's still under development and may still contain some bugs). That means we either have to eject and modify Create React App's config files _or_ use a little magical tool called [`react-app-rewired`](https://github.com/timarney/react-app-rewired).

`React-app-rewired` lets you:

> Override create-react-app webpack configs without ejecting

That's it. It's pretty cool since you can do some useful things with it, like [including component names](https://github.com/withspectrum/react-app-rewire-styled-components) when using styled components, adding a [webpack.DefinePlugin](https://github.com/lwd-technology/react-app-rewire-define-plugin) block to your config, and many more.

It's important to take into account that `react-app-rewired` is "lightly" maintained (mostly by the community), or as Dan Abramov somewhat officially [tweeted](https://twitter.com/dan_abramov/status/1045809734069170176): "Stuff can break".

So with that, let's add it to our project!

## Adding React App Rewired

In order to add `react-app-rewired` to our project, we start by installing it:

```bash
$ npm install react-app-rewired --save-dev
```

We then create a `config-overrides.js` file, next to our `package.json`:

```tsx
/* config-overrides.js */

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config
}
```

And finally, modify the `scripts` section of our `package.json`:

```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test --env=jsdom",
  "eject": "react-scripts eject"
}
```

That's it for `react-app-rewired`. We are now ready to enable React Fast Refresh.

## Enabling React Fast Refresh

To do that, we'll install two packages:

- [`customize-cra`](https://github.com/arackaf/customize-cra/), which is a [set of utility functions](https://github.com/arackaf/customize-cra/blob/master/api.md) that help modify config objects. It exposes functions like `addBabelPlugin` and `addWebpackPlugin` which are necessary for our second package to work,
- [`customize-cra-react-refresh`](https://github.com/esetnik/customize-cra-react-refresh/), this is the one that makes the necessary changes to Create React App's config files in order to get React Fast Refresh to work.

We'll install both of them:

```bash
$ npm install -D customize-cra customize-cra-react-refresh
```

Leaving us with the last and final step of modifying the `config-overrides.js` file we created above:

```tsx
/* config-overrides.js */

const { override } = require('customize-cra')
const { addReactRefresh } = require('customize-cra-react-refresh')

module.exports = override(addReactRefresh())
```

And we're done! We can now restart our development server and enjoy a greatly improved feedback loop and overall developer experience within our Create React App.

**Disclaimer:** I haven't thoroughly tested React Fast Refresh yet, I was very excited to find that it's ready to test out and wanted to share it. I will probably update this post in the coming days, adding the caveats I'll find along the way.

**Update:** I have tested it and it's awesome.

<sup>1</sup> If you don't mind a few hiccups here and there...
