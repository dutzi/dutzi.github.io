---
title: Things I've Learnt Building Firebase Functions Declarations
date: '2020-01-04T22:48:39.706Z'
description: 'Making a simple tool that creates declaration files for your Firebase Functions taught me a few things. Here they are.'
tags: ['firebase', 'functions', 'typescript', 'experimental']
---

[**firebase-functions-declarations**](https://github.com/dutzi/firebase-functions-declarations) is a tool that creates declaration files for a given set of Firebase Functions.

When using it, instead of writing:

<!-- prettier-ignore -->
```ts
const response = (await firebase.functions().httpsCallable('myFunction')(data)).data
```

And not knowing what `response` is what or `data` should contain, you write:

```ts
import { myFunction } from './firebase-functions'

const response = await myFunction(data)
```

Where `response` will be typed to be whatever `myFunction` returns, and `data` will be type checked, making sure you provide the right type.

## How Does It Work

When creating Firebase Functions you'd normally create an index file which imports all function and exports them. This is the entry point for Firebase Functions.

Each function module usually looks something like:

```ts
export default functions.https.onCall(async (data, context) {
  // firebase function body...
});
```

Ideally, my tool would extract the function passed to `functions.https.onCall` and infer its argument and return types.

This could be done using the [TypeScript compiler](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API) and other tools (like [ts-query](https://github.com/phenomnomnominal/tsquery) or [ts-morph](https://github.com/dsherret/ts-morph)), but because I only learnt about these methods after making this tool I went for a different approach. Maybe someday I'll revisit this tool and introduce these changes, but for now it's good enough.

### Step 1 - Creating the Declarations

My approach was to require the author of the function to introduce the following change the function's module - in addition to `default export`-ing the return value of `functions.https.onCall`, export the callback _passed to_ `functions.https.onCall` as a function named `impl`.

For example, the following file is valid for my tool to work:

```ts
// ...

export async function impl(data: T, context: functions.https.CallableContext) {
  // do something, return some value of type U
}

export default functions.https.onCall(impl)
```

Then, using `tsc`, I can create declaration files for each one of the functions by running:

```bash
$ tsc ./functions/src/index.ts --outDir ./src/firebase-functions --emitDeclarationOnly --declaration
```

Now `src/firebase-functions` should contain .d.ts files for all modules within `functions/src`.

### Step 2 - Creating The "Proxy" Module

Now that I have declarations files for the API, I can create a module that:

- Imports `firebase` from `firebase/app`, since this file will eventually make the call to `firebase.functions().httpsCallable`.

- Imports all functions. Here's one import statement for example:

```ts
import { impl as myFunctionImpl } from './functions/my-function'
```

<div class="sidenote">

**Note:** Since I ran `tsc` emitting declaration files only, `functions/my-function.js` does **not** exist, but `functions/my-function.d.ts` does and that's all I need.

</div>

- Per each function, exports a function with the same name, that:

  - Accepts a `data` argument who's type is inferred from the relevant .d.ts file
  - Returns a promise that resolves to what the function returns

This can be achieved using TypeScript's [`Parameters`](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterst) and [`ReturnType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypet) utility types.

Here's an exported function for example:

<!-- prettier-ignore -->
```ts
export async function myFunction(data?: Parameters<typeof myFunctionImpl>[0]) {
  return (await firebase.functions().httpsCallable('myFunction')(data)).data as ReturnType<typeof myFunctionImpl>;
}
```

And there you have it, a module that exposes typed functions for your API!

## Caveats

As I wrote above, this whole making-the-user-do-stuff for this tool to work is not the best approach, especially since this work _can_ be automated. But, the counter approach of making-me-do-stuff-for-the-user is also not the best one since I'm lazy.

But that's not what I wanted to raise, the bigger problem with such a tool is that when the types exposed in a function's signature are ones declared within the Firebase Functions package's `node_modules`. In this case there is ~~no way~~ no simple way to share types betweens the functions and app's codebase.

I made some pretty big projects so far using Firebase and haven't encountered this issue. But I can image some pretty trivial use cases where this might be a deal-breaker.

<div class="dependencies">

**Dependencies:**
<span class="dep">[fs-extra](https://npmjs.com/package/fs-extra)</span>
<span class="dep">[runscript](https://npmjs.com/package/runscript)</span>
<span class="dep">[rimraf](https://npmjs.com/package/rimraf)</span>
<span class="dep">[camelcase](https://npmjs.com/package/camelcase)</span>

</div>
