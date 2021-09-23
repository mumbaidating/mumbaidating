import React from "react"
import Layout from "../components/Layout"
import ProfileImages from "../components/ProfileImages"
import MumbaiEscorts from "../components/MumbaiEscorts"
import styled from "styled-components"
import SEO from "../components/SEO"
import video from "../assets/videos/new-video-three.mp4"
import { StaticImage } from "gatsby-plugin-image"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const Mumbaiescorts = () => {
  return (
    <Wrapper>
      <SEO
        title="Mumbai Escorts Service | Independent Agency you can Blindly Trust"
        description="We follow old is gold method as our Mumbai escorts Agency has been running since last 15 years and we focus on quality and trustable services."
      />
      <Layout>
        {/* video start  */}
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
        <div className="home_top">
          {/* slide line start  */}
          <div className="section-title">
            {/* <Breadcrumb location={location} crumbLabel="Mumbai call girls" /> */}
            <h1 className="section_title_main">
              Welcome to Our Mumbai Escorts
            </h1>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}
          <p className="text_left">
            Mumbai escorts are one of the best escorts in the nation of India we
            provide high-class service at affordable charges. We take into
            account the wishes of each individual client and select a girl for a
            VIP escorting based on the chosen parameters according to the
            client's choice.
          </p>

          <p className="text_left">
            We understand that each client has their own individual preferences
            and desires. Our carefully selected team of VIP escorts in Mumbai
            offers a variety of models catering to many tastes, including mature
            ladies with the busty figure you desire or teenage girls who are new
            on the scene but eager for your company.
          </p>

          <p className="text_left">
            We also provide GFE's (girlfriend experience) and PSEs (porn star
            experiences), so no matter what it is you're looking for we will be
            able to accommodate your needs! Whether discreetly seeking an
            evening out as "friends" or indulging together at home, our service
            can make sure every moment spent with us leaves memories etched into
            your mind forever.
          </p>
          <p className="text_left">
            We are all about you and your satisfaction too. We want to make sure
            that our Mumbai escorts provide the best possible companionship for
            when you're looking for a discreet night out with friends or just
            wanting to get away from it all, whether as an individual or in the
            company!
          </p>
        </div>

        <MumbaiEscorts />
        <ProfileImages />
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .home_top {
    width: 80vw;
    margin: 0px auto;
  }
  .mumbai_escorts {
    font-size: 1.4em;
    text-align: center;
    color: #bbaf08;
    margin: 20px 0px;
    font-weight: bold;
  }
`

export default Mumbaiescorts
