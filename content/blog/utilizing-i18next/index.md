---
title: Things I've Learnt Utilizing <em>I18next</em>
date: '2020-01-06T02:55:36.245Z'
description: 'I18n can be a pain. This quick tutorial should give you enough to alleviate some of it.'
tags: ['i18n', 'i18next', 'locize']
issue: 10
---

Dealing with i18n can be such a pain. It's one of those things you barely touch so once you do you have to re-learn what you have forgotten since the last time you visited it. You also need to decide who's the source of truth, is it the code? the JSON? the translation service? You've got plurals (which for some languages are comprised of more than two variants), i18n keys (that can't be minified), string interpolation, and on and on and on... All that so you can display a string in a bunch of languages.

## In Comes I18next

[I18next](https://github.com/i18next/i18next) is a framework for i18n. As defined in their [docs](https://www.i18next.com/):

> i18next goes beyond just providing the standard i18n features such as (plurals, context, interpolation, format). It provides you with a complete solution to localize your product from web to mobile and desktop.

Using i18next in conjunction with [react-i18next](https://www.npmjs.com/package/react-i18next) (there's an Angular, Vue and even jQuery support, [among others](https://www.i18next.com/overview/supported-frameworks)) will help you maintain expressive code that's i18n ready.

Take a look at the following JSX:

```tsx
<div>Just simple content</div>
<div>
  Hello <strong title="this is your name">{name}</strong>, you have {count} unread message(s). <Link to="/msgs">Go to messages</Link>.
</div>
```

Using react-i18next this is how it looks like after adding support for i18n:

```tsx
<div>{t('Just simple content')}</div>
<Trans i18nKey="userMessagesUnread" count={count}>
  Hello <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message. <Link to="/msgs">Go to messages</Link>.
</Trans>
```

You can either wrap a piece of string with a `t` function (which is returned by the `useTranslation` hook), or use the `<Trans>` component that can render children and inject them with the right values.

The JSON for this component would look like this:

```json
"Just simple content": "Just simple content",
"userMessagesUnread": "Hello <1>{{name}}</1>, you have {{count}} unread message. <5>Go to message</5>.",
"userMessagesUnread_plural": "Hello <1>{{name}}</1>, you have {{count}} unread messages.  <5>Go to messages</5>.",
```

Notice how the key for "Just simple content" is the string itself. You might want to give it a key, perhaps something shorter, but this behavior is great for shorter strings ("Yes", "No", "Cancel"...) because it means they only get translated once.

Also, notice how `<Trans>` break the JSX in a way that stands out for translators and can later be re-assembled and injected to the actual components.

### Generating the JSON

Once you are done adding `t`'s and `<Trans>`'s, you can use [i18next-scanner](https://github.com/i18next/i18next-scanner), which scans your code for references to i18next and generates a JSON with all the data, ready to be translated (it will merge into an existing JSON if one exists).

It doesn't support TypeScript, but for that you can use [compare-i18n](https://www.npmjs.com/package/compare-i18n) which does some of the work (it will only compare with an existing JSON but won't add the keys).

## Sending to Translators

I18next is a standard which is adopted by a few translation services, where I work at we chose to go with [Locize](https://locize.com/) that has [One Hour Translation](https://www.onehourtranslation.com/) (**OHT**) integration which makes translating a breeze.

The way it works is as follows.

We have two scripts defined in our `package.json`, one that syncs our main language's JSON with whatever is in Locize and one that downloads the other language's translation files, after they were translated.

```json
"upload-translations": "locize sync --project-id LOCIZE_PROJECT_ID --path src/translations",
"download-translations": "locize download --project-id LOCIZE_PROJECT_ID --path src/translations",
```

Whenever we introduce new strings to our app, we run `upload-translations`, then within Locize's console we get a quote from OHT, approve it, wait 24 hours and run `download-translations`. Simple, right?

<div class="dependencies">

**Dependencies:**
<span class="dep">[i18next](https://www.npmjs.com/package/i18next)</span>
<span class="dep">[react-i18next](https://www.npmjs.com/package/react-i18next)</span>
<span class="dep">[i18next-scanner](https://github.com/i18next/i18next-scanner)</span>
<span class="dep">[compare-i18n](https://www.npmjs.com/package/compare-i18n)</span>

</div>
