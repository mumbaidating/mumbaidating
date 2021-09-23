import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import slugify from "slugify"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const otherCategories = graphql`
  {
    allContentfulCetegory(
      limit: 8
      sort: { fields: categoryTitle, order: ASC }
    ) {
      nodes {
        categoryTitle
        id
        categoryImg {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        imageAltTitle
      }
    }
  }
`

const OtherCategories = () => {
  const data = useStaticQuery(otherCategories)
  const othercategory = data.allContentfulCetegory.nodes
  return (
    <Wrapper>
      <div className="other_loc">
        {/* slide line start  */}
        <div className="section-title">
          <h2 className="cat">Other Categories You May Like</h2>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
      </div>
      <main className="category">
        {othercategory.map(item => {
          console.log(item)
          const { categoryTitle, id, categoryImg, imageAltTitle } = item
          const pathToImg = getImage(categoryImg)
          const slug = slugify(categoryTitle, { lower: true })
          return (
            <div className="category_img">
              <Link to={`/category/${slug}`} key={id}>
                <GatsbyImage
                  image={pathToImg}
                  alt={imageAltTitle}
                  className="oc_img"
                />
                <div className="category_img_heading">
                  <h2>{categoryTitle}</h2>
                </div>
              </Link>
            </div>
          )
        })}
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .oc_img {
    width: 100%;
  }
  .other_loc {
    width: 90vw;
    margin: 0px auto;
  }
  .other_loc h6 {
    text-align: center;
    color: #bbaf08;
    font-size: 1.8em;
  }
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
  }

  .loc_heading h1 {
    font-size: 2rem;
    text-align: center;
    color: var(--primary-500);
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  .category_img_heading {
    text-align: center;
    background-color: #000;
    padding: 0px 0px;
  }
  .category_img_heading h2 {
    font-size: 1rem !important;
    padding: 10px 0px;
    color: var(--primary-600);
  }
`

export default OtherCategories
