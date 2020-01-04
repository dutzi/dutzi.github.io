---
title: Things I've Learnt Using VSCode
date: '2020-01-04T06:26:28.307Z'
description: 'Listing some extensions I found useful and some of my keyboard shortcuts'
---

[**VSCode**](https://code.visualstudio.com/) is one hell of an editor. About two years after it was initially announced I started using it regularly, and, as much as I cherish Sublime Text, I haven't looked back since.

Here are some of my favorite extensions.

## Naming Is Hard

Naming things is one of the toughest problems I encounter daily while programming.

A lot of times I would google the not-so-good name I came up with just to see when comes up.

[Altervista Thesaurus](https://marketplace.visualstudio.com/items?itemName=brunnerh.altervista-thesaurus), [Cinnanyms](https://marketplace.visualstudio.com/items?itemName=FordLabs.cinnanyms) and [Dictionary Lookup](https://marketplace.visualstudio.com/items?itemName=Compulim.compulim-vscode-dictionary) all try solving this issue by listing synonyms of whatever word you give them.

It's nice and it helps some of the time. But sometimes the word I'm looking for isn't an equivalent of some word. Sometimes I'll have a word, and I'll want to know what is it a type of. For example, the word "example" is a type of "representation". For that, I'll use [Words API](https://www.wordsapi.com/). No VSCode extension for it yet.

## Editing Utils

[Change Case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case) has been in my toolbelt since I've been using Sublime Text. I am using it so much that I've set up the following keybindings for it:

```json
[
  // ...
  {
    "key": "cmd+i cmd+k",
    "command": "extension.changeCase.kebab"
  },
  {
    "key": "cmd+i cmd+c",
    "command": "extension.changeCase.camel"
  },
  {
    "key": "cmd+i cmd+p",
    "command": "extension.changeCase.pascal"
  },
  {
    "key": "cmd+i cmd+s",
    "command": "extension.changeCase.snake"
  },
  {
    "key": "cmd+i cmd+t",
    "command": "extension.changeCase.title"
  }
]
```

[Expand Region](https://marketplace.visualstudio.com/items?itemName=letrieu.expand-region) - This one lets you bind a keyboard shortcut to expanding and contracting the selected region, having a GIF explain it makes so much sense, so check out the GIF in the link.

[Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - Displays the size of an imported 3rd party module, next to the import statement. Doesn't _always_ work for me, but when it does it's really neat. Save the hassle of going to [Bundle Phobia](https://bundlephobia.com/).

[Incrementor](https://marketplace.visualstudio.com/items?itemName=nmsmith89.incrementor) - Lets you bind a keyboard shortcut to increment/decrement the value within the current selection(s). I used to havily depend on this one but haven't much since I moved to VSCode. Maybe you'll find it useful though.

[Insert Numbers](https://marketplace.visualstudio.com/items?itemName=Asuka.insertnumbers) - Insert a range of numbers to all cursor positions. Useful for large variety of use cases.

[Multiple Cursor Case Preserve](https://marketplace.visualstudio.com/items?itemName=Cardinal90.multi-cursor-case-preserve) - Got a curser over a bunch of words cased differently? Once you start typing, this extensions will preserve the casing under each selection. I use this one a lot!

[Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - Autocompletes paths as you write them. I've been using this one so much and it feels so natural that I'm not even sure this wasn't baked into VSCode already.

[Permute Lines](https://marketplace.visualstudio.com/items?itemName=earshinov.permute-lines) - As the name suggests, this one exposes some nice line manipulation tools.

[Select Part Of Word](https://marketplace.visualstudio.com/items?itemName=mlewand.select-part-of-word) - This one lets you traverse camel-cased words easily.

## Diff

[Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff) - VSCode has a nice UI for diffing files. This extension lets you enjoy that UI when diffing between a wider variety of input sources (files, clipboard and current selection), so you can diff between the contents of your clipboard and your current selection.

## Files

[Copy File Name](https://marketplace.visualstudio.com/items?itemName=nemesv.copy-file-name) is useful in projects where the filenames are the names of the classes/functions they contain. With it I can Cmd+Shift+P > Type "cfn" > Enter, then paste it somewhere I need it, and using the kybindings for Change Case, change its case to whatever.

[File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils) - This extension adds some use file manipulation commands to the Command Palette.

## Others

[Copy JSON Path](https://marketplace.visualstudio.com/items?itemName=nidu.copy-json-path) is very useful in all sorts of use cases. One that pops to my mind immediately when thinking about this extension is where you need to specifiy the getter string (or JSON path) for an i18n string that resides in some lengthy JSON.

[Quit Control for VSCode](https://marketplace.visualstudio.com/items?itemName=artdiniz.quitcontrol-vscode) - Quit control will pop a message making sure you really want to leave once you hit Cmd+Q / Cmd+Shift+W. This one saved me so many times.
