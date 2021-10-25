import React from "react"
import styled from "styled-components"

const ProfileRating = () => {
  return (
    <>
      <Wrapper>
        {/* slide line start  */}
        <div className="section-title">
          <h2 className="cat">Give your Reviews</h2>
          <div className="bar"></div>
        </div>
        {/* slide line start  */}
        <form
          name="contact_v2"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact_v2"></input>
          <p>
            <label>
              Your Name: <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" required />
            </label>
          </p>

          <p>
            <label>
              Message: <textarea name="message" required></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 90vw;
  margin: 0px auto;
  margin-bottom: 40px;
  .profile_reviews {
    text-align: center;
  }
  label{
    color: gold;
  }
`

export default ProfileRating
