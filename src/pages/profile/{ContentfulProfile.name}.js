import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import OtherProfiles from "../../components/OtherProfile"
import SEO from "../../components/SEO"
import ProfileRating from "../../components/ProfileRating"

const ProfileDetail = ({ data }) => {
  const {
    nationality,
    age,
    availableState,
    metaTitle,
    metaDescription,
    description: { description },
    hairColor,
    height,
    id,
    languages,
    name,
    profileImages,
  } = data.contentfulProfile
  return (
    <Layout>
      <SEO title={metaTitle} description={metaDescription} />
      <Wrapper>
        <div className="profile_detail">
          <div className="profile_det_left">
            <div className="profile_det_left_name">
              <h1 className="profile_title">{name}</h1>
            </div>
            <div className="profile_gal" key={id}>
              {profileImages.map(item => {
                const { gatsbyImageData, title } = item
                const pathToImage = getImage(gatsbyImageData)
                return (
                  <GatsbyImage
                    image={pathToImage}
                    alt={title}
                    className="profile_det_img"
                  />
                )
              })}
            </div>
          </div>
          <div className="profile_det_right">
            <h2 className="stats">{name} Stats</h2>
            <hr width="90%" />
            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">nationality :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">{nationality}</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">age :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">{age}</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">availableState :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">{availableState}</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">hairColor :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">{hairColor}</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">height :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">{height} cm</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">languages :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">{languages}</p>
              </div>
            </div>
            <hr width="90%" />

            <h2 className="stats">Price For {name}</h2>
            <hr width="90%" />
            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">Duration :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">Incalls/Outcalls</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">2 Hour :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">₹ 15,000</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">3 Hour :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">₹ 20,000</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">6 Hour :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">₹ 30,000</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">Extra Hours :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">₹ 5,000</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">Dinner Date :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">-----------</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_table">
              <div className="profile_det_table_left">
                <p className="table_all_stats">Overnight :</p>
              </div>
              <div className="profile_det_table_right">
                <p className="table_all_stats">₹ 40,000</p>
              </div>
            </div>
            <hr width="90%" />

            <div className="profile_description">
              <p>
                The charges are 100% genuine, You can get Full satsfaction when
                you Book a Girl.
              </p>
            </div>
          </div>
        </div>
        <div className="profile_des">
          <h2 className="profile_about">About {name}</h2>
          <p>{description}</p>
        </div>

        <ProfileRating />

        <OtherProfiles />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  .profile_about {
    color: #f6aa1c;
    text-align: center;
    font-weight: bold;
    font-size: 1.8em;
  }
  .profile_des {
    background-color: #000;
    width: 90vw;
    margin: auto;
    display: block;
    padding: 10px;
    margin-bottom: 20px;
  }
  .profile_detail {
    display: grid;
    grid-template-columns: 70% 30%;
    width: 95vw;
    margin: 0px auto;
    padding: 30px 0px;
  }
  .profile_det_left {
    margin-top: 20px;
  }
  .profile_det_right {
    margin: 0px auto;
    display: block;
    background-color: #941b0c;
    width: 100% !important;
    margin-top: 20px;
  }
  .profile_title {
    font-size: 1.8em;
    text-align: center;
    color: #f6aa1c;
  }
  .profile_det_img {
    margin-top: 1%;
  }
  .profile_gal {
    margin: 0px auto;
    display: block;
    text-align: center;
    background-color: #941b0c;
  }
  .profile_det_img {
    border-radius: 5px;
    margin: 1px !important;
  }
  .stats {
    font-size: 1.8em;
    text-align: center;
    color: #f6aa1c;
    margin-top: 30px;
  }
  .about_profile {
    font-size: 1.8em;
    color: #f6aa1c;
    margin-top: 30px;
  }
  .profile_table {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .table_all_stats {
    margin-bottom: 0px !important;
  }
  .profile_det_left_name {
    background-color: #941b0c;
    padding: 20px 0px;
  }

  .about_profile {
    font-size: 1.4em;
    color: #bbaf08;
    text-align: center;
    margin-top: 30px;
  }

  .profile_description {
    width: 96%;
    margin: 0px auto;
  }

  .profile_description p {
    color: #bbaf08;
    margin-top: 30px;
  }

  @media only screen and (max-width: 900px) {
    .profile_detail {
      display: grid;
      grid-template-columns: 1fr !important;
    }
    .profile_gal {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`

export const query = graphql`
  query getSingleProfile($name: String) {
    contentfulProfile(name: { eq: $name }) {
      name
      age
      altTag
      availableState
      hairColor
      height
      languages
      nationality
      profileImages {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      description {
        description
      }
      profileImgsAlt {
        id
        profilesAlt
      }
      profileImages {
        title
      }
      metaTitle
      metaDescription {
        metaDescription
      }
      id
    }
  }
`

export default ProfileDetail
