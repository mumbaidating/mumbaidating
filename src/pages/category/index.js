import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import SEO from "../../components/SEO"
import video from "../../assets/videos/new-video-three.mp4"
import { StaticImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allContentfulCetegory {
      nodes {
        id
        categoryTitle
        categoryImg {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const Index = () => {
  const data = useStaticQuery(query)
  const category = data.allContentfulCetegory.nodes

  return (
    <Layout>
      <SEO
        title="Checkout our Different Categories of Escorts & Call girls Mumbai"
        description="Here is the list of super attractive categories of escorts and call girls. Explore outstanding categories like Threesome, GFE, One night stand, Party Girls, Young escorts, etc..."
      />
      <Wrapper>
      <div className="top_banner_new">
          <StaticImage
              src="../../assets/images/category.jpg"
              alt="Mumbai escort category"
              placeholder="blurred"
              layout="constrained"
              className="top_img"
            />
          </div>
        {/* video start  */}
        <div className="video_box">
          <div className="video_left">
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
        <div className="loc_heading">
          {/* slide line start  */}
          <div className="section-title">
            <h1 className="section_title_main">Mumbai Escot Category</h1>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}
          <p className="text_left">
            We at{" "}
            <a href="https://www.mumbaidating.net/" className="a_color">
              Mumbai Escorts
            </a>{" "}
            have a variety of escorts that are willing to show their skills in
            any category. All Mumbai escorts & call girls are the category from
            our agency comes highly discounted, and we can still provide the
            best service.
          </p>
          <p className="text_left">
            If you're looking for something specific or want to know how
            discreetly an elite escort company operates just contact us now! At{" "}
            <a href="https://www.mumbaidating.net/category" className="a_color">
              Mumbai Escorts Category
            </a>{" "}
            we welcome everyone interested in taking advantage of what we
            offer!!! If you're looking for a high-end experience, look no
            further than our <strong>escorts in Mumbai</strong>. They are here
            to please your every need and desire - from the most basic needs of
            companionship to more exotic desires like BDSM or fetish play that
            we have many experts on board with us. What's stopping you?
          </p>
          <p className="text_left">
            We welcome all potential clients who want an unforgettable time when
            they hire one of our <strong>Mumbai Escorts Category</strong> girls
            because it is what they do best! Each girl caters to their services
            based on personal preferences so there will always be someone
            perfect for whatever service suits your tastes best at any given
            moment, you'll never be disappointed you’re guaranteed the best with
            our <strong>high-end escorts</strong> and exclusive girls for your
            ultimate pleasure!
          </p>
        </div>

        <main className="category">
          {category.map(item => {
            const { id, categoryTitle, categoryImg } = item
            const pathToImage = getImage(categoryImg)
            const slug = slugify(categoryTitle, { lower: true })
            return (
              <div className="category_img">
                <Link to={`/category/${slug}`} key={id}>
                  <GatsbyImage
                    image={pathToImage}
                    alt={categoryTitle}
                    className="cat_img"
                  />
                  <div className="category_img_heading">
                    <h2 className="cat_title_new">{categoryTitle}</h2>
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
  .category {
    width: 90vw;
    margin: 20px auto 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .category_img {
    margin: 1%;
    border: 1px solid var(--primary-500);
  }

  @media only screen and (max-width: 998px) {
    .category {
      width: 95vw;
      margin: 0px auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .loc_heading {
    width: 90vw;
    margin: 0px auto;
    margin-top: 40px;
    text-align: center;
  }

  .loc_heading h1 {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  .category_img_heading {
    text-align: center;
    background-color: #000;
    padding: 0px 0px;
  }
  .category_img_heading h2 {
    font-size: 1.5rem;
    padding: 10px 0px;
    color: #f6aa1c;
  }
  .cat_img {
    width: 100%;
  }
  .cat_title_new {
    font-size: 1em !important;
  }
`
export default Index
