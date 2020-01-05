---
title: Things You Should Know About Array.findIndex
date: '2020-01-04T08:51:12.960Z'
description: 'A short and simple overview of Array.findIndex.'
tags: ['array', 'findIndex']
---

**Array.prototype.findIndex** according to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) is:

> A method that returns the **index** of the first element in the array **that satisfies the provided testing function**. Otherwise, it returns -1, indicating that no element passed the test.

## Example Usage

Say we have the following array:

```js
const arr = [1, 2, 3, 4, 5]
```

The following code will find the first element who's value is 3 and return its index:

```js
arr.findIndex(value => value === 3) // 2
```

### What's happening here?

We are calling `findIndex`, passing it a callback (a method that gets called back).
The callback gets called per each item in arr, and the first parameter passed to it is the current value.

<div class="sidenote">

#### Experiment

Take a look at the following piece of code. What do you think the output should be?

<!-- prettier-ignore -->
```js
[1, 2, 3, 'some value'].findIndex(value => {
  console.log(value)
  return false
})
```

Now try running it in the console, what is the output?

</div>

Back to our example, it was a very simple one, for which we could have easily gone with `indexOf`:

```js
arr.indexOf(3) // Also outputs 2
```

But, and that's where `findIndex` shines, what if we have the following array:

<!-- prettier-ignore -->
```js
const students = [
  { name: 'Billy Blaze' },
  { name: 'Dave' },
  { name: 'Rio' }
]
```

If we wanted to look for a student who's name is "Dave" we couldn't use `indexOf` since it accepts the entire object we are looking for as its argument.

I mean, we could write something like this:

```js
students.indexOf(students[2])
```

But that just makes no sense.

However, by calling `findIndex` and passing it a callback that looks for a specific name within the object passed to it, we could accomplish this easily:

```js
students.findIndex(student => student.name === 'Dave')
```

## Array.findIndex vs Array.find

Much like `findIndex`, `find` accepts a callback that gets called per each item within the array, until one is found.

Unlike `findIndex` (that returns the found item's index within the array), `find` will return the item itself.
