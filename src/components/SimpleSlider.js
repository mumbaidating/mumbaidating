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
              src="../assets/images/slider/anal-sex.jpg"
              alt="Mumbai escorts anal sex"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />

            <StaticImage
              src="../assets/images/slider/cheaprate-escorts.jpg"
              alt="cheaprate mumbai escorts"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="../assets/images/slider/girls-mobile-number.jpg"
              alt="mumbai escorts mobile number"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="../assets/images/slider/girls-whatsapp-number.jpg"
              alt="mumbai escorts whatsapp number"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="../assets/images/slider/housewife-escorts.jpg"
              alt="mumbai housewife escorts"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="../assets/images/slider/mumbai-randis.jpg"
              alt="Mumbai escorts randi"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="../assets/images/slider/phone-sex-mumbai.jpg"
              alt="phone sex mumbai escorts"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="../assets/images/slider/sex-massage-in-bangalore.jpg"
              alt="sex massage mumbai escorts"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="../assets/images/slider/sex-workers.jpg"
              alt="sex workers mumbai"
              placeholder="blurred"
              layout="constrained"
              className="img_slider"
            />
            <StaticImage
              src="../assets/images/slider/sexy-aunty-number.jpg"
              alt="sexy aunty number"
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
  @media only screen and (max-width: 425px) {
    .rec-arrow-left {
      display: none;
    }
    .rec-arrow-right {
      display: none;
    }
  }
`

export default SimpleSlider
