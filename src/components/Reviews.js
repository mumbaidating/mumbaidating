import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Reviews = () => {
  return (
    <>
      <Wrapper>
        <ul className="list-members">
          <li className="member">
            <div className="member-image">
              <StaticImage
                src="../assets/images/rev-one.jpg"
                alt="mumbai escorts"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
            <div className="member-info">
              <h3>Akshay</h3>
              <p>Booked One Girl, She is pretty, her lips are very sweet...</p>
            </div>
          </li>
          <li className="member">
            <div className="member-image">
              <StaticImage
                src="../assets/images/review-two.jpg"
                alt="mumbai escorts"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
            <div className="member-info">
              <h3>Mayank</h3>
              <p>
                Riya I will Never forget you in my life, your nude show is
                Osm...
              </p>
            </div>
          </li>
          <li className="member">
            <div className="member-image">
              <StaticImage
                src="../assets/images/review-three.jpg"
                alt="mumbai escorts"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
            <div className="member-info">
              <h3>Udit</h3>
              <p>Taken Onenight stand, Best Movements in my life...</p>
            </div>
          </li>
          <li className="member">
            <div className="member-image">
              <StaticImage
                src="../assets/images/review-four.jpg"
                alt="mumbai escorts"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
            <div className="member-info">
              <h3>Roshan</h3>
              <p>
                Taken Blow job service, It was fantastic esperience, girl have
                osm Mouth...
              </p>
            </div>
          </li>
        </ul>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  /* style member component */

  .list-members {
    background: var(--headings);
    width: 80%;
    margin: 4% auto;
    display: flex;
    flex-wrap: wrap;
  }

  .member-info h3,
  p {
    color: var(--nav-bg);
    font-weight: 900;
  }
  .member {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .member-image {
    width: 50%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }

  .member-image img {
    width: 100%;
    height: 100%;
    transition: 1s;
  }

  .member-image:hover img {
    transform: scale(1.1);
  }

  .member-info {
    width: 50%;
    text-align: center;
  }
  .member-info h3 {
    font-size: 1.2em;
  }

  .member-info p {
    margin: 20px 0;
  }

  /* Membuat segitiga */
  .member-image::after {
    content: "";
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 15px solid #ffe501;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  /* Merubah posisi member-image dengan member-info */
  @media screen and (min-width: 771px) {
    .member:nth-child(4n + 3) .member-info,
    .member:nth-child(4n + 4) .member-info {
      order: 1;
    }
    .member:nth-child(4n + 3) .member-image,
    .member:nth-child(4n + 4) .member-image {
      order: 2;
    }

    /* Merubah posisi sigitiga pada baris genap */
    .member:nth-child(4n + 3) .member-image::after,
    .member:nth-child(4n + 4) .member-image::after {
      left: 0;
      right: auto;
      transform: translateY(-50%) rotateZ(180deg);
    }
  }

  /* Mobile Styles */
  @media screen and (max-width: 770px) {
    .list-members {
      width: 95%;
    }
    .member {
      flex-basis: 100%;
      font-size: 14px;
    }

    .member:nth-child(even) .member-info {
      order: 1;
    }
    .member:nth-child(even) .member-image {
      order: 2;
    }

    /* Merubah posisi sigitiga elemen genap */
    .member:nth-child(even) .member-image::after {
      left: 0;
      right: auto;
      transform: translateY(-50%) rotateZ(180deg);
    }
  }
  li.member {
    background: var(--headings);
  }
`

export default Reviews
