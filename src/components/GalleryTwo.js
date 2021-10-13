import React from 'react'
import styled from "styled-components"
// import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { FcVip } from "react-icons/fc"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { Link } from "gatsby"


const query = graphql`
{
 allContentfulVipProfile {
   nodes {
    age
     available
     verified
     discount
     girlName
     girlLocation
     girlSingleimg {
       gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
     }
   }
 }
}
`

const GalleryTwo = () => {
 const data = useStaticQuery(query)
  const galleryTwo = data.allContentfulVipProfile.nodes


 return (
  <>
  <Wrapper>
   {/* slide line start  */}
   <div className="section-title">
          <h2 className="cat_h2">View Our Top Vip Escorts Mumbai </h2>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
   <div className="gallery_two">

  {
   galleryTwo.map((item) =>{
    const {
     age,
     available,
     verified,
     discount,
     girlName,
     girlLocation,
     girlSingleimg
    } = item; 
     const pathToImage = getImage(girlSingleimg)
     const slug = slugify(girlName, { lower: true })
     return (
<div className="card_escort_overall">
   <div className="card_escort_picture">
      <Link to={`/escorts/${slug}`}>
      <GatsbyImage
                  image={pathToImage}
                  alt={girlName}
                  className="profile_det_img"
                />
     </Link>
      <span className="adv_icon">
     
          <FcVip className="vip" />

       </span>
      <span className="available_today_icon">
         <span className="blink-hard">{available}</span>
         <br />
      </span>
      <span className="outdated_icon"></span>
      <span className="tour_data_icon"></span>
      <span className="discount_icon"><span>{discount}% Discount</span></span>
      <span className="verified_icon"><span>✓ {verified}</span></span>
   </div>
  <div className="new_bg_gal">
  <div className="card_escort_title notranslate">
      <a href="#">{girlName} - {age}</a>
   </div>
   <div className="card_escort_city_country">
     {girlLocation}
   </div>
  </div>
</div>
     )
   })
  }

  

   </div>

  </Wrapper>
   
  </>
 )
}


const Wrapper = styled.div`

.gallery_two{
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
 grid-column-gap: 10px;
 grid-row-gap: 10px;
 width: 85vw;
 margin: 40px auto;
}
svg.vip{
 font-size: 40px;
}
@media only screen and (max-width: 1024px) {
  .gallery_two {
   grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 768px) {
  .gallery_two {
   grid-template-columns: 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 500px) {
  .gallery_two {
   grid-template-columns: 1fr 1fr;
  }
}

.card_escort_overall {
    width: 100%;
    max-width: 100%;
    /* margin: 5% 5%; */
    text-align: center;
    vertical-align: top;
    display: inline-block;
}
.card_escort_overall .card_escort_picture {
    border: 1px solid #C38B3D;
    position: relative;
}
.card_escort_overall .card_escort_picture a {
    /* aspect-ratio: 130 / 200; */
    display: block;
}

.block_overall .block_content a {
    color: #C38B3D;
}
.card_escort_overall .card_escort_picture a img {
    width: 100%;
    display: block;
}
.block_overall .block_content a {
    color: #C38B3D;
}
.card_escort_overall .card_escort_picture > span.adv_icon {
    position: absolute;
    top: -9%;
    left: -19px;
    width: 29.3%;
    display: inline-block;
}
.card_escort_overall{
 text-align: center;
}
.card_escort_overall .card_escort_picture > span img {
    width: 100%;
}
.card_escort_overall .card_escort_picture > span.available_today_icon {
    position: absolute;
    top: -6%;
    right: -5px;
    width: 95%;
    text-align: right;
    display: inline-block;
}
.card_escort_overall .card_escort_picture > span.available_today_icon span {
    background: #ef0303;
    border-radius: 10px;
    padding: 2px 3px;
    font-size: 0.6em;
    color: #FFF;
}
.card_escort_overall .card_escort_picture > span.available_today_icon{
 text-align: right;
 z-index: 99;
}
.card_escort_overall .card_escort_picture > span.available_today_icon span.purple {
    background: #ef0303;
}

.card_escort_overall .card_escort_picture > span.available_today_icon span {
    background: #ef0303;
    border-radius: 10px;
    padding: 2px 3px;
    font-size: 0.6em;
    color: #FFF;
}
.card_escort_overall .card_escort_picture > span.available_today_icon span{
 font-size: 0.6em;
    color: #FFF;
}
.card_escort_overall .card_escort_picture > span.outdated_icon {
    position: absolute;
    top: -6%;
    right: -5px;
    width: 95%;
    min-height: 1.1em;
    text-align: right;
    display: inline-block;
}
.card_escort_overall .card_escort_picture > span.tour_data_icon {
    position: absolute;
    bottom: 0px;
    right: -5px;
    width: 95%;
    text-align: right;
    display: inline-block;
}
.card_escort_overall .card_escort_picture > span.discount_icon {
    position: absolute;
    bottom: 0px;
    right: -5px;
    width: 95%;
    text-align: right;
    display: inline-block;
}
.card_escort_overall .card_escort_picture > span.discount_icon span {
    background: #ef0303;
    border-radius: 10px;
    padding: 2px 3px;
    font-size: 0.6em;
    color: #FFF;
}
.card_escort_overall .card_escort_picture > span.verified_icon {
    position: absolute;
    bottom: 0px;
    left: -6px;
    display: inline-block;
}
.card_escort_overall .card_escort_picture > span.verified_icon span {
    background: #080;
    border-radius: 10px;
    padding: 2px 3px;
    font-size: 0.6em;
    color: #FFF;
}
.card_escort_overall .card_escort_title {
    font-weight: bold;
    color: gold;
    overflow-wrap: anywhere;
}
.card_escort_overall .card_escort_title a {
    font-size: 1em;
    color: gold;
    text-transform: capitalize;
}

.block_overall .block_content a {
    color: #C38B3D;
}
.card_escort_overall .card_escort_city_country {
    color: #ef0303;
}
.blink-hard {
  animation: blinker 1s step-end infinite;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}

.new_bg_gal{
 border: 1px solid #cf0303;
}

`

export default GalleryTwo
