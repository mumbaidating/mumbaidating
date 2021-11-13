import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import styled from "styled-components"
import OtherLocations from "../../components/OtherLocations"
import OtherProfiles from "../../components/OtherProfile"
import SEO from "../../components/SEO"
import video from "../../assets/videos/loc-det.mp4"
import { StaticImage } from "gatsby-plugin-image"

const LocationDetail = ({ data }) => {
  const {
    locationTitle,
    locationSubTitle,
    imageAltTitle,
    // locationDescription: { locationDescription },
    locationImg,
    locDec: {  instructions },
  } = data.contentfulLocation
  const {
    metaTitle,
    metaDescription: { metaDescription },
  } = data.contentfulLocation
  const pathToImage = getImage(locationImg)
  return (
    <Layout>
      <SEO title={metaTitle} description={metaDescription} />
      <Wrapper>
        {/* video start  */}
    <div className="video_box">
          <div className="video_left video_left_det">
            <StaticImage
              src="../assets/images/quote3.jpg"
              alt="mumbai escorts categories"
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
          <h1 className="section_title_main">{locationTitle} Escorts</h1>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
        <div className="location_det_grid">
          <div className="location_det_grid_left">
            <GatsbyImage
              image={pathToImage}
              alt={imageAltTitle}
              className="loc_det_img"
            />
          </div>
          <div className="location_det_grid_right">
            <h2 className="location_det_title">{locationSubTitle}</h2>
            {/* <p>{locationDescription ? locationDescription : null}</p> */}
            <div>
              {instructions.map((item, id) => {
                return <p key={id}>{item ? item : null}</p>
              })}
            </div>
          </div>
        </div>
        <OtherLocations />
        <OtherProfiles />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query getSingleLocation($locationTitle: String) {
    contentfulLocation(locationTitle: { eq: $locationTitle }) {
      locationTitle
      locationSubTitle
      metaTitle
      metaDescription {
        metaDescription
      }

      locationImg {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      imageAltTitle
      locDec {
        id
        instructions
      }
    }
  }
`

const Wrapper = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
  background-color: #000;
  padding: 10px 0px 30px 0px;
  .location_det_title {
    text-align: center;
    font-size: 1.8em;
    color: #f6aa1c;
    margin: 40px 0px 20px 0px;
  }
  .location_det_grid {
    width: 95vw;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .loc_det_img {
    margin-right: 10px;
    width: 100%;
    border: 2px solid #bbaf08;
    margin: auto 0px;
    width: 100% !important;
  }
  .location_det_grid_left {
    margin: auto;
    display: block;
  }
  @media only screen and (max-width: 900px) {
    .location_det_grid {
      display: grid;
      grid-template-columns: 1fr;
    }
    .loc_det_img {
      width: 100%;
    }
    .video_left_det{
      display:none ;
    }
  }
`

export default LocationDetail
