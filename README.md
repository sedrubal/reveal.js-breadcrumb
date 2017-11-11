Reveal.js Breadcrumb Plugin
===========================

Breadcrumbs plugin for reveal.js
--------------------------------

Adds breadcrumbs to the bottom of the slides generated out of the slide ID.

Usage
-----

 - Install with npm, yarn or bower: `(npm install|yarn add|bower install) reveal.js-breadcrumb`
 - Add HTML IDs to your slides. If you want a breadcrumb like `Foo > Bar Section` name the title: `Foo:Bar_Section`
 - Add `{ src: 'breadcrumb/breadcrumb.js', async: true },` to the dependencies section
 - Add `<link rel="stylesheet" href="breadcrumb/breadcrumb.css">`
 - If you want to display no breadcrumb on single slides, add `data-nobreadcrumb=""` to the slide. You can also add this to a encapsulating slide to hide breadcrumbs for child breadcrumbs.

Example
-------

![example screenshot](./breadcrumb_example.png)

License
-------

[GPLv3](https://www.gnu.org/licenses/gpl.html)
