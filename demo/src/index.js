import React from 'react'
import {render} from 'react-dom'
import GithubCorner from 'react-github-corner'

import Image from '../../src'

const image = require('responsive-loader?placeholder=true&sizes[]=400&sizes[]=600&sizes[]=1000&sizes[]=1400!./image.jpg');

class Demo extends React.Component {
  render() {
    return (
      <div>
        <h1>react-srcset-image Demo</h1>
        <GithubCorner href="https://github.com/revolunet/react-srcset-image" />
        <div style={{ width:'80%', height:800}}>
          <Image responsiveImage={image}/>
        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
