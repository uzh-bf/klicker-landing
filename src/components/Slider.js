import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MaxWidth from './MaxWidth'

export default ({ children }) => (
  <div className="klicker-slider">
    <MaxWidth>
      <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
        {children}
      </Slider>
    </MaxWidth>

    <style jsx global>{`
      .slick-slider {
        height: 300px;
        padding: 1rem;
      }
    `}</style>

    <style jsx>{`
      .klicker-slider {
        background-color: #b2defc;
      }
    `}</style>
  </div>
)
