import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import slugify from "slugify"

const query = graphql`
  {
    allContentfulProfile {
      nodes {
        id
        altTag
        name
        age
        height
        girlWeight
        category
        singleImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const ProfileImages = () => {
  const data = useStaticQuery(query)
  const gallery = data.allContentfulProfile.nodes
  const [state, setstate] = useState(gallery)
  const [visible, setVisible] = useState(5)

  const loadmoreimages = () => {
    setVisible(prevImgs => prevImgs + 5)
  }

  const removeImg = id => {
    const newImg = state.filter(gal => gal.id !== id)
    setstate(newImg)
  }

  if (state.length === 0) {
    return (
      <Wrapper>
        <div className="refresh_btn">
          <button className="btn" onClick={() => setstate(gallery)}>
            Refresh to see profiles
          </button>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className="our_profile">
        {/* slide line start  */}
        <div className="section-title">
          <h2 className="cat_h2">Our Top Models ({state.length})</h2>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
      </div>
      <div className="gallery_new">
        {state.slice(0, visible).map(item => {
          const {
            id,
            name,
            age,
            category,
            height,
            girlWeight,
            singleImage,
          } = item
          const pathToImage = getImage(singleImage)
          const slug = slugify(name, { lower: true })
          return (
            <div className="gallery_new_img" key={id}>
              <Link to={`/profile/${slug}`}>
                <GatsbyImage
                  image={pathToImage}
                  alt={name}
                  className="profile_det_img"
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
                      <span className="phone_color">phone</span>:
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
              <div className="remove_btn">
                <button
                  className="btn remove_btn_one"
                  onClick={() => removeImg(id)}
                >
                  Not Intrested
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="load_more_btn">
        <button className="load_img_btn" onClick={loadmoreimages}>
          See More profiles
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .refresh_btn {
    margin: 0px auto;
    display: block;
    text-align: center;
  }
  .remove_btn {
    text-align: center;
  }
  .load_more_btn {
    margin-bottom: 25px;
  }
  .load_img_btn {
    margin: 0px auto;
    display: block;
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
    background-color: var(--headings);
    padding: 0px 3px;
    border-radius: 5px;
  }
  .profile_span {
    font-size: 15px;
    color: var(--nav-bg);
  }
  .phone_color {
    color: var(--headings);
  }
  .phone_red {
    color: var(--headings);
  }

  .phoneprofile {
    font-size: 0.825rem !important;
  }

  .our_profile > h3 {
    width: 90vw;
    text-align: center;
    color: var(--headings);
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
    border: 1px solid var(--headings);
    margin-bottom: 11px;
  }
  .photi_img {
    width: 100%;
  }
  .profile_det_img {
    width: 100% !important;
  }

  @media only screen and (max-width: 998px) {
    .gallery_new {
      width: 95vw;
      margin: 0px auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .profile_overlay {
      background-color: var(--headings);
      padding: 0px 2px;
      border-radius: 5px;
    }
    .profile_span {
      font-size: 11px;
      color: var(--nav-bg);
    }
  }

  .gallery_img_heading {
    text-align: center;
    background-color: var(--nav-bg);
    padding: 0px 0px;
  }
  .gallery_img_heading h2 {
    font-size: 1.2rem !important;
    padding: 10px 0px 0px 0px !important;
    color: var(--primary-600);
  }
`

export default ProfileImages
