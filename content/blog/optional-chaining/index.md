---
title: Optional Chaining Tips
date: '2020-01-05T00:27:09.819Z'
description: 'A quick reference guide for Optional Chaining.'
tags: ['esnext', 'optional-chaining']
---

## Syntax

```ts
obj?.prop
obj?.[expr]
arr?.[index]
func?.(args)
```

## Getting Props

```ts
const obj = {
  prop1: {
    prop2: {
      prop3: 'nested-value',
    },
  },
}
```

<!-- prettier-ignore -->
```ts
obj.doesNotExist?.prop2?.prop3 // undefined
obj.doesNotExist?.prop2.prop3  // undefined, doesn't throw
obj.doesNotExist?.['prop2'].prop3  // undefined
```

## Setting Props

Optional chaining cannot appear in the left hand side of an assignment operator.

```ts
obj.prop1.prop2?.prop3 = 1 // throws compile time error
```

## Arrays

```ts
const myClass = {
  students: [{ name: 'Gilfoyle' }],
}
```

```ts
myClass.students?.[0] // { name: 'Gilfoyle' }
myClass.teachers?.[0] // undefined
```

## Calling Methods

```ts
const api = {
  init() {
    // ...
  },
  name: 'my-api',
}
```

<!-- prettier-ignore -->
```ts
api.init?.()    // calls init
api.destroy?.() // undefined
api.name?.()    // throws type error
```

## More Examples

```ts
myClass.students?.[0]?.name
```

Will return undefined if:

- `students` is undefined
- `students[0]` is undefined
- `students[0].name` is undefined

<!-- prettier-ignore -->
```ts
const nullish = null
let counter = 0

nullish?.[counter++] // undefined
counter              // 0
```
