# ilw-breadcrumbs

Links: **[ilw-breadcrumbs in Builder](https://builder3.toolkit.illinois.edu/component/ilw-breadcrumbs/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The Illinois components implementation of breadcrumbs provides a list of formatted links that provide the path between the site’s home page and the page the reader is currently viewing.

The tag <il-breadcrumbs> is used for the container which will include one or more <il-breadcrumb-page> items in order to provide a navigable path for users to move to different points in the website’s structure.
## Code Examples

```html
<ilw-breadcrumbs>
  <il-breadcrumbs-page>Degree Programs</il-breadcrumbs-page>
</ilw-breadcrumbs>
```

## Accessibility Notes and Use

Consider accessibility, both for building the component and for its use:

- Is there sufficient color contrast?
- Can the component be fully understood without colors?
- Does the component need alt text or ARIA roles?
- Can the component be navigated with a keyboard? Is the tab order correct?
- Are focusable elements interactive, and interactive elements focusable?
- Are form fields, figures, fieldsets and other interactive elements labelled?

## External References
