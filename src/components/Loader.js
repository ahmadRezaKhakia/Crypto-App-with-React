import React from 'react';

//GIF
import spinner from '../gift/image1.gif';

const Loader = () => {
  return (
      <div>
          <img src={spinner} alt="Lading" />
          <h1 style={{"color":'springgreen'}}>LOADING ...</h1>
    </div>
  )
}

export default Loader;