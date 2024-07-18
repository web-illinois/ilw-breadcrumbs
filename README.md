# ilw-breadcrumbs

Links: **[ilw-breadcrumbs in Builder](https://builder3.toolkit.illinois.edu/component/ilw-breadcrumbs/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The Illinois components implementation of breadcrumbs provides a list of formatted links that provide the path between the site’s home page and the page the reader is currently viewing.

The tag <ilw-breadcrumbs> is used for the container which will include one or more links in order to provide a navigable path for users to move to different points in the website’s structure.

The site’s home page should be the first link in the list of breadcrumbs and should link to the site root. Pages used to navigate between the home page and the current page should also be listed and linked.
The current page item should contain the “current” tag in code and should not be linked, since following a link to the current page would just reload the page.


## Code Examples

```html
<ilw-breadcrumbs>
    <a home="/" href="/">Home</a>
    <a href="/academics">Academics</a>
    <a href="/academics/undergraduate">Undergraduate programs</a>
    <a href="" current="">Degree programs</a>
</ilw-breadcrumbs>

<ilw-breadcrumbs>
    <a home="/" href="/">Home</a>
    <a href="/academics">Academics</a>
    <a href="/academics/undergraduate">Undergraduate programs</a>
    <span>Degree programs</span>
</ilw-breadcrumbs>

```

## External References

https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/

https://www.nngroup.com/articles/breadcrumbs/