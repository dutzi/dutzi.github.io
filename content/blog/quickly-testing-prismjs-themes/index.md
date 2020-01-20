---
title: Test PrismJS Themes Directly On Your Blog
date: '2020-01-13T21:31:47.125Z'
description: "A simple snippet I made that helps testing PrismJS themes without leaving your app's page."
tags: ['prismjs', 'blog']
---

I wanted to check how different [PrismJS](https://prismjs.com/) themes would look on my blog, I wasn't too happy with the workflow though, which was downloading a theme's CSS file, pasting it in my blog's code and waiting for the package to rebuild, so I wrote simple snippet that helps with that.

The code below will fetch existing PrismJS themes from these [two](https://github.com/PrismJS/prism-themes/tree/master/themes) [repositories](https://github.com/PrismJS/prism/tree/master/themes) and will then listen for J and K key presses. Upon pressed, it will rotate through the list of fetched themes, applying them to the current page one at a time.

Here it is, in all its glory:

<!-- prettier-ignore -->
```tsx
(async () => {
  const themes = [
    ...await fetch('https://api.github.com/repos/PrismJS/prism-themes/contents/themes').then(res => res.json()),
    ...await fetch('https://api.github.com/repos/PrismJS/prism/contents/themes').then(res => res.json())
  ];

  let index = -1;

  alert(`Found ${themes.length} themes, use J/K keys to try them out`);

  function handleKeyDown({key}) {
    if (key.toLowerCase() === 'j'){
      index++;
      if (index >= themes.length) {
        index = 0;
      }
    } else if (key.toLowerCase() === 'k') {
      index--;
      if (index < 0) {
        index = themes.length - 1;
      }
    } else {
      return;
    }

    console.log(`Showing Theme ${index} - ${themes[index].html_url}`);

    if (document.querySelector('[data-theme-gallery]')) {
      document.querySelector('[data-theme-gallery]').remove()
    }

    var link = document.createElement('link');
    const theme = themes[index];
    link.href = theme.download_url.replace('raw.githubusercontent.com', 'raw.githack.com');
    link.dataset.themeGallery = true;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  window.addEventListener('keydown', handleKeyDown);
})()
```

In order to use it, open your blog (or app) where PrismJS is embedded, paste that snippet in your console, run it and then focus back on the page. Now hit J or K to go through the themes. Once you're happy with one, check the console again, the current theme's url will show up there.

I wanted to praise [Githacks](https://raw.githack.com/), a proxy which adds the right content-type headers for files fetched from Github, without which this technique wouldn't work.
