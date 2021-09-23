import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { Link } from "gatsby"

const MumbaiEscortProfile = graphql`
  {
    allContentfulProfile(filter: { featuredProfile: { eq: true } }) {
      nodes {
        age
        name
        id
        category
        altTag
        featuredProfileDesc {
          featuredProfileDesc
        }
        singleImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const MumbaiEscorts = () => {
  const data = useStaticQuery(MumbaiEscortProfile)
  const newData = data.allContentfulProfile.nodes
  return (
    <Wrapper>
      <main className="container">
        {newData.map(item => {
          const { age, name, category, id, altTag, singleImage } = item
          const {
            featuredProfileDesc: { featuredProfileDesc },
          } = item
          const pathToImg = getImage(singleImage)
          const slug = slugify(name, { lower: true })
          return (
            <article className="postcard blue" key={id}>
              <Link className="postcard__img_link" to={`/profile/${slug}`}>
                <GatsbyImage image={pathToImg} alt={altTag} />
              </Link>
              <div className="postcard__text">
                <h2 className="postcard__title blue text-center home_heading">
                  <Link to={`/profile/${slug}`}>
                    {" "}
                    {name} {age}
                  </Link>
                </h2>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    <i className="fas fa-calendar-alt mr-2" /> {category}
                  </time>
                </div>
                <div className="postcard__bar" />
                <div className="postcard__preview-txt">
                  {featuredProfileDesc}
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item">
                    <i className="fa fa-location-arrow mr-2" />
                    24/7 Avaialable
                  </li>
                  <li className="tag__item play blue">
                    <Link to={`/profile/${slug}`}>
                      <i className="fa fa-location-arrow mr-2" /> View Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          )
        })}
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    padding: 0px 0px;
  }
  width: 90vw;
  margin: 0px auto;
  /* Cards */
  article.postcard.blue {
    height: auto;
  }
  .postcard {
    flex-wrap: wrap;
    display: flex;
    background-color: var(--headings);
    box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
    border-radius: 10px;
    margin: 0 0 2rem 0;
    overflow: hidden;
    position: relative;
    color: var(--nav-bg);
    font-weight: bold;
  }
  .home_heading a {
    color: var(--nav-bg) !important;
    font-weight: bold;
  }
  .postcard a {
    color: inherit;
  }
  .postcard h1,
  .postcard .h1 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  .postcard .small {
    font-size: 80%;
  }
  .postcard .postcard__title {
    font-size: 1.75rem;
  }
  .postcard .postcard__img {
    max-height: 180px;
    width: 100%;
    object-fit: cover;
    position: relative;
  }
  .postcard .postcard__img_link {
    display: contents;
  }
  .postcard .postcard__bar {
    width: 50px;
    height: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #424242;
    transition: width 0.2s ease;
  }
  .postcard .postcard__text {
    padding: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .postcard .postcard__preview-txt {
    overflow: hidden;
    text-overflow: ellipsis;
    /* text-align: justify; */
    height: 100%;
  }
  .postcard .postcard__tagbox {
    display: flex;
    flex-flow: row wrap;
    font-size: 12px;
    margin: 20px 0 0 0;
    padding: 0;
    justify-content: center;
  }
  .postcard .postcard__tagbox .tag__item {
    display: inline-block;
    background: var(--nav-bg);
    border-radius: 3px;
    padding: 2.5px 10px;
    margin: 0 5px 5px 0;
    cursor: default;
    user-select: none;
    transition: background-color 0.3s;
    color: var(--para-color);
  }
  .postcard .postcard__tagbox .tag__item:hover {
    background: var(--para-hover);
  }
  .postcard:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(-70deg, #424242, transparent 50%);
    opacity: 1;
    border-radius: 10px;
  }
  .postcard:hover .postcard__bar {
    width: 100px;
  }

  @media screen and (min-width: 769px) {
    .postcard {
      flex-wrap: inherit;
    }
    .postcard .postcard__title {
      font-size: 2rem;
    }
    .postcard .postcard__tagbox {
      justify-content: start;
    }
    .postcard .postcard__img {
      max-width: 300px;
      max-height: 100%;
      transition: transform 0.3s ease;
    }
    .postcard .postcard__text {
      padding: 2rem;
      width: 100%;
    }
    .postcard .media.postcard__text:before {
      content: "";
      position: absolute;
      display: block;
      background: var(--para-hover);
      top: -20%;
      height: 130%;
      width: 55px;
    }
    .postcard:hover .postcard__img {
      transform: scale(1.1);
    }
    .postcard:nth-child(2n + 1) {
      flex-direction: row;
    }
    .postcard:nth-child(2n + 0) {
      flex-direction: row-reverse;
    }
    .postcard:nth-child(2n + 1) .postcard__text::before {
      left: -12px !important;
      transform: rotate(4deg);
    }
    .postcard:nth-child(2n + 0) .postcard__text::before {
      right: -12px !important;
      transform: rotate(-4deg);
    }
  }
  @media screen and (min-width: 1024px) {
    .postcard .postcard__text {
      padding: 2rem 3.5rem;
    }
    .postcard .postcard__text:before {
      content: "";
      position: absolute;
      display: block;
      background: var(--para-hover);
      top: -20%;
      height: 130%;
      width: 55px;
    }
  }
  /* COLORS */
  .postcard .postcard__tagbox .green.play:hover {
    background: var(--para-hover);
    color: black;
  }

  .green .postcard__title:hover {
    color: #bbaf08 !important;
  }

  .green .postcard__bar {
    background-color: var(--para-hover);
  }

  .green::before {
    background-image: linear-gradient(
      -30deg,
      rgba(121, 221, 9, 0.1),
      transparent 50%
    );
  }

  .green:nth-child(2n)::before {
    background-image: linear-gradient(
      30deg,
      rgba(121, 221, 9, 0.1),
      transparent 50%
    );
  }

  .postcard .postcard__tagbox .blue.play:hover {
    background: var(--para-hover);
  }

  .blue .postcard__title:hover {
    color: var(--para-hover);
  }

  .blue .postcard__bar {
    background-color: var(--nav-bg);
  }

  .blue::before {
    background-image: linear-gradient(
      -30deg,
      rgba(0, 118, 189, 0.1),
      transparent 50%
    );
  }

  .blue:nth-child(2n)::before {
    background-image: linear-gradient(
      30deg,
      rgba(0, 118, 189, 0.1),
      transparent 50%
    );
  }

  .postcard .postcard__tagbox .red.play:hover {
    background: var(--para-hover);
  }

  .red .postcard__title:hover {
    color: var(--para-hover);
  }

  .red .postcard__bar {
    background-color: var(--para-hover);
  }

  .red::before {
    background-image: linear-gradient(
      -30deg,
      rgba(189, 21, 11, 0.1),
      transparent 50%
    );
  }

  .red:nth-child(2n)::before {
    background-image: linear-gradient(
      30deg,
      rgba(189, 21, 11, 0.1),
      transparent 50%
    );
  }

  .postcard .postcard__tagbox .yellow.play:hover {
    background: var(--para-hover);
    color: black;
  }

  .yellow .postcard__title:hover {
    color: var(--para-hover);
  }

  .yellow .postcard__bar {
    background-color: var(--para-hover);
  }

  .yellow::before {
    background-image: linear-gradient(
      -30deg,
      rgba(189, 187, 73, 0.1),
      transparent 50%
    );
  }

  .yellow:nth-child(2n)::before {
    background-image: linear-gradient(
      30deg,
      rgba(189, 187, 73, 0.1),
      transparent 50%
    );
  }

  @media screen and (min-width: 769px) {
    .green::before {
      background-image: linear-gradient(
        -80deg,
        rgba(121, 221, 9, 0.1),
        transparent 50%
      );
    }

    .green:nth-child(2n)::before {
      background-image: linear-gradient(
        80deg,
        rgba(121, 221, 9, 0.1),
        transparent 50%
      );
    }

    .blue::before {
      background-image: linear-gradient(
        -80deg,
        rgba(0, 118, 189, 0.1),
        transparent 50%
      );
    }

    .blue:nth-child(2n)::before {
      background-image: linear-gradient(
        80deg,
        rgba(0, 118, 189, 0.1),
        transparent 50%
      );
    }

    .red::before {
      background-image: linear-gradient(
        -80deg,
        rgba(189, 21, 11, 0.1),
        transparent 50%
      );
    }

    .red:nth-child(2n)::before {
      background-image: linear-gradient(
        80deg,
        rgba(189, 21, 11, 0.1),
        transparent 50%
      );
    }

    .yellow::before {
      background-image: linear-gradient(
        -80deg,
        rgba(189, 187, 73, 0.1),
        transparent 50%
      );
    }

    .yellow:nth-child(2n)::before {
      background-image: linear-gradient(
        80deg,
        rgba(189, 187, 73, 0.1),
        transparent 50%
      );
    }
  }
  @media only screen and (max-width: 900px) {
    article.postcard.blue {
      height: auto !important;
    }
  }
`

export default MumbaiEscorts
