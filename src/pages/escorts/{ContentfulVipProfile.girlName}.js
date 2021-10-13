import React from 'react'
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GalleryTwo from "../../components/GalleryTwo"
import { AiFillInfoCircle } from "react-icons/ai"
import { RiWomenFill } from "react-icons/ri"
import { HiLocationMarker } from "react-icons/hi"
import { GiHairStrands } from "react-icons/gi"
import { FaLanguage } from "react-icons/fa"
import { GiBodyHeight } from "react-icons/gi"
import { GiWorld } from "react-icons/gi"


const GalleryTwoDet = ({data}) => {
 const {
  girlName,
  age,
  girlLocation,
  hairColor,
  height,
  languages,
  nationality,
  girlDetailImg,
  girlSingleimg,
  girlDet:{girlDet},
 } = data.contentfulVipProfile
 const pathToImage = getImage(girlSingleimg)
 return (
  <Layout>
   <Wrapper>

       <div className="gal_two_name">
        <h1>{girlName} - Age - {age} </h1>
       </div>

       

       <div className="gal_two_container">
           <StaticImage
              src="../../assets/images/gal-two-ban.jpg"
              alt="mumbai escorts"
              placeholder="blurred"
              layout="constrained"
              className="Gallery_two_img"
            />
            <div className="gal_two_container_single_img">
            <GatsbyImage
                  image={pathToImage}
                  alt={girlName}
                  className="gal_det_img"
                />
            </div>
         </div>


        
         <div className="gal_det_tit">
          {/* slide line start  */}
        <div className="section-title">
          <h2 className="cat_h2">{girlName} Profile Detail </h2>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
          </div>
          <div className="gallery_box">
         <div className="gal_two_box">
       
           {
            girlDetailImg.map((item) => {
             const { gatsbyImageData, title } = item
             const pathToImage = getImage(gatsbyImageData)
             return (
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="galery_det_img"
              />
            )
            })
           }
         </div>
         <div className="gal_two_box_right">
         <div className="gal_two_box_right_new">
          <p> <AiFillInfoCircle/> {girlName} Details </p>
         </div>

         <div className="gal_two_box_right_new_box">
         <table>
         <tr>
           <th> <GiWorld className="icons" /> Nationality</th>
           <td> {nationality}</td>
         </tr>
         <tr>
           <th> <GiBodyHeight className="icons" /> Height</th>
           <td>{height}</td>
         </tr>
         <tr>
           <th>Place Of Service</th>
           <td>Outcall, Incall</td>
         </tr>
         <tr>
           <th><HiLocationMarker className="icons" /> Location</th>
           <td>{girlLocation}</td>
         </tr>
         <tr>
           <th> <GiHairStrands className="icons" /> Hair Color</th>
           <td>{hairColor}</td>
         </tr>
         <tr>
           <th> <RiWomenFill className="icons" /> Body Type</th>
           <td>Curvy</td>
         </tr>
         <tr>
           <th> <FaLanguage /> Language</th>
           <td>{languages}</td>
         </tr>
       </table>
         </div>

         <div className="gal_two_box_right_new_box table_new">
         <table>
         <tr>
           <th>Time</th>
           <th>Incall</th>
           <th>Outcall</th>
         </tr>
         <tr>
           <td>2 Hours</td>
           <td>10,000</td>
           <td>10,000</td>
         </tr>
         
         <tr>
           <td>3 Hours</td>
           <td>15,000</td>
           <td>15,000</td>
         </tr>
         
         <tr>
           <td>Full Night</td>
           <td>35,000</td>
           <td>35,000</td>
         </tr>
         
       </table>
       <div className="des">
        <p>Here Providing Pricing is 100% Genuine Prices, If you need cheap escorts that is also available in our Mumbai Escorts...</p>
       </div>
         </div>

         </div>
         </div>


         <div className="gal_det_tit">
          {/* slide line start  */}
   <div className="section-title">
          <h2 className="cat_h2">About {girlName} </h2>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
          </div>

          <div className="gal_two_des">
           <p>{girlDet}</p>
          </div>

          <GalleryTwo />

     
   </Wrapper>
   </Layout>
 )
}

export const query = graphql `
query getGalleryTwo($girlName:String) {
 contentfulVipProfile(girlName: {eq: $girlName}){
  girlName
  age
  girlLocation
  hairColor
  height
  id
  languages
  nationality
  girlDet {
    girlDet
  }
  girlDetailImg {
    gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
  }
  girlDetailImg {
   title
  }
  girlSingleimg {
   gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
   
 }
 }
}
`
const Wrapper = styled.div`
width: 80vw;
margin: 0px auto;
color: #fff;
.icons{
 color: gold !important;
}
.des{
 margin-top: 10px;
}
.des p{
 font-size: 16px;
}
.gal_det_tit{
 text-align: center;
}
.table_new{
 margin-top: 10px;
}
.gal_det_tit h2{
 font-size: 1.8em;
 font-weight: bold;
}
.gal_two_box_right_new{
 text-align: center;
 background-color: red;
}
table, td, th {
  border: 1px solid red;
  text-align: center;
  line-height: 2.8em;
}
table {
  width: 100%;
  border-collapse: collapse;
}
.Gallery_two_img{
 width: 100%;
 height: 40vw;
 border-radius: 5px;
}
.gal_two_container{
 height: 40vw;
 margin-bottom: 10px;
 position: relative;
 margin-bottom: 20px;
}
.gal_two_container_single_img{
 position: absolute;
 bottom: 0;
 left: 40%;
 right: 50%;
 transform: translateX(-50%, -50%);
}
.gal_det_img{
 text-align: center;
 width: 20vw;
 height: 20vw;
 border-radius: 50%;
}
.gal_two_name{
 text-align: center;
 font-size: 1.8em;
}
.gal_two_box{
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-column-gap: 10px;
 grid-row-gap: 10px;
 margin-bottom: 20px;
}
.gallery_box{
 display: grid;
 grid-template-columns: 70% 30%;
 grid-column-gap: 10px;
 grid-row-gap: 10px;
}
@media only screen and (max-width: 768px) {
 width: 90vw;
 .gallery_box{
  grid-template-columns: 1fr;
 }
 .gal_two_box{
  grid-template-columns: 1fr 1fr;
 }
 .gal_two_name h1{
 font-size: 1.2em;
 font-weight: bold;
}
}

`
export default GalleryTwoDet
