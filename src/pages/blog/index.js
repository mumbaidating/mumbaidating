import React from "react"
import Layout from "../../components/Layout"
import Blog from "../../components/Blog"
import styled from "styled-components"
import SEO from "../../components/SEO"
import video from "../../assets/videos/new-video-three.mp4"
import { StaticImage } from "gatsby-plugin-image"
const index = () => {
  return (
    <>
      <Layout>
        <SEO
          title="The Blog of Mumbai Escorts | Real stories & Escort guide"
          description="Get daily news and updates of our Mumbai escorts agency. This blogs will help you to deep dive into our Call girl service Mumbai."
        />

        <Wrapper>
          {/* video start  */}
          {/* slide line start  */}
          <div className="section-title">
            <h1 className="section_title_main">Mumbai Escort Blogs</h1>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}
          <div className="video_box">
            <div className="video_left">
              <StaticImage
                src="https://nearmeescorts.net/assets/img/banner/quote2.jpg"
                alt="mumbai escorts"
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

          <div className="mini_container">
            {/* slide line start  */}
            <div className="section-title">
              <h1 className="section_title_main">BLOG</h1>
              <div className="bar"></div>
            </div>
            {/* slide line start  */}
          </div>
          <Blog />
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.main`
  /* about sec end */
  .review_heading {
    text-align: center;
    text-transform: uppercase;
    margin-top: 40px;
  }
  .post-content {
    background-color: #bc3908;
  }
  .date {
    color: #000;
  }
`

export default index
