---
path: "/html/3"
date: '2019-03-04'
title: "HTML 03 - Semantic HTML"
description: 
image: ''
tags: ['프론트엔드', 'HTML']
---
> understanding general front-end development and HTML
> - [reference](https://internetingishard.com/)

### Semantic HTML
the idea that all your HTML markup should __convey__ the __underlying meaning__ of your __content__, not its appearance.

#### Document Outline
the semantics of the content of the page
- semantics: _hierarchical structure_ of a page
- __heading__ contribute to the semantics in a web page
- __sectioning elements__ also help create semantics in web pages

#### Sectioning Elements
_alternative to < div>_ but with __meaning__ to make it easier for search engines, screen readers, and other machines to identify the different parts of your website
- `<header>`: denotes introductory content
    - company's logo, navigation, author information, etc.
- `<nav>`: sections for navigation
- `<article>`: 
    - needs to _make sense even outside the context_ of the document; can be plucked out of your page and distributed in a completely different context
    - they are essentially mini web pages in the document and have _their own headers, footers, and document outline_, completely isolated from the rest of your sites
- `<section>`:
    - as __container__ for __layout purposes__: _explicit way to define sections_ in a document outline
    - similar to < article> but _doesn't need to make sense outside the context_ of the document
- `<aside>`: separate section to not be part of any articles
    - sidebar
    - advertisement
    - highlighted definitions, stats, or quotations
- `<footer>`: closing content
    - copyright notices, footer navigation, author bios, etc.
- `<figure>`: self-contained figure
    - contains `<img>`: diagram, illustration, code snippet, etc.
    - `<figcaption>`: optional caption for parent < figure> element; can replace the < img>'s alt attribute
- `<address>`: contact information for the author of the article or webpage
    - should not be used for arbitrary physical addresses
- `<time>`: time of day or calender date

#### Layout
- use __semantic HTML__ whenever you can
    - to help machines infer the structure of the content
    - but don't use them just for the sake of using them
    - whenever in doubt, _use a < div> instead_
- however, there is nothing wrong w/ using __< div> purely for layout purpose__
    - particularly for __flexbox__

#### CSS/Legacy Considerations
- legacy browsers may not be able to recognize semantic HTML elements so include the following in CSS stylesheets:
```css
section, article, aside, footer, header, nav {
        display: block;
}
```

#### Extra Semantic Bits
- [Schema.org microdata](https://schema.org/docs/gs.html): can alter the appearance of your site in search engine results
- [Twitter cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started): defines how your web page is displayed in tweets
- [Open Graph metadata](https://developers.facebook.com/docs/sharing/webmasters#markup): changes how Facebook shares your content