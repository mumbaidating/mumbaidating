import React from "react"
import { graphql, Link } from "gatsby"
import { useStaticQuery } from "gatsby"
import slugify from "slugify"

const OtherBlogsData = graphql`
  {
    allContentfulBlog {
      nodes {
        id
        blogHeading
      }
    }
  }
`

const OtherBlogs = () => {
  const data = useStaticQuery(OtherBlogsData)
  const newData = data.allContentfulBlog.nodes
  return (
    <>
      <ol>
        {newData.map(item => {
          const { id, blogHeading } = item
          const slug = slugify(blogHeading, { lower: true })
          return (
            <li key={id}>
              <Link className="other_blog_links" to={`/blog/${slug}`}>
                {blogHeading}
              </Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default OtherBlogs
