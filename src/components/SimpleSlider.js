import React from "react"
import Carousel from "react-elastic-carousel"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
]

const SimpleSlider = () => {
  return (
    <>
      <div className="App_new">
        <Wrapper>
          <Carousel
            breakPoints={breakPoints}
            enableAutoPlay
            autoPlaySpeed={1500}
          >
            <StaticImage
              src="https://www.selectmumbaigirl.com/images/top/mumbai-sexy-girls.jpg"
              alt="escorts mumbai"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />

            <StaticImage
              src="https://www.selectmumbaigirl.com/images/top/russian-escorts-in-mumbai.jpg"
              alt="escorts mumbai"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="https://www.selectmumbaigirl.com/images/top/advanced-bookings.jpg"
              alt="escorts mumbai"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="https://www.selectmumbaigirl.com/images/top/specialoffers.jpg"
              alt="escorts mumbai"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="https://www.selectmumbaigirl.com/images/top/escorts-ranking.jpg"
              alt="escorts mumbai"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="https://www.selectmumbaigirl.com/images/top/mumbai-sexy-girls.jpg"
              alt="escorts mumbai"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="https://www.selectmumbaigirl.com/images/top/russian-escorts-in-mumbai.jpg"
              alt="escorts mumbai"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="https://www.selectmumbaigirl.com/images/top/advanced-bookings.jpg"
              alt="escorts mumbai"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="https://www.selectmumbaigirl.com/images/top/specialoffers.jpg"
              alt="escorts mumbai"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="https://www.selectmumbaigirl.com/images/top/escorts-ranking.jpg"
              alt="escorts mumbai"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
          </Carousel>
        </Wrapper>
      </div>
    </>
  )
}

const Wrapper = styled.div`
  .App_new {
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .img_slider {
    margin: 10px;
  }
  .rec-arrow-left {
    color: black !important;
    background: yellow !important;
  }
  .rec-arrow-right {
    color: black !important;
    background: yellow !important;
  }
`

export default SimpleSlider
