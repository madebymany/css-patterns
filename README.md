# A CSS pattern library for Sass

At Made by Many we love Sass and we love Bourbon. We use these technologies in alost every project we build and they give us a great base onto which we can build our CSS. 

In addition we've been compiling a library of common CSS patterns for some time now. We noticed that we were reusing different patterns to produce effects and layouts in all our projects and decided to break them out into reusable chunks.

The way we write CSS tends to follow BEM syntax and closely resembles some OOCSS practices. However, we tend to favour using the Sass ``@extend`` method to add patterns to CSS rules, rather than littering our elements with multiple styles.

For instance, we tend to favour this approach with placeholders:

```scss
.my-list-element {
  @extend %inline-list;
  background:blue;
}
```

```HTML
<ul class="my-list-element">
</ul>
```

Rather than this one with additional classes:

```scss
.my-list-element {
  background:blue;
}
```

```HTML
<ul class="my-list-element inline-list">
</ul>
```

Most of these patterns were developed by much smarter people than us and this library has been compiled with patterns from all over the internet. We will try and credit those smart people where we can, but if we've overlooked anyone please let us know or submit a PR to rectify our mistake.

## How it works

```scss
.my-class {
  @extend %expand-click-area;
}
```
These patterns are a collection on Sass placeholders and mixins. Much like Bourbon, nothing will be added to your compiled CSS that you did not explicitly ``@include`` or ``@extend``.

## Instlling with Bower

```
$ bower install css-patterns --save
```

In your root Sass file:

```scss
@include "bower_components/css-patterns/stylesheets/patterns"
```

Replace ``bower_components/`` here with the name of your bower component directory if necessary.

## Installing with NPM

```
$ npm install css-patterns --save
```

The follwing was adapted directly from the excellent [node bourbon](https://github.com/lacroixdesign/node-bourbon) project.

To use `css-patterns` with tools like gulp.js, Grunt, or directly with node-sass, provide the path to `css-patterns` in your Sass config.

The ``includePaths`` property returns an array of patterns's paths to use in your config.

```javascript
var patterns = require('css-patterns');
bourbon.includePaths // Array of patterns paths
```

Now pass that array as a property to your Sass compilation function

```javascript
var generatedCss = sass.renderSync({
  file: __dirname + '/my_sass_file.scss',
  includePaths: patterns.includePaths
});
```

In your root stylesheet imply include the following:

```scss
@import "patterns";
```

## Documentation

### %clearfix

```scss
@extend %clearfix;
```
Most of the time when we use `%clearix` all that we require is ``overflow: hidden`` and that's all this placeholder does.

### %clearfix-with-overflow;

```scss
@extend %clearfix-with-overflow;
```
Sometimes we require overflow on our clearfixed elements. This placeholder provides the clearfix used in [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate).

### %expand-click-area;

```scss
@extend %expand-click-area;
```
Sometimes icons and small buttons need a slightly larger hit area, particularly on touch interfaces. This placeholder adds a before element that is 10px wider and taller than the parent element that increases the click area by 10 px in every direction. [Original technique found here](http://front-back.com/expand-clickable-areas-for-a-better-touch-experience).

### %float-list;

```scss
@extend %float-list;
```
Extends unstyled list to remove the default styles from a list and it's children, and floats all the children left.

This pattern adds the ``float:left`` style to list items using a child combinator (``> *``). For compatibility with IE<8 add the following to your list item CSS.

```scss
@extend %float-list__item;
```

### fluid-media-wrapper;

```scss
@include fluid-media-wrapper;
```
The fluid media wrapper mixin provides the ability to maintain a consistent aspect ratio for video and media content while a llowing that content to scale to a maximum width in a responsive layout. 

The default parameters for the mixin will provide a 16x9 aspect ratio. Provide your own aspect ratio by passing parameters to the mixin. A 4:3 aspect ratio would be provided like this: 

```scss
@include fluid-media-wrapper(4 3);
```

[More info and the original technique can be found here](http://css-tricks.com/rundown-of-handling-flexible-media/).

### %image-replacement;

```scss
@extend %image-replacement;
```

This pattern provides an accessible way to hide text where background images are used on that element. [More information and the original technique can be found here](http://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/).

### %inline-list;

```scss
@extend %inline-list;
```
Extends unstyled list to remove the default styles from a list and it's children, and dislay's those children as ``inline-block`` elements. 

This pattern adds the ``inline-block`` property to list items using a child combinator (``> *``). For compatibility with IE<8 add the following to your list item CSS.

```scss
@extend %inline-list__item;
```

### %media-block;

```scss
@extend %media-block;
@extend %media-block__content;
@extend %media-block__aside-left;
@extend %media-block__aside-right;
```
The famous OOCSS media object given a BEM update.

```scss
.component {
  @extend %media-block;
}

.component__body {
  @extend %media-block__content;
}

.component__image {
  @extend %media-block__aside-left;
}
```

```HTML
<div class="component">
  <img src="path/to/img.jpg" class="component__image" />
  <div class="component__body">
    <!-- your content here -->
  </div>
</div>
```

[Click here for more info and the original technique](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/).

### %responsive-image;

```scss
@extend %responsive-image;
```

[More info and the original technique can be found here](http://css-tricks.com/rundown-of-handling-flexible-media/).

### %unbulleted-list;

```scss
@extend %unbulleted-list;
```

Removes buttet point styles from a list and it's children.

### %unstyled-anchor;

```scss
@extend %unstyled-anchor;
```

Removes text decoration and inherits the color of the parent.

### %unstyled-input;

```scss
@extend %unstyled-input;
```

Remove all browser styling from an input field.

### %unstyled-list;

```scss
@extend %unstyled-list;
```

Removes the default styles from a list and it's children.

### %vertical-align;

```scss
@extend %vertical-align;
@extend %vertical-align__child;
```

Allows vertical centering of elements with unknown dimensions. Apply the ``%vertical-align`` placeholder to the class of the parent element and the ``%vertical-align__child`` placeholder to the class of the element that should be vertically aligned within it.

[More information and the original techique can be found here](http://css-tricks.com/centering-in-the-unknown/).

### %visually-hidden;

```scss
@extend %visually-hidden;
```

Visually hides elements without hiding them from screenreaders or crawlers. 

[Taken straight out of HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/doc/css.md#visuallyhidden).

## Contributors

[Andy Walker](https://github.com/ninjabiscuit),
[Callum Jefferies](https://github.com/callum)
[Chris Bell](https://github.com/cjbell88),
[Nick Goward](https://github.com/NickGoward)

