import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import ButtonCategory from "../components/ButtonCategory"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/SEO"
import video from "../assets/videos/new-video-three.mp4"

const AdultRoomNew = graphql`
  {
    allContentfulAdultRoom {
      nodes {
        adultRoomImg {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          id
        }
        adultAltImg
        adultRooTitle
      }
    }
  }
`

const AdultRoom = () => {
  const data = useStaticQuery(AdultRoomNew)
  const newdata = data.allContentfulAdultRoom.nodes
  return (
    <Layout>
      <SEO
        title="Call girl service Mumbai in Our 5 stars Premium Hotels & Rooms"
        description="We have listed top most premium hotels and rooms for your erotic experience with our Female escorts & Call girls Mumbai. Book now to avail the service."
      />
      <Wrapper>
      <div className="top_banner_new">
          <StaticImage
              src="../assets/images/adult-room.jpg"
              alt="Mumbai escort Adult room"
              placeholder="blurred"
              layout="constrained"
              className="top_img"
            />
          </div>
        <div className="home_top mini_container">
          {/* slide line start  */}
          <div className="section-title">
            <h1 className="section_title_main">
              Welcome To Our Escots ADULT ROOM
            </h1>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}

          <p>
            Spare some time away from the business of your day and come spend it
            here! Tired of being alone in the bedroom? Join us for some adult
            fun! At our{" "}
            <a
              href="https://www.mumbaidating.net/adult-room"
              className="a_color"
            >
              Mumbai escort service room
            </a>{" "}
            , you'll be able to enjoy a little extra spice with your partner as
            well as call girl and get it on with someone new with all the
            action. The sex in our private adult room is fun for anyone looking
            to enjoy a little time together with their partner.
          </p>

          <p>
            I am a{" "}
            <a href="https://www.mumbaidating.net/" className="a_color">
              Mumbai escort service
            </a>{" "}
            who offers romantic activities in the adult room. Will you spend
            some time with me on an erotic plan? I'm here to be your destination
            if you're looking for something more than just sex - I can give it
            all up and enjoy myself right alongside you, or we could take things
            nice and slow together. And can be experienced with the adult room.
          </p>
        </div>
        {/* video start  */}
        <div className="video_box">
          <div className="video_left">
            <StaticImage
              src="../assets/images/new-ban-2.jpg"
              alt="mumbai escorts Adult room"
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

        <div className="my_container">
          <div className="vip_box">
            <StaticImage
              src="../assets/images/vip-badge.jpg"
              alt="mumbai escorts"
              placeholder="blurred"
              layout="constrained"
              className="video_img"
            />
          </div>
        </div>

        {/* video end  */}
        <div className="home_new_sec">
          <div className="home_new_sec_left">
            <ButtonCategory />
          </div>
          <div className="home_new_sec_right">
            {newdata.map(item => {
              const { adultRooTitle, adultRoomImg, adultAltImg } = item
              const pathToImage = getImage(adultRoomImg)
              return (
                <div className="adult_room_one">
                  <GatsbyImage
                    image={pathToImage}
                    alt={adultAltImg}
                    className="cat_img"
                  />
                  <div className="adult_room_one_title">
                    <h2>{adultRooTitle}</h2>
                  </div>
                </div>
              )
            })}

            {/* {
               newdata.map((item) => {
                   const {id,adultAltImg,adultRooTitle,GatsbyImage} = item;
                   const pathToImage = getImage(GatsbyImage)
                   return (
            <div className="adult_room_one">
          <GatsbyImage image={pathToImage} alt={adultAltImg} className="cat_img" />
        <div className="adult_room_one_title">
            <h2>{adultRooTitle}</h2>
        </div>
           </div>
                   )
               })
           } */}
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  .vip_box {
    margin: 0px auto;
    display: block;
    text-align: center;
    margin-bottom: 30px;
  }
  .vip_box img {
    border: 1px solid gold;
  }
  .adult_room_one {
    background-color: #000;
    margin: 1%;
    border-radius: 5px;
  }
  .adult_room_one_title h2 {
    color: #f6aa1c;
    font-size: 1.6em;
  }
  .home_new_sec_right {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
  }
  .adult_room_img {
    border: 1px solid gold;
  }
  .home_nwe_sec_heading {
    font-size: 1.6em;
    text-align: left;
    color: #bbaf08;
    font-weight: bold;
  }
  .home_new_sec_right p {
    text-align: left;
  }
  .home_new_sec {
    width: 90vw;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 25% 75%;
    text-align: center;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 1100px) {
    .home_new_sec {
      width: 90vw;
      margin: 0px auto;
      display: grid;
      grid-template-columns: 1fr !important;
      margin-top: 50px;
    }
    .home_new_sec_right {
      display: grid;
      grid-template-columns: 1fr;
      height: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .home_top > h1 {
    color: #bbaf08;
    font-size: 1.8rem;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .home_top > h2 {
    color: red;
    font-size: 1.8rem;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .gallery_img_heading {
    text-align: center;
    background-color: #000;
    padding: 0px 0px;
  }
  .adult_room_one_title {
    padding: 20px 0px;
  }
`

export default AdultRoom
