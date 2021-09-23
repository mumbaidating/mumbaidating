import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import slugify from "slugify"
import { FaLocationArrow } from "react-icons/fa"

const LocationButtonNew = graphql`
  {
    allContentfulLocation(sort: { order: ASC, fields: locationTitle }) {
      nodes {
        id
        locationTitle
      }
    }
  }
`

const LocationButton = () => {
  const data = useStaticQuery(LocationButtonNew)
  const newdata = data.allContentfulLocation.nodes
  return (
    <>
      <Wrapper>
        <div className="loc_cover">
          {/* slide line start  */}
          <div className="section-title">
            <h2 className="cat_h2">Our locations</h2>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}
        </div>
        <div className="loc_btn">
          {newdata.map(item => {
            const { id, locationTitle } = item
            const slug = slugify(locationTitle, { lower: true })
            return (
              <Link to={`/location/${slug}`} className="loc_btn_new " key={id}>
                <FaLocationArrow /> {locationTitle}
              </Link>
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 90vw;
  margin: 0px auto;
  .loc_btn {
    margin: 40px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: center;
  }
  .loc_btn_new {
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
  .loc_btn_new:hover {
    color: var(--nav-bg);
    background: var(--headings);
    box-shadow: var(--shadow-2);
  }
  .loc_head {
    text-align: center;
    color: var(--headings);
  }
  a.loc_btn_new {
    margin: 10px 10px;
  }
  @media only screen and (max-width: 989px) {
    .loc_btn {
      grid-template-columns: 1fr 1fr;
    }
    .byeuAy a.loc_btn_new {
      margin: 10px 2px;
    }
    .loc_btn_new {
      padding: 10px 2px;
    }
    .loc_btn_new {
      margin: 10px 3px !important;
    }
  }
`

export default LocationButton
