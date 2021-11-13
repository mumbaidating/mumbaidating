import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import video from "../assets/videos/faq.mp4"
import ButtonCategory from "../components/ButtonCategory"


const FaqData = graphql`
  {
    allContentfulFaq {
      nodes {
        id
        question
        faqAnswer {
          faqAnswer
        }
      }
    }
  }
`

const Faq = () => {
  const data = useStaticQuery(FaqData)
  const faqdata = data.allContentfulFaq.nodes

  return (
    <Layout>
      <Wrapper>
      <div className="top_banner_new">
          <StaticImage
              src="../assets/images/faq-top.jpg"
              alt="Mumbai escort Faq"
              placeholder="blurred"
              layout="constrained"
              className="top_img"
            />
          </div>
        <div className="mini_container">
          {/* slide line start  */}
          <div className="section-title">
            <h1 className="section_title_main">FAQ</h1>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}

          <div className="new_faq">
            <div className="new_faq_left">
              {faqdata.map(faq => {
                const {
                  id,
                  question,
                  faqAnswer: { faqAnswer },
                } = faq
                return (
                  <div className="faq_container" key={id}>
                    <h2>{question}</h2>
                    <p>{faqAnswer}</p>
                  </div>
                )
              })}
            </div>
            <div className="new_faq_right">
              <StaticImage
                src="../assets/images/faq.jpg"
                alt="mumbai call girl service"
                placeholder="blurred"
                layout="constrained"
              />
               <ButtonCategory />
            </div>
          </div>
        </div>
        {/* video start  */}
        <div className="video_box">
          <div className="video_left">
            <StaticImage
              src="../assets/images/new-ban-1.jpg"
              alt="mumbai escorts faq"
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
        {/* video end  */}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  .main_heading_text {
    color: #bc3908;
    font-size: 2rem;
  }
  .main_heading {
    text-align: center;
  }
  .faq_container {
    margin-bottom: 20px;
  }
  .faq_btn {
    margin-left: 15px;
  }
  .faq_color_new {
    color: gold;
    padding-left: 10px;
  }
  .new_faq {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    margin-bottom: 20px;
  }
  .new_faq_left {
    padding: 10px;
  }
  .new_faq_left h2 {
    color: #f6aa1c;
    font-size: 1.6em;
  }

  @media only screen and (max-width: 900px) {
    .new_faq {
      display: grid;
      grid-template-columns: 1fr;
    }
    .new_faq_left {
      margin-bottom: 20px;
    }
  }
`

export default Faq
