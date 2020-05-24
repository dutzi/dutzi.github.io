---
title: I Built a Simple Serverless Storage Solution
date: '2020-05-24T08:01:18.334Z'
description: 'I needed a quick storage solution for a simple project so I ended up creating a generic one.'
tags: ['serverless', 'jamstack', 'database', 'localStorage']
---

Looking for apartments in Tel Aviv is a drag.

Prices are high, demand is high and dealing with real estate brokers isn't fun. But most of all, Israeli websites (well, <a href="https://yad2.co.il/" target="_blank" rel="noopener noreferrer">Yad2</a>, the Israeli Redfin, is basically all we have) that help look for apartments are crappy as hell.

To keep as low friction as I could with Yad2 I wanted to create a bot that'll send me a message (on Telegram) whenever a new apartment that asnwers my criteria is posted. Bot available [here](https://github.com/dutzi/yad2-notifier).

Sending a Telegram message was pretty straightforward, and so was getting the data, the only thing that bummed me was that I had to set up a database, so that the bot will "remember" which apartments it had already sent me. I was looking for a free storage (well, database actually) service that was easy to communicate with and required as little effort as possible.

I couldn't find anything that was less than 3 clicks away, so I built one.

## Introducing Cloud Local Stroage

[Cloud Local Storage](https://cls.tools/) (CLS) is the outcome of that weekend's worth. It's a very simple DB, built on top of Firebase that is accessible through a Node SDK, web API and a commnad line tool.

Simply install it:

```bash
$ yarn add cloud-local-storage
```

And then, using a local-storage-like API, use it:

```js
import cls from 'cloud-local-storage'

await cls.setItem('foo', { bar: 1 })
await cls.getItem('foo') // {bar: 1}
```

And that's it! Without the need to signup or start a database you are able to store & load data from the cloud.

Using CLS that way will store the data globally, meaning that if someone else calls `cls.setItem('foo', {bar: 2})`, they will overwrite your content.

To help with that you can either provide something more unique key than `foo`, _or_ you could call `cls.setItem` without passing a key (passing only the data). When doing so, CLS will generate a key using uuidv4 and return it to you:

```js
import cls from 'cloud-local-storage'

await cls.setItem({ bar: 1 }) // c6cd9316…
await cls.getItem('c6cd9316…') // {bar: 1}
```

Lastly, you can also namespace all your storaged keys under your account.

## Creating Accounts

Cloud Local Storage also supports account based storages. Using CLS's [commnad line tool](https://cls.tools/docs#cli) you can sign up for CLS, you will then get a token, using that token you can store & load data under your account.

First install the CLS's command line tool:

```bash
$ yarn global add cloud-local-storage-cli
```

Then initialize it:

```bash
$ cls init
```

Follow the instuctions and after signing up the commnad line tool will save your token to `~/.clsrc`.

Now you can use the SDK with your token:

```js
import cls from 'cloud-local-storage'

const myStorage = cls('my-token-from-the-command-line-tool')
myStorage.setItem('userData', { a: 1 })
myStorage.getItem('userData') // {a: 1}
```

## Space or Bandwidth Restrictions

Right now there aren't any space or bandwidth restrictions, but if it becomes pricey I might ask users to verify their account by phone beyond a certain usage threshold. The plan is to keep it free as long as I can and if it gets big find cheaper solutions (MongoDB, DynamoDb, etc...) or look for sponsership.

Anyhow, hope you find this useful.
