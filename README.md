# react-srcset-image

[![npm package][npm-badge]][npm]

React component to optimize your images based on `srcset` and an automatic medium-like blur animation using webpack [responsive-loader](http://github.com/revolunet/responsive-loader).

 - Creates srcset images with webpack
 - Embed base64 blurred placeholder
 - Animate between placeholder and final image

Demo : [http://revolunet.github.io/react-srcset-image](http://revolunet.github.io/react-srcset-image)

:warning: this component needs webpack to produce multiple images sizes for you.

# Usage

```jsx
import Image from 'react-srcset-image'

const imageSrc = require('responsive-loader?placeholder=true&sizes[]=100,sizes[]=200,sizes[]=300,sizes[]=500,sizes[]=800!./image.jpg');

const Demo = () => (
  <div>
    <Image responsiveImage={image}/>
  </div>
)
```


[npm-badge]: https://img.shields.io/npm/v/react-srcset-image.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-srcset-image
