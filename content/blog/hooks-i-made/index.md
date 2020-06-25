---
title: <em>Hooks!</em>
date: '2020-01-06T03:48:48.556Z'
description: 'Some pretty useful, pretty generic, typed hooks I made for a recent project.'
tags: ['react', 'hooks']
issue: 4
---

Some React hooks I recently wrote for a project (ordered alphabetically).

## Use Animate Height

`useAnimateHeight` will use the [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) to listen to resize changes within a reffed component, it will then animate its wrapper's height to adapt to the new height.

<!-- prettier-ignore -->
```tsx
const [wrapper, element] = useAnimateHeight()

return (
  <div ref={wrapper}>
    <div ref={element}>
      {/* ... */}
    </div>
  </div>
)
```

[Github](https://github.com/dutzi/feedfarm/blob/master/src/hooks/use-animate-height.ts)

## Use Escape To Close

`useEscapeToClose` will listen to escape key presses and call a function once it happens.

```tsx
function handleClose() {
  // closed!
}

useEscapeToClose(handleClose)
```

[Github](https://github.com/dutzi/feedfarm/blob/master/src/hooks/use-escape-to-close.ts)

## Use Focus Trap

`useFocusTrap` traps the keyboard focus within a component (**the main component**). It does so by returning two render functions, these functions should be placed (and called) before the first component and after the last component within the main component.

```tsx
const [focusTrapStart, focusTrapEnd] = useFocusTrap()

return (
  <div>
    {focusTrapStart()}
    {/* ... */}
    {focusTrapEnd()}
  </div>
)
```

[Github](https://github.com/dutzi/feedfarm/blob/master/src/hooks/use-focus-trap.tsx)

## Use Is Mobile

`useIsMobile` will return true if the user is browsing through a mobile and false otherwise. It will do so by measuring the screen's width.

```tsx
const isMobile = useIsMobile()
```

[Github](https://github.com/dutzi/feedfarm/blob/master/src/hooks/use-is-mobile.ts)

## Use Keyboard Shortcut

`useKeyboardShortcut` accepts an object, where the keys are single characters and the values are methods that should be called when the user presses the ctrl key + the character for the method.

```tsx
function showCommandPalette() {
  // called when user presses ctrl+p
}

useKeyboardShortcut({
  p: showCommandPalette,
})
```

[Github](https://github.com/dutzi/feedfarm/blob/master/src/hooks/use-keyboard-shortcut.tsx)

## Use Maintain Ratio

`useMaintainRatio` accepts a number (**the ratio**) and options (active: boolean; change: 'width' | 'height') and returns a ref. The component attached to that ref will maintain that aspect ratio by changing its width or height.

<!-- prettier-ignore -->
```tsx
const ref = useMaintainRatio(16 / 9, {
  change: 'height',
});

return (
  <div ref={ref}>
    {/* ... */}
  </div>
)
```

[Github](https://github.com/dutzi/feedfarm/blob/master/src/hooks/use-maintain-ratio.ts)

## Use Prevent Scroll

`usePreventScroll` will prevent scrolling as long as its mounted.

```tsx
usePreventScroll()
```

[Github](https://github.com/dutzi/feedfarm/blob/master/src/hooks/use-prevent-scroll.ts)

## Use Resize Observer

`useResizeObserver` wraps the Resize Observer API within a hook.

<!-- prettier-ignore -->
```tsx
const [ref, entityDimensions] = useResizeObserver()

useEffect(() => {
  if (entityDimensions) {
    // change!
  }
}, [entityDimensions])

return (
  <div ref={ref}>
    {/* ... */}
  </div>
)
```

[Github](https://github.com/dutzi/feedfarm/blob/master/src/hooks/use-resize-observer.ts)

## Use Scroll To Top

`useScrollToTop` will scroll to the top of the page once mounted.

```tsx
useScrollToTop()
```

[Github](https://github.com/dutzi/feedfarm/blob/master/src/hooks/use-scroll-to-top.ts)

And that's it for now.
