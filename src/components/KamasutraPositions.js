import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const KamasutraPositions = () => {
  return (
    <Wrapper>
      {/* slide line start  */}
      <h3 className="cat_h2">
        Try This Top 8 Kamasutra Positions With Your Partner
      </h3>
      {/* slide line start  */}
      <div className="kamasutra_box_wrapper">
        <div className="kamasutra_box">
          <StaticImage
            src="../assets/images/cat.png"
            alt="mumbai escorts"
            placeholder="blurred"
            layout="constrained"
            className=""
          />
          <p className="kama_text">CAT</p>
        </div>
        <div className="kamasutra_box">
          <StaticImage
            src="../assets/images/cowgirl.png"
            alt="mumbai escorts"
            placeholder="blurred"
            layout="constrained"
            className=""
          />
          <p className="kama_text">cowgirl</p>
        </div>
        <div className="kamasutra_box">
          <StaticImage
            src="../assets/images/doggy-style.png"
            alt="mumbai escorts"
            placeholder="blurred"
            layout="constrained"
            className=""
          />
          <p className="kama_text">Doggy Style</p>
        </div>
        <div className="kamasutra_box">
          <StaticImage
            src="../assets/images/edge-of-the-bed.png"
            alt="mumbai escorts"
            placeholder="blurred"
            layout="constrained"
            className=""
          />
          <p className="kama_text">Edge Of the Bed</p>
        </div>
        <div className="kamasutra_box">
          <StaticImage
            src="../assets/images/mastery-kneeling.png"
            alt="mumbai escorts"
            placeholder="blurred"
            layout="constrained"
            className=""
          />
          <p className="kama_text">Mastery Kneeling</p>
        </div>
        <div className="kamasutra_box">
          <StaticImage
            src="../assets/images/pirates-bounty.png"
            alt="mumbai escorts"
            placeholder="blurred"
            layout="constrained"
            className=""
          />
          <p className="kama_text">Pirates Bounty</p>
        </div>
        <div className="kamasutra_box">
          <StaticImage
            src="../assets/images/scissors.png"
            alt="mumbai escorts"
            placeholder="blurred"
            layout="constrained"
            className=""
          />
          <p className="kama_text">scissors</p>
        </div>
        <div className="kamasutra_box">
          <StaticImage
            src="../assets/images/the-amazon.png"
            alt="mumbai escorts"
            placeholder="blurred"
            layout="constrained"
            className=""
          />
          <p className="kama_text">The Amazon</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90vw;
  margin: 20px auto;
  .cat_h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .kama_text {
    color: var(--nav-bg);
    font-weight: bold;
  }
  .kamasutra_box {
    text-align: center;
    background-image: linear-gradient(to top, #9a800c, #efc715);
    box-shadow: 0 35px 30px -15px rgb(0 0 0 / 50%);
    cursor: pointer;
  }
  .kamasutra_box:hover {
    background-image: linear-gradient(to top, #fdd007, #fdd007);
    z-index: 2;
  }
  .kamasutra_box_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  @media only screen and (max-width: 1024px) {
    .kamasutra_box_wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media only screen and (max-width: 768px) {
    .kamasutra_box_wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media only screen and (max-width: 425px) {
    .kamasutra_box_wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`

export default KamasutraPositions
