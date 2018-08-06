import React from 'react'
import Slider from 'react-slick'
import { Container } from 'semantic-ui-react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default ({ children }) => (
  <div className="klicker-slider">
    <Container>
      <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
        {children}
      </Slider>
    </Container>

    <style jsx global>{`
      .slick-slider {
        height: calc(300px + 2rem);
        padding: 1rem;
      }
    `}</style>

    <style jsx>{`
      .klicker-slider {
        background-color: #b2defc;
        margin-bottom: 3rem;
      }
    `}</style>
  </div>
)
