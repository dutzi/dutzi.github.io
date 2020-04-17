---
title: Userscripts Are Fun And Are Still Very Much Relevant
date: '2020-04-17T02:43:15.851Z'
description: 'Sharing my thoughts on userscripts, a phenomenon the swept the internet back in the 00s.'
tags: ['userscripts']
---

A userscript is a script that usually helps make the web a better place.

Want to use J and K keys to scroll through the new Facebook UI? There's [a userscript for that!](https://github.com/dutzi/userscripts/raw/master/facebook-j-k-scrolling.user.js)

Need that YouTube video on your drive? Guess what? [You can!](https://greasyfork.org/en/scripts/369400-local-youtube-downloader)

How about speeding up solving Google reCAPTCHA challenges by shortening transition effects and providing continuous selection ability? No? Ok, but [it is there.](https://greasyfork.org/en/scripts/31088-morecaptcha)

## History

It all started when the web was much, much younger. Firefox users back then suffered a pretty broken internet experience. Firefox had support for extensions, which helped in a way since you could write an extension to fix a broken site. But writing extensions wasn't as simple as it is today, and even today, it could be streamlined for the, apparently, very common use case where a site is broken and some simple JavsScript snippet could save the day.

Along came [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/). The idea behind GreaseMonkey, a Firefox extension release in 2005 was pretty simple. It let you compose a simple JS module that would later be injected into a predefined list of websites.

Exposing a [pretty slim API](https://wiki.greasespot.net/Greasemonkey_Manual:API), GreaseMonkey let you do nearly anything within the realm of "why the hell isn't this website aligned to right?!".

Chrome followed along by supporting userscripts straight out of the box, a feature that was later removed.

Nowadays the internet is pretty decent for all. Chrome, Firefox, Safari, and IE are all first-class citizens. So why are userscripts still necessary?

## Present

At the company I work at, one of our products is an embeddable commenting system. Unlike single-page applications, when we encounter bugs they're usually on the client's website. This raised the question, how can we embed a piece of code that will run on all our client's websites, that will help us debug and improve our overall build experience.

We could bookmark a snippet, but that's just plain ugly and we need deeper browser APIs not exposed to "userland" javascript, living on the page.

We could create a browser extension, but that means developing one for all major browsers.

As you may have guessed, the answer was <span class="highlight">userscripts.</span>

But that's not the only cause, I made countless userscript in the past that introduced some improvements to existing sites.

I wrote one that adds links to a song's lyrics and its Wikipedia page, once you play one on YouTube.

Later wrote one that fixes Hebrew fonts on a wonky WhatsApp web version.

And a few more.

## How

Creating a simple Userscript is pretty simple, you simply install [ViolentMonkey](https://violentmonkey.github.io/) (on Chrome, use [TamperMonkey](https://www.tampermonkey.net/) for other browsers), hit the Create Userscript button and you will be preseneted with a pretty decent code editor showing a userscript template.

If that's not working for you (say you passed the 1,000 LOCs and things get a bit spaghetti-y), you can try [webpack-userscript](https://github.com/momocow/webpack-userscript). Configure and run it, it will start a Webpack dev server, serving your userscript locally. You can then split your code up into modules, use all your favorite NPM packages and all the great things that come with using a bundler.
