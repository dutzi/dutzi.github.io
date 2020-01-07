---
title: Commenting Solutions For Your Blog
date: '2020-01-07T21:54:49.652Z'
description: 'Going through some commenting systems you can easily embed in your blog.'
tags: ['comments', 'blog']
---

I was looking for a simple commenting system I could embed in my blog, my requirements were:

1. Simple - I'm not looking for threading, reactions, Giphy integration, uploading images or videos, etc... I just want a simple way for user to read and write comments.
2. Serverless (for me) - Meaning I don't need to set up a server for it.
3. Customizable - I can customize its UI, either by provide my own CSS, or have extensive customization options.
4. Markdown support.
5. Free.

I work [at a company](https://www.spot.im/) where our main product is an embeddable commenting system, so I consider myself as pretty knowledgeable in this field. That's why I was surprised to learn about the many solutions I found I wasn't already aware of.

<!-- I will now share my findings, after spending a day or so going through existing solutions. -->

## Off the Shelf Solutions

<!-- Off the shelf solutions mostly have a some sort of , so that wasn't the good enough for my needs. -->

I didn't go too in-depth when going through these kind of systems, since I wasn't too happy with how customizable they were, so I will only skim through them.

First, there's [Disqus](https://disqus.com/), they have a ton of features but customization is not one of them. I mean, they are customizable to some extent, but not what I was looking for. They have a pricing model where free usage is supported by ads, otherwise you pay \$10-\$100 a month.

There's also [Commento](https://commento.io/), [Facebook Comments](https://developers.facebook.com/docs/plugins/comments/), [Just Comments](https://just-comments.com/), [Hyvor](https://hyvor.com/) and [others](https://www.gatsbyjs.org/docs/adding-comments/). Again, not customizable enough.

## Github Issues Based

As I was going through existing solutions a thought came to my mind - why not use Github Issues as a platform for comments?

Theoretically, you can create an issue per each blog post you publish, and then using [Github's extensive API](https://developer.github.com/v3/issues/), display comments for that issue on your site, as if they were comments for your post, and let users add comments to that blog post by having them actually sent as comments to that Github issue.

Excited with that idea I started working on a POC, I was very easily able to display comments (and on the way break [Github's rate limits](https://developer.github.com/v3/#rate-limiting) by forgetting to provide a `useEffect` with a dependency list and causing my blog to send a bazillion requests to Github), then as I was trying to add Github's OAuth login to my blog I found I wasn't the first person to think about this "hack".

Turns out there are 4 different solutions based on the same idea.

[Gitment](https://github.com/imsun/gitment), the first one I tried, seemed promising but I was just not able to set it up. After coming across some `alert`s and certification warnings, and seeing it had 129 open issues and almost two years since the last commit, I gave up. It's approach was similar to what I had in mind, create an issue per each blog post, display the comments using Github's API and, by creating a Github App for my blog and using it to get an auth token, let users submit comments directly from my blog. Too bad it doesn't work anymore, but there were other solutions.

[Vssue](https://vssue.js.org/), similar to Gitment, but it supports Gitlab, Bitbucket, Gitee or Gitea issue systems. I also has a few more features (users can edit and delete comments without visiting Github). It's based on Vue and I didn't feel like hacking it to work with a Gatsby based blog, so on to the next one.

[Utterances](https://utteranc.es/), the one that definitely stands out here. It doesn't require setting up a Github App, but uses [its own app](https://github.com/apps/utterances) to get the token needed for submitting comments. It seems promising because it's well maintained and its UI is very nice and consistent with Github's (it's based on [Primer](https://primer.style/), GitHub's design system). The only drawback, for me, was the lack of extensive customization options. Utterances opens up in an iframe, so you can't just override its CSS, you are able to submit your own theme, but one that only overrides the colors and some spacing variables.

[Gitalk](https://github.com/gitalk/gitalk), the one I ended up going with, is very similar to Gitment, except that it actually works. After creating the Github App (that's needed for the token), and providing Gitalk with some basic parameters I was able to see it live on my blog. Then, by overriding its CSS I was easily able to play around with the way it looks.

Gitalk will automatically create a Github Issue in your blog's repository as soon as you visit a blog post page for the first time. So all I need to do is simply publish a post and visit its page. Awesome!
