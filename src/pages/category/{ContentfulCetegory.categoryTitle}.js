import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import styled from "styled-components"
import OtherCategories from "../../components/OtherCategories"
import OtherProfiles from "../../components/OtherProfile"
import SEO from "../../components/SEO"

const CategoryDetail = ({ data }) => {
  const {
    categoryTitle,
    catSubTitle,
    imageAltTitle,
    // categoryDescription: { categoryDescription },
    categoryImg,
    catDes: { id, instructions },
  } = data.contentfulCetegory
  const {
    metaTitle,
    metaDescription: { metaDescription },
  } = data.contentfulCetegory
  const pathToImage = getImage(categoryImg)
  return (
    <Layout>
      <SEO title={metaTitle} description={metaDescription} />
      <Wrapper>
        {/* slide line start  */}
        <div className="section-title">
          <h1 className="section_title_main">{categoryTitle} </h1>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
        <div className="category_det_grid">
          <div className="category_det_grid_left">
            <GatsbyImage
              image={pathToImage}
              alt={imageAltTitle}
              className="loc_det_img"
            />
          </div>
          <div className="category_det_grid_right">
            <h1 className="category_det_title">{catSubTitle}</h1>
            {/* <p>{categoryDescription}</p> */}
            <div>
              {instructions.map((item, id) => {
                return <p key={id}>{item}</p>
              })}
            </div>
          </div>
        </div>
        <OtherCategories />
        <OtherProfiles />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query getSingleCategory($categoryTitle: String) {
    contentfulCetegory(categoryTitle: { eq: $categoryTitle }) {
      categoryTitle
      catSubTitle
      id
      imageAltTitle
      metaTitle
      metaDescription {
        metaDescription
      }
      catDes {
        id
        instructions
      }
      categoryImg {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

const Wrapper = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
  background-color: #000;
  padding: 10px 0px 30px 0px;
  .category_det_title {
    text-align: center;
    font-size: 1.8em;
    color: #f6aa1c;
    margin: 40px 0px 20px 0px;
  }
  .category_det_grid {
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
  }
  .category_det_grid_left {
    margin: auto;
    display: block;
  }
  @media only screen and (max-width: 900px) {
    .category_det_grid {
      display: grid;
      grid-template-columns: 1fr;
    }
    .loc_det_img {
      width: 100%;
    }
  }
`

export default CategoryDetail
