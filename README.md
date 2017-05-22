# react-srcset-image

[![npm package][npm-badge]][npm]

React component to optimize your images based on `srcset` and add an automatic medium-like blur animation.

 - Creates srcset images with webpack and [responsive-loader](http://github.com/revolunet/responsive-loader).
 - Embed base64 blurred placeholder (default: 100x100)
 - Animate between placeholder and final image

Demo : [http://revolunet.github.io/react-srcset-image](http://revolunet.github.io/react-srcset-image)

:warning: This component needs webpack to produce multiple images sizes for you.
:warning: The image needs to be statically defined

# Usage

```jsx
import Image from 'react-srcset-image'

// webpack responsive-loader config
const imageSrc = require('responsive-loader?placeholder=true&sizes[]=100,sizes[]=500,sizes[]=1000!./image.jpg');

const Demo = () => <Image responsiveImage={imageSrc}/>
```


[npm-badge]: https://img.shields.io/npm/v/react-srcset-image.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-srcset-image
