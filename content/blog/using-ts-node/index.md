---
title: Things I Wish Someone Had Told Me Sooner
date: '2020-01-04T08:13:35.942Z'
description: 'Running .ts files straight from the command line using ts-node.'
tags: ['ts-node', 'typescript', 'cli', 'node']
issue: 8
---

## TS Node

[ts-node](https://github.com/TypeStrong/ts-node) lets you run .ts files from the cli as if they were transpiled .js files.

Simply install it:

```bash
$ npm install -g ts-node
$ npm install -g typescript
```

And run a .ts file:

```bash
$ ts-node script.ts
```

Or use it as a REPL:

```bash
$ ts-node
```

[Nodemon](https://github.com/remy/nodemon) even supports it out of the box!
