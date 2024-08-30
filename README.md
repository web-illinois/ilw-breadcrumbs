# ilw-breadcrumbs

Links: **[ilw-breadcrumbs in Builder](https://builder3.toolkit.illinois.edu/component/ilw-breadcrumbs/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The Illinois components implementation of breadcrumbs provides a list of formatted links that provide the path between the site’s home page and the page the reader is currently viewing.

The site’s home page should be the first link in the list of breadcrumbs and should link to the site root. Pages used to navigate between the home page and the current page should also be listed and linked.

The current page item should not be linked, since following a link to the current page would just reload the page.


## Code Example
```html
<ilw-breadcrumbs>
    <a href="/">Home</a>
    <a href="/academics">Academics</a>
    <a href="/academics/undergraduate">Undergraduate programs</a>
    <span>Degree programs</span>
</ilw-breadcrumbs>
```
## Upgrade Process
* Rename ```il-breadcrumbs``` to ```ilw-breadcrumbs```
* Remove ```il-breadcrumbs-page``` tag and replace it with an anchor ```a``` tag
* For the current page, remove ```il-breadcrumbs-page``` tag and replace it with ```span``` tag

## External References

https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/

https://www.nngroup.com/articles/breadcrumbs/