import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import slugify from "slugify"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const OtherProfile = () => {
  const data = useStaticQuery(OtherProfiles)
  const allotherprofile = data.allContentfulProfile.nodes
  return (
    <Wrapper>
      <div className="our_profile">
        {/* slide line start  */}
        <div className="section-title">
          <h2 className="cat">Our Top Models</h2>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
      </div>
      <div className="gallery_new">
        {allotherprofile.map(item => {
          const {
            id,
            name,
            age,
            category,
            height,
            girlWeight,
            singleImage,
            altTag,
          } = item
          const pathToImage = getImage(singleImage)
          const slug = slugify(name, { lower: true })
          return (
            <div className="gallery_new_img">
              <Link to={`/profile/${slug}`} key={id}>
                <GatsbyImage
                  image={pathToImage}
                  alt={altTag}
                  className="loc_det_img"
                />

                <div className="gallery_img_heading">
                  <h2>{name}</h2>
                  <hr width="80%" />
                  <div className="profile_one">
                    <div className="profile_overlay">
                      <span className="profile_span">{age} years</span>
                    </div>
                    <div className="profile_overlay">
                      <span className="profile_span">{height} cm</span>
                    </div>
                    <div className="profile_overlay">
                      <span className="profile_span">{girlWeight} kg</span>
                    </div>
                  </div>
                  <hr width="80%" />
                  <div className="profile_end">
                    <p className="phoneprofile">
                      <span className="phone_color">phone</span>:{" "}
                      <span className="phone_red">+91 90000000000</span>
                    </p>
                  </div>
                  <hr width="80%" />
                  <div className="profile_vat_blink">
                    <p className="text-red blink-hard phoneprofile phone_color">
                      {category}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const OtherProfiles = graphql`
  {
    allContentfulProfile(sort: { fields: name, order: DESC }, limit: 5) {
      nodes {
        name
        id
        age
        height
        altTag
        girlWeight
        category
        singleImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Wrapper = styled.div`
  .loc_det_img {
    width: 100%;
  }
  .blink-hard {
    animation: blinker 1s step-end infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  .phoneprofile {
    margin-bottom: 0px !important;
  }
  .profile_one {
    display: flex;
    justify-content: space-around;
  }
  .profile_overlay {
    background-color: #bbaf08;
    padding: 0px 3px;
    border-radius: 5px;
  }
  .profile_span {
    font-size: 15px;
    color: #000;
  }
  .phone_color {
    color: #bbaf08;
  }
  .phone_red {
    color: red;
  }

  .phoneprofile {
    font-size: 0.825rem !important;
  }

  .our_profile > h3 {
    width: 90vw;
    text-align: center;
    color: #bbaf08;
    font-size: 1.8rem;
  }
  .gallery_new {
    width: 90vw;
    margin: 20px auto 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  .gallery_new_img {
    margin: 1%;
    border: 1px solid var(--primary-500);
  }
  .photi_img {
    width: 100%;
  }

  @media only screen and (max-width: 998px) {
    .gallery_new {
      width: 95vw;
      margin: 0px auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .profile_overlay {
      background-color: #bbaf08;
      padding: 0px 2px;
      border-radius: 5px;
    }
    .profile_span {
      font-size: 11px;
      color: #000;
    }
  }

  .gallery_img_heading {
    text-align: center;
    background-color: #000;
    padding: 0px 0px;
  }
  .gallery_img_heading h2 {
    font-size: 1.2rem !important;
    padding: 10px 0px 0px 0px !important;
    color: var(--primary-600);
  }
`

export default OtherProfile
