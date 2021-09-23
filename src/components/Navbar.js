import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import { StaticImage } from "gatsby-plugin-image"
// import logo from "../assets/images/logo.png"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <StaticImage
              src="../assets/images/logo.png"
              alt="mumbai escorts"
              placeholder="blurred"
              layout="constrained"
              className="logo_nav"
            />
          </Link>
          {/* <h6>Isabasu</h6> */}
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/mumbai-escorts"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Mumbai Escorts
          </Link>
          <Link
            to="/mumbai-call-girls"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Mumbai Call Girl
          </Link>
          <Link
            to="/category"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Category
          </Link>
          <Link
            to="/location"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Location
          </Link>
          <Link
            to="/adult-room"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Adult Room
          </Link>
          <Link
            to="/faq"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Faq
          </Link>
          <Link
            to="/price"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Price
          </Link>
          <Link
            to="/blog"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Blog
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
