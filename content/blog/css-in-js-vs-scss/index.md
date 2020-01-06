---
title: Thoughts On CSS-in-JS
date: '2020-01-06T00:50:03.214Z'
description: 'Sharing my experience working both with SCSS and Styled Components.'
tags: ['css', 'scss', 'css-in-js']
---

**Tl;dr:**
I had sort of a fight with a colleague who decided we should remove [Styled Components](https://github.com/styled-components/styled-components) from our code base. He won. We went back to "plain" SCSS and much to my surprise I didn't feel any pain resulting from this move.

## I Had A Crush On Styled Components

When I first heard of the concept of CSS-in-JS I didn't see the point in it, but when I started using it I fell in love. Interoperating between Javascript and CSS seemed to make so much sense. Kind of like the first days of NodeJS, when you realize you can use Javascript to write servers and CLI tools.

So finding out our guys from FED infra decided to ditch it was painful.

Why ditch it? The main reason was bundle size. Styled Components [weighing in at 16.4Kb](https://bundlephobia.com/result?p=styled-components@4.4.1) is a bit hefty, and bringing in it's sister library, [Polished](https://github.com/styled-components/polished) will bring that number up by [another 10.8Kb](https://bundlephobia.com/result?p=polished@3.4.2).

## Why CSS in JS?

We already know Javascript, why not leverage that knowledge when styling our components? Agreed, it takes time to get used to seeing CSS sharing room with code, but being front end developers we should be able to adapt quickly to changes by now. I mean, React did the same thing with HTML and JS but look where it brought us.

## So, Am I For Or Against CSS-in-JS?

Well, I'm not really sure.

I mean, you can do pretty much anything with SCSS, from [scoped variable declarations](https://sass-lang.com/documentation/variables#scope) to [for loops](https://sass-lang.com/documentation/at-rules/control/for), SCSS is pretty awesome, so I can't say I felt like a super human while using Styled Components. I had pretty much the same abilities. Which is why after making the move back to SCSS **I didn't really feel it affect my workflow**. I was able to deliver at the same pace and my code seemed pretty much the same, reasonable code I produce day to day.

Thinking about it, I may tend be a bit more towards SCSS, mostly because it's been around for a while. It's more mature, got great tooling around it and more people _speak_ it.
