import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import slugify from "slugify"

const BlogNew = graphql`
  {
    allContentfulBlog {
      nodes {
        id
        blogHeading
        blogDate
        blogImg {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

const Blog = () => {
  const data = useStaticQuery(BlogNew)
  const newData = data.allContentfulBlog.nodes

  return (
    <>
      <Wrapper>
        <div className="blog-posts">
          {newData.map(item => {
            const {
              id,
              blogHeading,
              blogDate,
              blogImg: { gatsbyImageData },
            } = item
            const pathToImage = getImage(gatsbyImageData)
            const slug = slugify(blogHeading, { lower: true })
            return (
              <div className="post" key={id}>
                <Link to={`/blog/${slug}`}>
                  <GatsbyImage
                    image={pathToImage}
                    alt={blogHeading}
                    className="post-img"
                  />
                  <div className="post-content">
                    <h3>{blogHeading}</h3>
                    <span className="date">{blogDate}</span>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  .blog-posts {
    width: 90vw;
    margin: 0px auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    cursor: pointer;
  }

  .post-content h3 {
    color: var(--nav-bg);
    font-weight: bold;
  }
  .post {
    width: calc(50% - 10px);
    overflow: hidden;
  }

  .post-img {
    width: 100%;
    border-radius: 6px;
    transition: 0.3s linear;
  }

  .post-content {
    background-color: var(--headings) !important;
    margin: 0 20px;
    padding: 30px;
    border-radius: 6px;
    transform: translateY(-60px);
    transition: 0.3s linear;
  }

  .post-content h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .date {
    font-size: 15px;
    font-style: italic;
    color: var(--nav-bg);
    font-weight: bold;
  }

  .post:hover .post-img {
    transform: translateY(20px);
  }

  .post:hover .post-content {
    transform: translateY(-80px);
  }

  @media screen and (max-width: 1200px) {
    .blog-posts {
      justify-content: center;
    }
    .post {
      width: min(600px, 100%);
    }
  }
`

export default Blog
