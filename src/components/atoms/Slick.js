import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import d1 from '../../assets/01.jpg'
import d2 from '../../assets/02.jpg'
import d3 from '../../assets/03.jpg'
import d4 from '../../assets/04.jpg'

const Fade = () => {
  const params = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider className='slider' {...params}>
      <div>
        <img src={d1} alt='' />
      </div>
      <div>
        <img src={d2} alt='' />
      </div>
      <div>
        <img src={d3} alt='' />
      </div>
      <div>
        <img src={d4} alt='' />
      </div>
    </Slider>
  );
};
export default Fade;