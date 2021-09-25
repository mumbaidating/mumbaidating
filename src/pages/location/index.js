import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import slugify from "slugify"
import SEO from "../../components/SEO"
import video from "../../assets/videos/new-video-three.mp4"
import { StaticImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allContentfulLocation(sort: { fields: locationTitle, order: ASC }) {
      nodes {
        id
        locationTitle
        locationImg {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Index = () => {
  const data = useStaticQuery(query)
  const location = data.allContentfulLocation.nodes

  return (
    <Layout>
      <SEO
        title="Mumbai Call girls and Escort service nearby your location"
        description="Get the call girl service at your doorstep within 25min of booking. We deliver Female escorts & Call girls in almost all location on Mumbai like Andheri, Bandra, Borivali, Chembur, etc."
      />
      <Wrapper>
        <div className="loc_heading">
          {/* slide line start  */}
          <div className="section-title">
            <h1 className="section_title_main">
              Superior Mumbai Escorts Locations
            </h1>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}
          <p className="text_left">
            What if the men at your next party were fixated on you, not only
            because of what they see but also for who you are? It's a dream that
            can come true! You will be able to find the stunning model with our{" "}
            <a href="https://www.mumbaidating.net/" className="a_color">
              escort service in Mumbai
            </a>
            . Visit to our location whenever you needed.
          </p>

          <p className="text_left">
            We cover 13 areas in Mumbai which is located 603km approx and we
            offer a discreet way to hire an escort so that no one knows about
            it. We're here to help provide models like these -the kind every
            affluent person wants around them constantly and all day long! The
            Mumbai escort works all over the India. Our girls are top models
            from every Nationality. You can invite our girls to rest and spend
            an unforgettable time. All models from our agency: the educated
            girls, know various languages, and also give high class service and
            will not leave indifferent any man.
          </p>
          <p className="text_left">
            You will be spoiled for choice with this{" "}
            <b>high class escort agency</b> in our{" "}
            <a href="https://www.mumbaidating.net/location" className="a_color">
              Mumbai location!
            </a>{" "}
            They have an enormous collection of the world’s most beautiful and
            exotic girls. Choose a girl from their profile gallery to get
            started, all photos are real - in person these models look even more
            stunning than they do on camera!
          </p>
        </div>
        {/* video start  */}
        <div className="video_box">
          <div className="video_left">
            <StaticImage
              src="../assets/images/quote4.jpg"
              alt="mumbai escorts locations"
              placeholder="blurred"
              layout="constrained"
              className="video_img"
            />
          </div>
          <div className="video_wrapper">
            <video loop={true} autoplay="autoplay">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* video end  */}

        <main className="location">
          {location.map(item => {
            const { locationTitle, locationImg, id } = item
            const pathToImage = getImage(locationImg)
            const slug = slugify(locationTitle, { lower: true })
            return (
              <div className="location_img" key={id}>
                <Link to={`/location/${slug}`} key={id}>
                  <GatsbyImage
                    image={pathToImage}
                    alt={locationTitle}
                    className="loc_img_new"
                  />
                  <div className="location_img_heading">
                    <h2>{locationTitle}</h2>
                  </div>
                </Link>
              </div>
            )
          })}
        </main>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  .loc_img_new {
    width: 100%;
  }
  .location {
    width: 90vw;
    margin: 20px auto 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .location_img {
    margin: 1%;
    border: 1px solid var(--primary-500);
  }

  @media only screen and (max-width: 998px) {
    .location {
      width: 95vw;
      margin: 0px auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .loc_heading {
    text-align: center;
    width: 90vw;
    margin: 0px auto;
    margin-top: 40px;
  }

  .loc_heading h1 {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  .location_img_heading {
    text-align: center;
    background-color: #000;
    padding: 0px 0px;
  }
  .location_img_heading h2 {
    font-size: 1.5rem;
    padding: 10px 0px;
  }
`

export default Index
