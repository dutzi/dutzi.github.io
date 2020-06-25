---
title: Magical Properties Of <em>min-width 0px</em>
date: '2020-01-10T15:22:18.603Z'
description: 'Setting min-width to 0px can help with a couple of things. I will go over them in this post.'
tags: ['css', 'ellipsis', 'overflow']
unlisted: true
---

Up until 2 weeks ago the only way I used `min-width` (and `min-height`) for is to, well, set the minimum width (and height) of an element.

I was surprised to find that it has can be used when handling overflowing content.

## Ellipsis

In order to truncate an element's text context I would normally apply the following properties to it:

```css
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

And make sure it has some width applied to it, either by constraining its parent and setting its width to 100% or by setting its width to some absolute value.

Problem ensues once the text content of the div you want to truncate lives within another element:

```html
<div class="flex-parent">
  <div class="first-child">
    <h2>Text to truncate here.</h2>
  </div>
  <div class="second-child">
    Other stuff.
  </div>
</div>
```

I which case `first-child`'s default `min-width` value, set to `auto`, will cause it to respect its child's demands thus overflowing its container.

The solution for this issue is simply to set `first-child`'s `min-width` to `0px`.

Check out the full example and solution at [CSS Tricks](https://css-tricks.com/flexbox-truncated-text/).

This also works when the content is not just text, lets see an example where we use this method to prevent elements from overflowing vertically.

## Fixing Vertical Overflow

Say you have the following layout for your site (or rather, IDE of some sort): header, navbar, content and footer. And say you want the content to take all the space left within the screen. The markup would look something like:

```tsx
<main>
  <header>{/* ... */}</header>
  <nav>{/* ... */}</nav>
  <article>{/* ... */}</article>
  <footer>{/* ... */}</footer>
</main>
```

And the CSS:

```css
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

article {
  flex: 1;
}
```

Now the article should span across the rest of the screen, while the other tags take the space needed for them.

Say with introduce the following change:

```tsx
<main>
  <header>{/* ... */}</header>
  <nav>{/* ... */}</nav>
  <article>
    <div class="huge-div"> //highlight-line</div>
  </article>
  <footer>{/* ... */}</footer>
</main>
```

And the CSS:

<!-- prettier-ignore -->
```css
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

article {
  flex: 1;
}

.huge-div { // highlight-line
  height: 200vh; // highlight-line
} // highlight-line
```

Now we stumble across the same issue. `.hugh-div` is overflowing and pushing the rest footer off the screen.

Applying `min-height: 0px` to the `article` fixes that:

```css
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

article {
  flex: 1;
  min-height: 0px; // highlight-line
}

.huge-div {
  height: 200vh;
}
```

This method might be widely known but I just came across it so I decided to share it, hope this helps anyone encountering the same issue.
