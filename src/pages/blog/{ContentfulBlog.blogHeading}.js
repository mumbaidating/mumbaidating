import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import OtherProfile from "../../components/OtherProfile"
import ButtoonCategory from "../../components/ButtonCategory"
import OtherBlogs from "../../components/OtherBlogs"
import SEO from "../../components/SEO"

const BlogDetail = ({ data }) => {
  const {
    blogHeading,
    blogDate,
    blogdet: { id, instructions },
    blogImg,
  } = data.contentfulBlog
  const { metaTitle, metaDescription } = data.contentfulBlog
  const pathToImage = getImage(blogImg)
  return (
    <>
      <Layout>
        <SEO title={metaTitle} description={metaDescription} />
        <Wrapper>
          <div className="mini_container">
            <h2 className="review_heading blog_heading">{blogHeading}</h2>
          </div>
          <div className="mini_container">
            <div className="blog_detail">
              <div className="blog_det_left">
                <GatsbyImage
                  image={pathToImage}
                  alt={blogHeading}
                  className="blog_det_img"
                />
                <div className="content_box">
                  <h1 className="blog_det_left_head">{blogHeading}</h1>
                  {/* <p className="blog_det_left_para">{blogLongtextnew}</p> */}
                  <div>
                    {instructions.map(item => {
                      return (
                        <p key={id} className="text_left">
                          {item}
                        </p>
                      )
                    })}
                  </div>
                  <hr />
                  <p className="blog_date">Posted On: {blogDate}</p>
                </div>
              </div>
              <div className="blog_det_right">
                <div className="other_blogs">
                  <h5>Other Blogs</h5>
                  <hr />
                  <OtherBlogs />
                  <hr />
                  <ButtoonCategory />
                </div>
              </div>
            </div>
          </div>
          <OtherProfile />
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.main`
  @media only screen and (min-width: 900px) {
    .content_box {
      padding: 0px 35px;
    }
  }
  .other_blog_links {
    color: #fff;
  }
  .other_blogs {
    background-color: black;
    padding: 30px 0px;
  }
  .other_blogs ol li {
    color: #fff;
  }
  .other_blogs h5 {
    text-align: left;
    padding-left: 10px;
    color: #bbaf08;
    font-weight: bold;
  }
  .blog_detail {
    background-color: #290404;
    padding: 20px 5px;
    margin-bottom: 20px;
    border: 1px solid gold;
  }
  .review_heading {
    text-align: center;
    text-transform: uppercase;
    margin-top: 40px;
    text-align: center;
  }
  .blog_heading {
    font-size: 1.6em !important;
    margin-bottom: 20px;
    color: #bbaf08;
  }
  .blog_detail {
    display: grid;
    grid-template-columns: 70% 30%;
  }
  .blog_det_left_head {
    font-size: 1.6em;
    color: #bbaf08;
    margin: 10px 0px;
    text-align: left;
  }
  .blog_det_left {
    text-align: center;
    margin: 0px auto;
    display: block;
  }
  .blog_det_left_para {
    text-align: initial;
  }
  .blog_date {
    text-align: initial;
    color: gold;
  }
  @media only screen and (max-width: 900px) {
    .blog_detail {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`

export const query = graphql`
  query getSingleBlog($blogHeading: String) {
    contentfulBlog(blogHeading: { eq: $blogHeading }) {
      blogHeading
      blogDate
      blogdet {
        id
        instructions
      }
      metaTitle
      metaDescription {
        metaDescription
      }
      blogImg {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
`

export default BlogDetail
