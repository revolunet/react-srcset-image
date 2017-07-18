import React from "react";

class Image extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      src: null
    };
  }
  
  componentDidMount() {
    const el = this.img;
    if (el.complete) {
      const src = el.src;
      this.setState(() => ({
        src
      }));
    }
  }
  
  onImageLoaded = img => {
    const src = img.target.src;
    this.setState(() => ({
      src
    }));
  };
  render() {
    const { responsiveImage, title, alt } = this.props;
    const imgStyle = {
      display:'block',
      opacity: this.state.src ? 1 : 0.01,
      transition: "all 0.3s ease-in",
      width: '100%',
      height: 'auto',
    };
    return (
      <div
        style={{
          overflow:'hidden',
          backgroundSize: "contain",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: "top center",
          backgroundImage: 'url("' + responsiveImage.placeholder + '")',
          width: '100%',
          height: '100%'
        }}
      >
        <img
          ref={img => {
            this.img = img;
          }}
          style={imgStyle}
          onLoad={this.onImageLoaded}
          src={responsiveImage.src}
          srcSet={responsiveImage.srcSet}
          title={title}
          alt={alt}
        />
      </div>
    );
  }
}

export default Image;
