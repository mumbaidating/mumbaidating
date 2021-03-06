import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import video from "../assets/videos/contact.mp4"

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact our Mumbai Escorts | Book Call girls in 25min Doorstep"
        description="Our customer support is available 24/7 that are ready to help you in Booking our Mumbai escorts Service in very less time."
      />

         <div className="top_banner_new">
          <StaticImage
              src="../assets/images/contact-top.jpg"
              alt="Contact Mumbai escorts"
              placeholder="blurred"
              layout="constrained"
              className="top_img"
            />
          </div>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3 className="section_title_main">Want To Get In Touch?</h3>
            <p>
              You can book an exclusive escort girl, Call girl or the lady of
              the queen for a quick rendezvous, full service, dinner date,
              public event, or just a little company You can contact our escorts
              by message after registering on our site in a short and discreet
              manner, so the ladies know you are real, or you can simply call
              them directly.
            </p>
            <p>
              To find out more about our escorts, agencies, clubs, and
              promotions for advertising in several listings as Premium/Featured
              listings, please visit <a href="https://www.mumbaidating.net/" className="a_color">https://www.mumbaidating.net/</a> 
            </p>
            <p>Do you need any assistance?</p>
            <p>
              Contact us by phone, email, or through an online chat service in
              English, Punjabi, or Hindi.
            </p>
            <p>Check out our FAQs, too.</p>
          </article>
          <article>
            <form
              className="form contact-form"
              name="contact_v1"
              method="POST"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact_v1"></input>
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" required />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" required></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
      <div className="my_container">
        {/* video start  */}
        <div className="video_box">
          <div className="video_left">
            <StaticImage
              src="../assets/images/new-ban-2.jpg"
              alt="mumbai escorts Adult room"
              placeholder="blurred"
              layout="constrained"
              className="video_img"
            />
          </div>
          <div className="video_wrapper">
            <video loop="true" autoplay="autoplay">
              <source src={video} type="video/mp4" />
             
            </video>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact