import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { FiSettings } from "react-icons/fi"
import { FaFirstOrder } from "react-icons/fa"
// import { FiEdit } from "react-icons/fi"
import { FaRupeeSign } from "react-icons/fa"
import { TiTick } from "react-icons/ti"
import { AiFillCloseCircle } from "react-icons/ai"
import { CgGirl } from "react-icons/cg"

import SEO from "../components/SEO"
import video from "../assets/videos/new-video-three.mp4"
import { StaticImage } from "gatsby-plugin-image"

const Price = () => {
  return (
    <Layout>
      <Wrapper>
        <SEO
          title="Cheap and Affordable Escort service Mumbai with VIP Service"
          description="Get attractive & High-Profile call girl service Mumbai at very affordable rates. This includes the VIP service; money will be refunded if you don’t like the service."
        />
        <div className="top_banner_new">
          <StaticImage
              src="../assets/images/cheap-price.jpg"
              alt="Mumbai escort Faq"
              placeholder="blurred"
              layout="constrained"
              className="top_img"
            />
          </div>
        {/* video start  */}
        {/* slide line start  */}
        <div className="section-title">
          <h1 className="section_title_main">Mumbai Escort PRICE</h1>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
        {/* video start  */}
        <div className="video_box">
          <div className="video_left">
            <StaticImage
              src="../assets/images/new-ban-3.jpg"
              alt="mumbai escorts price"
              placeholder="blurred"
              layout="constrained"
              className="video_img"
            />
          </div>
          <div className="video_wrapper">
            <video loop="true" autoplay="autoplay">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        {/* video end  */}

        {/* slide line start  */}
        <div className="section-title">
          <h1 className="section_title_main">PRICE</h1>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
        <div className="container_price">
          <div className="pricing-table">
            <div className="icon type-01">
              <FiSettings />
            </div>
            <h3 className="heading">2 Hours (1 service)</h3>
            <h1 className="service-price">
              10,000
              <sup className="dollar-sign">
                <FaRupeeSign />
              </sup>
            </h1>
            <ul className="features-list">
              <li>
                <TiTick />
                Single Shot
              </li>
              <li>
                <TiTick />2 Hours Time
              </li>
              <li>
                <TiTick />
                Sexy Talk
              </li>
              <li>
                <TiTick />
                Cum In Mouth
              </li>
              <li>
                <AiFillCloseCircle />
                Blowjob & Handjob
              </li>
              <li>
                <AiFillCloseCircle />
                Long Drive
              </li>
              <li>
                <AiFillCloseCircle />
                take to Pub & Bar
              </li>
            </ul>
            <button className="order-button">Book Now</button>
          </div>
          <div className="pricing-table">
            <div className="icon type-02">
              <CgGirl />
            </div>
            <h3 className="heading">3 Hours (2 service)</h3>
            <h1 className="service-price">
              15,000
              <sup className="dollar-sign">
                <FaRupeeSign />
              </sup>
            </h1>
            <ul className="features-list">
              <li>
                <TiTick />
                Double Shot
              </li>
              <li>
                <TiTick />3 Hours Time
              </li>
              <li>
                <TiTick />
                Sexy Talk
              </li>
              <li>
                <TiTick />
                Cum In Mouth
              </li>
              <li>
                <TiTick />
                Blowjob & Handjob
              </li>
              <li>
                <AiFillCloseCircle />
                Long Drive
              </li>
              <li>
                <AiFillCloseCircle />
                take to Pub & Bar
              </li>
            </ul>
            <button className="order-button">Book Now</button>
          </div>
          <div className="pricing-table">
            <div className="icon type-03">
              <FaFirstOrder />
            </div>
            <h3 className="heading">Full Night (4 service)</h3>
            <h1 className="service-price">
              40,000
              <sup className="dollar-sign">
                <FaRupeeSign />
              </sup>
            </h1>
            <ul className="features-list">
              <li>
                <TiTick />4 Shot
              </li>
              <li>
                <TiTick />6 to 9 Hours Time
              </li>
              <li>
                <TiTick />
                Sexy Talk
              </li>
              <li>
                <TiTick />
                Cum In Mouth
              </li>
              <li>
                <TiTick />
                Blowjob & Handjob
              </li>
              <li>
                <TiTick />
                Long Drive
              </li>
              <li>
                <TiTick />
                take to Pub & Bar
              </li>
            </ul>
            <button className="order-button">Book Now</button>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  .price_page {
    text-align: center;
    font-size: 1.8em;
    margin: 20px 0px !important;
    margin: 0px auto;
    padding-top: 20px !important;
  }
  .container_price {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .container_price .pricing-table {
    display: block;
    padding: 20px;
    background: #ccc;
    overflow: hidden;
    width: 300px;
    margin: 10px;
    border-radius: 3px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1);
    transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .container_price .pricing-table:nth-child(1) {
    background-image: linear-gradient(135deg, #820707 10%, #f55555 100%);
  }

  .container_price .pricing-table:nth-child(2) {
    background-image: linear-gradient(135deg, #820707 10%, #f55555 100%);
  }
  .container_price .pricing-table:nth-child(3) {
    background-image: linear-gradient(135deg, #820707 10%, #f55555 100%);
  }
  /* .container_price .pricing-table:hover {
    transform: scale(1.2);
    z-index: 100;
  } */

  .pricing-table .icon {
    display: block;
    width: 70px;
    height: 70px;
    background: white;
    text-align: center;
    line-height: 70px;
    font-size: 2.2em;
    margin: 20px auto;
    border-radius: 50px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  }

  .pricing-table .icon span {
    transform: scale(1);
    transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .pricing-table .type-01 {
    color: #fccf31;
  }

  .pricing-table .type-02 {
    color: #f761a1;
  }

  .pricing-table .type-03 {
    color: #43cbff;
  }

  .heading {
    color: white;
    text-align: center;
    text-transform: capitalize;
    font-weight: lighter;
    padding: 10px;
    font-size: 1.2em;
  }

  .service-price {
    color: white;
    text-align: center;
    font-size: 3em;
  }

  .service-price .dollar-sign {
    font-size: 0.6em;
    margin-left: -10px;
  }

  .features-list {
    list-style: none;
    display: block;
    margin: 20px auto;
    width: 80%;
  }

  .features-list li {
    color: white;
    text-align: center;
    display: block;
    text-transform: capitalize;
    font-weight: lighter;
    font-size: 0.9em;
    height: 30px;
    line-height: 30px;
  }

  .order-button {
    border: none;
    display: block;
    width: 70%;
    height: 40px;
    margin: 5px auto;
    border-radius: 50px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    font-family: tahoma;
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.5);
    background: white;
    cursor: pointer;
  }

  .order-button:focus {
    outline: none;
  }
`

export default Price
