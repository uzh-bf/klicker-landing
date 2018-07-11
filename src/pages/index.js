import React from 'react'
import { Element } from 'react-scroll'

import Slider from '../components/Slider'
import MainLayout from '../layouts/MainLayout'
import Section from '../components/Section'

const IndexPage = () => (
  <MainLayout>
    <Slider>
      <div>hello</div>
      <div>world</div>
    </Slider>

    <Section>
      <h2 id="firstHeader">
        <Element name="header1">header 1</Element>
      </h2>
      <p>content1</p>
    </Section>

    <Section>
      <h2 id="secondHeader">
        <Element name="header2">header 2</Element>
      </h2>
      <p>content2</p>
    </Section>

    <Section>
      <h2 id="thirdHeader">
        <Element name="header3">header 3</Element>
      </h2>
      <p>content3</p>
    </Section>

    <style jsx>{`
      .section {
        height: 300px;
        padding: 1rem 0;
      }

      .section2 {
        background-color: lightgrey;
      }
    `}</style>
  </MainLayout>
)

export default IndexPage
