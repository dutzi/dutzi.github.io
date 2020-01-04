---
title: Things I Wish Someone Had Told Me Sooner
date: '2020-01-04T08:13:35.942Z'
description: 'Running .ts files straight from the command line'
tags: tsnode
published: false
---

## TS Node

[ts-node](https://github.com/TypeStrong/ts-node) lets you run .ts files from the cli as is they were transpiled .js files.

Simply install it:

```bash
$ npm install -g ts-node
$ npm install -g typescript
```

And run a .ts file:

```bash
$ ts-node script.ts
```

Or use it as a REPL

```bash
$ ts-node
```

[Nodemon](https://github.com/remy/nodemon) even supports it out of the box!

<!-- <div class="dependencies">

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

</div> -->
