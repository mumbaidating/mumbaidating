import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import slugify from "slugify"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const otherLocations = graphql`
  {
    allContentfulLocation(
      sort: { fields: locationTitle, order: DESC }
      limit: 8
    ) {
      nodes {
        locationTitle
        locationImg {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          id
        }
        imageAltTitle
      }
    }
  }
`

const OtherLocations = () => {
  const data = useStaticQuery(otherLocations)
  const specificLoc = data.allContentfulLocation.nodes
  return (
    <Wrapper>
      <div className="other_loc">
        {/* slide line start  */}
        <div className="section-title">
          <h2 className="cat">Other Locations You May Like</h2>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
      </div>
      <main className="location">
        {specificLoc.map(item => {
          const { locationTitle, locationImg, id } = item
          const pathToImage = getImage(locationImg)
          const slug = slugify(locationTitle, { lower: true })
          return (
            <div className="location_img">
              <Link to={`/location/${slug}`} key={id}>
                <GatsbyImage
                  image={pathToImage}
                  alt={locationTitle}
                  className="other_loc_img"
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
  )
}

const Wrapper = styled.div`
  .other_loc_img {
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
  .location_img_heading {
    text-align: center;
    background-color: #000;
    padding: 0px 0px;
  }
  .location_img_heading h2 {
    font-size: 1rem;
    padding: 10px 0px;
    color: var(--primary-600);
  }
`

export default OtherLocations
