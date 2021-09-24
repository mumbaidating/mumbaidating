import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact our Mumbai Escorts | Book Call girls in 25min Doorstep"
        description="Our customer support is available 24/7 that are ready to help you in Booking our Mumbai escorts Service in very less time."
      />
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
              listings, please visit https://www.mumbaidating.net/
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
              action="https://formspree.io/f/mknkzrar"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contact
