import React from "react"
import styled from "styled-components"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer>
          <div className="content">
            <div className="top">
              <div className="logo-details">
                <i className="fab fa-slack" />
                <span className="logo_name">mumbaidating.net</span>
              </div>
              <div className="media-icons">
                <a href="#">
                  <FaFacebookF className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <AiOutlineTwitter className="fab fa-twitter" />{" "}
                </a>
                <a href="#">
                  <FaInstagram className="fab fa-instagram" />{" "}
                </a>
                <a href="#">
                  <FaLinkedinIn className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <AiFillYoutube className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="link-boxes">
              <ul className="box">
                <li className="link_name">Company</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/mumbai-escorts">Mumbai Escorts</Link>
                </li>
                <li>
                  <Link to="/mumbai-call-girls">Mumbai Call girl</Link>
                </li>
                <li>
                  <Link to="/category">Category</Link>
                </li>
                <li>
                  <Link to="/location">Location</Link>
                </li>
              </ul>
              <ul className="box">
                <li className="link_name">Company</li>
                <li>
                  <Link to="/adult-room">Adult Room</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/price">Price</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
              <ul className="box">
                <li className="link_name">Locations</li>
                <li>
                  <Link to="https://www.mumbaidating.net/location/andheri">
                    Andheri
                  </Link>
                </li>
                <li>
                  <Link to="https://www.mumbaidating.net/location/bandra">
                    Bandra
                  </Link>
                </li>
                <li>
                  <Link to="https://www.mumbaidating.net/location/borivali">
                    Borivali
                  </Link>
                </li>
                <li>
                  <Link to="https://www.mumbaidating.net/location/chembur">
                    Chembur
                  </Link>
                </li>
                <li>
                  <Link to="https://www.mumbaidating.net/location/powai">
                    Powai
                  </Link>
                </li>
              </ul>
              <ul className="box">
                <li className="link_name">Categories</li>
                <li>
                  <Link to="https://www.mumbaidating.net/category/girlfriend-experience">
                    Girlfriend Experience
                  </Link>
                </li>
                <li>
                  <Link to="https://www.mumbaidating.net/category/one-night-stand">
                    One Night Stand
                  </Link>
                </li>
                <li>
                  <Link to="https://www.mumbaidating.net/category/threesome">
                    Threesome
                  </Link>
                </li>
                <li>
                  <Link to="https://www.mumbaidating.net/category/women-seeking-men">
                    Women Seeking Men
                  </Link>
                </li>
                <li>
                  <Link to="https://www.mumbaidating.net/category/young-escorts">
                    Young Escorts
                  </Link>
                </li>
              </ul>

              <ul className="box input-box">
                <li className="link_name">Subscribe</li>
                <li>
                  <input type="text" placeholder="Enter your email" />
                </li>
                <li>
                  <input type="button" defaultValue="Subscribe" />
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom-details">
            <div className="bottom_text">
              <span className="copyright_text">
                Copyright © {new Date().getUTCFullYear()} <a href="#">Logo.</a>
                All rights reserved
              </span>

              <span className="policy_terms">
                <Link to="/">Privacy policy</Link>
                <Link to="/">Terms &amp; condition</Link>
              </span>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  footer {
    background: var(--footer-bg);
    width: 100%;
    bottom: 0;
    left: 0;
    border-top: 1px solid #f6aa1c;
  }
  /* footer::before{
    content: '';
    position: absolute;
    left: 0;
    top: 100px;
    height: 1px;
    width: 100%;
    background: #AFAFB6;
  } */
  footer .content {
    max-width: 1250px;
    margin: auto;
    padding: 30px 40px 40px 40px;
  }
  footer .content .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content .top .logo-details {
    color: #fff;
    font-size: 30px;
  }
  .content .top .media-icons {
    display: flex;
  }
  .content .top .media-icons a {
    height: 40px;
    width: 40px;
    margin: 0 8px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 17px;
    text-decoration: none;
    transition: all 0.4s ease;
  }
  .top .media-icons a:nth-child(1) {
    background: #4267b2;
  }
  .top .media-icons a:nth-child(1):hover {
    color: #4267b2;
    background: #fff;
  }
  .top .media-icons a:nth-child(2) {
    background: #1da1f2;
  }
  .top .media-icons a:nth-child(2):hover {
    color: #1da1f2;
    background: #fff;
  }
  .top .media-icons a:nth-child(3) {
    background: #e1306c;
  }
  .top .media-icons a:nth-child(3):hover {
    color: #e1306c;
    background: #fff;
  }
  .top .media-icons a:nth-child(4) {
    background: #0077b5;
  }
  .top .media-icons a:nth-child(4):hover {
    color: #0077b5;
    background: #fff;
  }
  .top .media-icons a:nth-child(5) {
    background: #ff0000;
  }
  .top .media-icons a:nth-child(5):hover {
    color: #ff0000;
    background: #fff;
  }
  footer .content .link-boxes {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  footer .content .link-boxes .box {
    width: calc(100% / 5 - 10px);
  }
  .content .link-boxes .box .link_name {
    color: var(--nav-bg);
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 10px;
    position: relative;
  }
  .link-boxes .box .link_name::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 35px;
    background: #fff;
  }
  .content .link-boxes .box li {
    margin: 6px 0;
    list-style: none;
  }
  .content .link-boxes .box li a {
    color: var(--nav-bg);
    font-size: 14px;
    font-weight: 900;
    text-decoration: none;
    opacity: 0.8;
    transition: all 0.4s ease;
  }
  .content .link-boxes .box li a:hover {
    opacity: 1;
    text-decoration: underline;
  }
  .content .link-boxes .input-box {
    margin-right: 55px;
  }
  .link-boxes .input-box input {
    height: 40px;
    width: calc(100% + 55px);
    outline: none;
    border: 2px solid var(--para-color);
    background: var(--nav-bg);
    border-radius: 4px;
    padding: 0 15px;
    font-size: 15px;
    color: #fff;
    margin-top: 5px;
  }
  .link-boxes .input-box input::placeholder {
    color: var(--para-color);
    font-size: 16px;
  }
  .link-boxes .input-box input[type="button"] {
    background: #fff;
    color: #140b5c;
    border: none;
    font-size: 18px;
    font-weight: 500;
    margin: 4px 0;
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.4s ease;
  }
  .input-box input[type="button"]:hover {
    opacity: 1;
  }
  footer .bottom-details {
    width: 100%;
    background: var(--nav-bg);
  }
  footer .bottom-details .bottom_text {
    max-width: 1250px;
    margin: auto;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
  }
  .bottom-details .bottom_text span,
  .bottom-details .bottom_text a {
    font-size: 14px;
    font-weight: 300;
    color: var(--para-color);
    opacity: 0.8;
    text-decoration: none;
  }
  .bottom-details .bottom_text a:hover {
    opacity: 1;
    text-decoration: underline;
  }
  .bottom-details .bottom_text a {
    margin-right: 10px;
  }
  .logo_name {
    color: #000000;
    font-weight: 900;
  }
  @media (max-width: 900px) {
    footer .content .link-boxes {
      flex-wrap: wrap;
    }
    footer .content .link-boxes .input-box {
      width: 40%;
      margin-top: 10px;
    }
  }
  @media (max-width: 700px) {
    footer {
      position: relative;
    }
    .content .top .logo-details {
      font-size: 26px;
    }
    .content .top .media-icons a {
      height: 35px;
      width: 35px;
      font-size: 14px;
      line-height: 35px;
    }
    footer .content .link-boxes .box {
      width: calc(100% / 3 - 10px);
    }
    footer .content .link-boxes .input-box {
      width: 60%;
    }
    .bottom-details .bottom_text span,
    .bottom-details .bottom_text a {
      font-size: 12px;
    }
  }
  @media (max-width: 520px) {
    footer::before {
      top: 145px;
    }
    footer .content .top {
      flex-direction: column;
    }
    .content .top .media-icons {
      margin-top: 16px;
    }
    footer .content .link-boxes .box {
      width: calc(100% / 2 - 10px);
    }
    footer .content .link-boxes .input-box {
      width: 100%;
    }
    footer .bottom-details .bottom_text {
      flex-direction: column;
    }
  }
`

export default Footer
