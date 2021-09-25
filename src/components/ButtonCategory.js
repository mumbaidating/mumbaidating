import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import slugify from "slugify"
import { FaRegHandPointRight } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

const ButtonCategoryNew = graphql`
  {
    allContentfulCetegory {
      nodes {
        categoryTitle
        id
      }
    }
  }
`

const ButtonCategory = () => {
  const data = useStaticQuery(ButtonCategoryNew)
  const newData = data.allContentfulCetegory.nodes
  return (
    <Wrapper>
      <div className="cat_cover">
        {/* slide line start  */}
        <div className="section-title">
          <h2 className="cat">Our Categories</h2>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
        <ul>
          {newData.map(item => {
            const { categoryTitle, id } = item
            const slug = slugify(categoryTitle, { lower: true })
            return (
              <li className="cat_li" key={id}>
                <Link to={`/category/${slug}`} className="btn_new">
                  <FaRegHandPointRight /> {categoryTitle}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="whatsapp_box">
          <StaticImage
            src="../assets/images/whatsapp-new.png"
            alt="mumbai escort service"
            placeholder="blurred"
            layout="constrained"
            className="whatsapp_img"
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .whatsapp_box {
    width: 198px;
  }
  margin: 0px auto;
  .cat {
    font-size: 1.6em;
    color: var(--headings);
    font-weight: bold;
  }
  .cat_cover {
    background-color: var(--nav-bg);
    width: fit-content;
    padding: 10px;
    border-radius: 5px;
    border: 4px solid #fff;
    margin: 0px auto;
  }

  .cat_li {
    margin-top: 20px;
  }
  .btn_new {
    color: var(--nav-bg);
    margin: 0px auto;
    display: block;
    text-align: left;
    font-size: 14px;
    font-weight: bold;
  }
  .cat_li {
    width: 217px;
    padding: 13px 10px !important;
    cursor: pointer;
    appearance: none;
    color: var(--nav-bg);
    background: var(--headings);
    border: none;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    text-transform: capitalize;
  }
  .cat_li:hover {
    background-color: var(--para-hover);
  }
`

export default ButtonCategory
