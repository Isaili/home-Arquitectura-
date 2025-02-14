import axios from 'axios';
import React, { useState } from 'react';

const Aire = () => {
  const [isOriginalImage, setIsOriginalImage] = useState(true);


  const originalImageUrl = 'https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-white-air-conditioner-image_1297084.jpg';
  const alternateImageUrl = 'https://bpic.588ku.com/element_origin_min_pic/23/04/24/e373b60cd4e8ca2e7cb0ef8580ca1b87.jpg';

  const toggleImage = () => {
    setIsOriginalImage(!isOriginalImage);
  };


  // ====================================================================================
  //fetch del clima
  const fetchaData = async () => {
    // todas las dierecciones son esta
    const data = await axios.get('http://localhost:3000/event')
      .then(data => { return data.data })

      //Cambia la imagen del aire segun su estado
      //Comparar la el estado enviado, si es otro diferente no actuara
    if (data.tipo === "aire"){
      setIsOriginalImage(data.state ? !isOriginalImage : isOriginalImage);
    }
  }
  // ====================================================================================

  fetchaData();

  const buttonStyles = {
    position: 'absolute',
    width: '50px',
    height: '50px',
    backgroundImage: `url(${isOriginalImage ? originalImageUrl : alternateImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: 'transform 0.2s',
    top: '85px',
    left: '66%',
  };


  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <button
      style={buttonStyles}
      onClick={toggleImage}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Aire;
