import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Covid = () => {
  const [data, setCovidData] = useState([])
  console.log(data)

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json")
      const cdata = await res.json()
      setCovidData(cdata.statewise[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCovidData()
  }, [])

  return (
    <>
      <Wrapper>
        <div className="mini_container">
          {/* slide line start  */}
          <div className="section-title">
            <h2 className="cat new_covid_head">
              Beat the Madness of Pandemic with our Safe & Secure Call Girl
              Services
            </h2>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}
          <div className="covid_content">
            <p>
              We all know how badly the Covid pandemic has messed up our brains.
              But why should a pandemic restrain you from enjoying the true
              bodily pleasure of lovemaking? Our Mumbai Escorts understand the
              concerns of our clients, the reason why we take 10+ health
              precautions in our Mumbai Escorts Agency. Our Mumbai Escorts
              service doesn't believe in ordinary call girls services, we go a
              step ahead and provide 11+ additional benefits to our clients for
              free. Here is how we make our VIP Call Services in Mumbai a
              memorable one for our VIP Clients.
            </p>
            <ul>
              <li>
                Rapid Antigen Covid test of our Mumbai Escorts every time when
                she visits a new client.
              </li>
              <li>
                100% fully sanitized 5 Stars and 4 Stars Hotels for our Escorts
                & Clients.
              </li>
              <li>
                5+ Instant Health Tests of our Mumbai Call girls before allowing
                her a VIP client.
              </li>
              <li>
                Full Body Check-Up of a new Mumbai Escort recruits before
                including her in our best escort agency in Mumbai.
              </li>
              <li>
                Strict Medical Checkups for all of our Independent Escorts &
                Model Escorts, weekly and monthly.
              </li>
              <li>
                No Middlemen Rule- We give our Mumbai Escorts Whatsapp number as
                soon as the client is verified.
              </li>
              <li>
                Pay after Escorts Service Offers for our VIP & Repeating
                Clients.
              </li>
              <li>
                100% Refund & Cancellation Policy for all our Escorts clients.
              </li>
            </ul>
          </div>
          <div className="contact-info">
            <div className="covid_card">
              <div className="card-content">
                <h3>OUR COUNTRY</h3>
                <span>INDIA</span>
              </div>
            </div>
            <div className="covid_card">
              <div className="card-content">
                <h3>
                  <span className="covid_small">Total</span> active
                </h3>
                <span>{data.active}</span>
              </div>
            </div>
            <div className="covid_card">
              <div className="card-content">
                <h3>
                  <span className="covid_small">Total</span> confirmed
                </h3>
                <span>{data.confirmed}</span>
              </div>
            </div>
            <div className="covid_card">
              <div className="card-content">
                <h3>
                  <span className="covid_small">Total</span> deaths
                </h3>
                <span>{data.deaths}</span>
              </div>
            </div>
            <div className="covid_card">
              <div className="card-content">
                <h3>migratedother</h3>
                <span>{data.migratedother}</span>
              </div>
            </div>
            <div className="covid_card">
              <div className="card-content">
                <h3>
                  <span className="covid_small"></span> state
                </h3>
                <span>{data.state}</span>
              </div>
            </div>
            <div className="covid_card">
              <div className="card-content">
                <h3>
                  <span className="covid_small">Total</span> recovered
                </h3>
                <span>{data.recovered}</span>
              </div>
            </div>
            <div className="covid_card">
              <div className="card-content">
                <h3 className="time_covid">lastupdatedtime</h3>
                <span className="covid_time time_covid">
                  {data.lastupdatedtime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

// active
// confirmed
// deaths
// deltaconfirmed
// deltadeaths
// deltarecovered
// lastupdatedtime
// recovered

const Wrapper = styled.div`
  .covid_content ul li {
    list-style-type: square;
    color: var(--para-color);
  }
  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .new_covid_head {
    margin-top: 20px;
  }
  .covid_content h2 {
    font-size: 1.4em;
    text-align: center;
    margin: 0px;
  }
  .covid_content h6 {
    font-size: 1.2em;
    text-align: center;
    margin: 0px;
    color: var(--nav-bg);
  }
  .covid_content h4 {
    font-size: 1.4em;
    text-align: center;
    margin: 0px;
  }
  .covid_time {
    font-size: 16px !important;
  }
  .covid_small {
    font-size: 13px !important;
  }
  .covid_card {
    position: relative;
    flex: 1;
    max-width: 300px;
    height: 140px;
    background-color: var(--headings);
    margin: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-content h3 {
    top: 20px;
    text-transform: uppercase;
    color: var(--nav-bg);
    font-size: 1.4em;
    font-weight: bold;
    text-align: center;
    margin: 0px auto;
  }

  .covid_card:hover {
    background-color: var(--para-hover);
    transition: 0.5s all ease-in;
  }
  .card-content span {
    bottom: 20px;
    color: var(--nav-bg);
    font-weight: 500;
    text-align: center;
    font-weight: bold;
    margin: 0px auto;
    display: block;
    font-size: 1.5em;
  }

  @media only screen and (max-width: 900px) {
    .contact-info {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 450px) {
    .contact-info {
      grid-template-columns: 1fr 1fr;
    }
    .covid_card {
      width: 143px !important;
      margin: 20px 2px !important;
    }
    .card-content h3 {
      font-size: 18px;
    }

    .card-content span {
      font-size: 15px !important;
    }
    .time_covid {
      font-size: 12px !important;
    }
  }
`

export default Covid
