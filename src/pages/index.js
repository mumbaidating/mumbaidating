import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import ProfileImages from "../components/ProfileImages"
import ButtonCategory from "../components/ButtonCategory"
import LocationButton from "../components/LocationButton"
import Reviews from "../components/Reviews"
import Blog from "../components/Blog"
import SEO from "../components/SEO"
import Covid from "../components/Covid"
import KamasutraPositions from "../components/KamasutraPositions"
import SimpleSlider from "../components/SimpleSlider"
import video from "../assets/videos/new-video-three.mp4"

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Mumbai Escorts | Call Girls Mumbai | Most Trustable escorts Agency"
        description="Our Mumbai escorts agency is one of the most popular escort services which you can blindly trust on. We have top most attractive and sexy call girls Mumbai of your choice."
      />
      <Wrapper>
        <div className="home_header_banner">
          <div className="desktop_banner">
            <StaticImage
              src="../assets/images/mumbaidating-desktop.jpg"
              alt="mumbai escorts"
              placeholder="blurred"
              layout="constrained"
              className="banner_desktop_img"
            />
          </div>
          <div className="mobile_banner">
            <StaticImage
              src="../assets/images/mumbai-dating-mobile.jpg"
              alt="mumbai escort service"
              placeholder="blurred"
              layout="constrained"
              className="banner_mobile_img"
            />
          </div>
        </div>
        <SimpleSlider />

        {/* slide line start  */}
        <div className="video_box">
          <div className="video_left">
            <StaticImage
              src="../assets/images/new-ban-4.jpg"
              alt="mumbai escorts blogs"
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

        <div className="my_top_div">
          {/* slide line start  */}
          <div className="section-title">
            <h1 className="section_title_main">
              Open the Kamasutra Gateway- A Warm Welcome from the Best Mumbai
              Escorts
            </h1>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}
          <div className="paras_box">
            <p>
              You might be a newcomer, but we are not- Our{" "}
              <a className="a_color" href="https://www.mumbaidating.net/">
                Mumbai Escorts
              </a>{" "}
              Agency has been in this wonderful venture of connecting call girls
              to their lovers for more than a decade now. Your search for the
              right{" "}
              <a
                className="a_color"
                href="https://www.mumbaidating.net/mumbai-call-girls"
              >
                Call girls Services in Mumbai
              </a>{" "}
              will surely end here. Don’t worry- We will give you enough reasons
              to become Bed partners with our lovely and seductive{" "}
              <b>Mumbai Escorts</b>.
            </p>

            <p>
              Have you have ever witnessed the heart-throbbing delicacy of
              Kamasutra positions? Or, do you know how it feels to be in bed
              with your favorite Bollywood Star? Or, have you seen a naked
              Catwalk from a <b>VIP Model Escorts</b> ? If the answer to these
              questions is a NO!! You are missing on life and adventure.
            </p>

            <p>
              But, don't worry, our Best Rated{" "}
              <a className="a_color" href="https://www.mumbaidating.net/">
                Escorts Agency in Mumbai
              </a>{" "}
              is a specialist in making our clients' fantasies and dreams true.
              Do you know? We have a customer base of more than 15000+ in our
              Mumbai Escort Services Agency.
            </p>
            <p>
              Our{" "}
              <a
                className="a_color"
                href="https://www.mumbaidating.net/mumbai-call-girls"
              >
                Mumbai Call Girls Service
              </a>{" "}
              is one of the oldest and reputable agencies in whole Mumbai. We
              are the best in the business for multiple reasons. You will know
              all of them- Just hang on to our website.
            </p>
          </div>
        </div>

        <KamasutraPositions />
        <ProfileImages />
        <div className="home_new_sec">
          <div className="home_new_sec_left">
            <ButtonCategory />
          </div>
          <div className="home_new_sec_right">
            <h2 className="home_nwe_sec_heading">
              Only the Divas of Seduction & Beauty Join Us- Best Call girls in
              Mumbai
            </h2>
            <p>
              Have you ever thought about what it is like to be with a true Diva
              of{" "}
              <a
                className="a_color"
                href="https://languages.oup.com/google-dictionary-en/"
              >
                seduction
              </a>{" "}
              , hotness, and allures? Our Mumbai Escorts are a true example of
              Seduction and perfection. Doubt us? Just see our{" "}
              <strong>Mumbai Escorts</strong>
              Photos in our Gallery. We don't believe in providing ordinary
              <b>call girl services in Mumbai</b>, the reason why we have
              included 15+ categories of Mumbai escorts in our agency.
            </p>
            <p>
              These Mumbai{" "}
              <a
                href="https://www.mumbaidating.net/category"
                className="a_color"
              >
                Escorts Categories
              </a>{" "}
              include Model Escorts, Independent Call girls, Foreign Escorts,
              Foreign Model Escorts, Desi Housewife Escorts, Desi Bhabhi
              Escorts, Big Ass Escorts, VIP Call girls, Young College Girls
              Escorts, High-Class Role Play Escorts, BDSM Call Girls, Celebrity
              Escorts, TV Actresses Escorts & Much more. These descriptions are
              just like a drop in the ocean- Our VIP Escorts Services in Mumbai
              delivers 10 times more than what it promises.
            </p>

            <p>
              Do you know we have 12+ active Bollywood Celebrity Escorts in our
              Mumbai Escorts Agency? And, what about the hot and sizzling Mumbai
              TV Actresses Call girls? We have it all Contact Us for More
              details.
            </p>

            <h2 className="home_nwe_sec_heading">
              Miss India Contestant Models In our Escorts Agency Mumbai- Mumbai
              Top Model Escorts
            </h2>
            <p>
              You would have already got a brief idea about our connection and
              wide range of astonishing <b> Mumbai call girls </b> in our best
              Escort Agency. To this list, we have added a new & Special Escorts
              category specially for our VIP Clients. For our VIP Escort
              Clients, we have recently inducted Miss India Models into our Call
              girl Services.
            </p>
            <p>
              From Miss India Top Models to Runner-up’s- We have included this
              new and fresh Premium VIP Miss India{" "}
              <strong> Escorts Services in Mumbai </strong>. We are the first
              and only one to provide these <b> VIP call girls in Mumbai </b>.
              Think of the fun, when a Miss India Model Escort will do a naked
              Catwalk in front of you? And, what about the seductive
              bed-breaking Kamasutra position with her?
            </p>
          </div>
        </div>
        <div className="img_one covid_rules_box">
          <StaticImage
            src="../assets/images/covid-rules.jpg"
            alt="Mumbai escorts covid rules"
            placeholder="blurred"
            layout="constrained"
            className="covid_rules"
          />
        </div>
        <Covid />
        <div className="mini_container">
          <h2 className="new_head_style">
            Get your Favourite Mumbai Escorts on Bed with you within 25 Minutes
          </h2>
          <p>
            Our <b> Mumbai Call Girls Services </b> understand the importance of
            time of our clients. It is the reason we connect our Call Girls with
            our Clients within 25 Minutes. Be it independent housewife Mumbai,
            College Call Girls, VIP Model Escorts, or foreign escorts, all our
            Escorts are connected with their clients with a strict deadline of
            25 minutes.
          </p>
          <p>
            Be it Andheri, Borivali, Goregaon, Bandra, Juhu, or Worli, our
            <a className="a_color" href="https://www.mumbaidating.net/">
              {" "}
              Mumbai Escorts Agency{" "}
            </a>
            provides call girl services in the whole of Mumbai, that too in
            record-breaking time. Once you book your favorite Call Girls from
            our Escorts Images Page, within no time, our <b> Mumbai Escorts </b>
            organization will connect you with her.
          </p>
        </div>
        <div className="mini_container">
          <h2 className="new_head_style">
            Prime Tourist Location Call Girls Services- Our Escorts Services
            Location in Mumbai
          </h2>
          <p>
            We are the Uber and Ola of the Call girls Service in Mumbai- Our
            Mumbai Escorts operate in the nook and corners of Mumbai. Our
            clients call us the Best Escorts in Mumbai because of the reason, we
            even provide Safe & Secure Call girls Services 24*7 to even the
            remotest and busiest part of Mumbai. We aren't any other Escorts
            agency in Mumbai, we operate for VIP Clients including Mumbai
            Celebrities and powerful people.
          </p>
          <p>
            For us, each of our clients is a VIP- the reason why we treat all
            our clients as a King. We allow both in-hotel and Outcalling escorts
            services in Mumbai. Our Prime Escorts Locations include Andheri,
            Goregaon, Juhu, Bandra, Borivali, Kurla, Parel, Navi Mumbai,
            Chembur, Nerul, Worli, Powai, etc. Be it any location in Mumbai, our
            female escorts in Mumbai are always available to make your Nights
            colorful.
          </p>
        </div>
        <div className="mini_container">
          <h2 className="new_head_style">
            Try Our Mumbai Escorts- Get Mumbai Escorts WhatsApp Number
          </h2>
          <p>
            Let the fun begin, why just choose when you can first talk on our
            Call Girl WhatsApp Number. Our female Escorts Services don't end
            here- we provide free Escorts WhatsApp Photos, Call Girls Video
            Calling, WhatsApp Video Calling, WhatsApp Video Call Sex, Model
            Escorts Live Cam & Much more, just at a single click.
          </p>
          <p>
            As soon we verify your profile, you can get our Escorts Photos &
            Escorts Videos & WhatsApp girls numbers. Our Booking is so simple,
            you can simply check our Escorts Photos on our Gallery, and select
            the <b> Call girls </b> of your choice. Check Escorts Photos, Book &
            Meet- Can't get simpler than that.
          </p>
        </div>
        <LocationButton />
        <div className="img_gal_one mini_container">
          <StaticImage
            src="../assets/images/quote1.jpg"
            alt="Mumbai escorts"
            placeholder="blurred"
            layout="constrained"
            className="img_gal_one_image"
          />
          <StaticImage
            src="../assets/images/quote2.jpg"
            alt="Mumbai escort service"
            placeholder="blurred"
            layout="constrained"
            className="img_gal_one_image"
          />
          <StaticImage
            src="../assets/images/quote3.jpg"
            alt="mumbai call girls"
            placeholder="blurred"
            layout="constrained"
            className="img_gal_one_image"
          />
          <StaticImage
            src="../assets/images/quote4.jpg"
            alt="escort service mumbai"
            placeholder="blurred"
            layout="constrained"
            className="img_gal_one_image"
          />
        </div>
        <div className="mini_container">
          {/* slide line start  */}
          <div className="section-title">
            <h2 className="cat_h2">Reviews</h2>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}
        </div>
        <Reviews />
        <div className="mini_container">
          <h2 className="new_head_style">
            Visit Our Angels- Check our Mumbai Female Escort girls’ Photos
          </h2>
          <p>
            Since we have a very large number of Clients, we understand that
            every client has its own desires and preferences. Some of our
            clients love the Desi Escorts while a few of our VIP Clients love to
            become bed partners with foreign model escorts like Russian Escorts,
            Australian Model Escorts, American Call Girls & other foreign
            <strong> escorts in Mumbai </strong>.
          </p>
          <p>
            While some clients choose based on nationality type, our other
            clients are specific about the body type of our{" "}
            <a className="a_color" href="https://www.mumbaidating.net/">
              {" "}
              female escorts in Mumbai{" "}
            </a>
            . Like some VIP Clients like <b> Big Ass Call girls </b>, some
            clients love Big Bust female escorts, some clients like Slim Model
            Escorts whereas some of our escorts clients love thick bottom Mumbai
            Escorts. Hence, whatever may be your preferences and desires- we
            make it happen.
          </p>
          <p>
            Our <b> Sexy Call Girls </b> Based on Body Types include Thick
            Figured Escorts, Zero Figured Escorts, Big Ass Escorts, Big Bust
            Call girls, Curvaceous Body figured Model Escorts, Redhead Escorts,
            Kamasutra expert Escorts, etc. Our Best{" "}
            <b> female Escort Agency </b> also has Blow Job Expert Escorts, Anal
            Expert Call girls, Threesome Expert Model Escorts, BDSM Escorts &
            much more.
          </p>
          <p>
            All you need is to go to our <b> Mumbai Escorts </b> Photos page on
            our Gallery and explore the fun with the real-time call girls’
            images. Our image gallery of escorts is 100% genuine, and timely
            updated.
          </p>
        </div>
        {/* new sec start */}
        <div className="section about">
          <div className="section-center about-center">
            <article className="about-info">
              <div className="section-title about-title">
                <h2 className="sexy_night_heading_mine">
                  Avail Special <strong> Call Girls Services in Mumbai </strong>{" "}
                  - Rock the Bed all: ; Night with our Mumbai Female Escorts
                </h2>
                <div className="underline" />
              </div>
              <p>
                India is a diverse country- so is our Mumbai Escorts Agency. We
                strongly believe in providing first-class diverse{" "}
                <b> escorts services in Mumbai </b>.
              </p>
              <p>
                Be it a Threesome Special Escort Services, One Night Stand with
                our Independent Housewife Escorts, or Bed fun with our College
                Call girls, we always strive for the Best. Here is a glance at
                the top{" "}
                <a className="a_color" href="https://www.mumbaidating.net/">
                  {" "}
                  escorts services in Mumbai{" "}
                </a>{" "}
                provided by us- The{" "}
                <strong> VIP escort agency in Mumbai </strong>.
              </p>
              <a
                href="https://www.mumbaidating.net/mumbai-escorts"
                className="btn"
              >
                Mumbai Escorts
              </a>
            </article>
            <article className="">
              <StaticImage
                src="../assets/images/sexy-night.png"
                alt="escorts in mumbai"
                placeholder="blurred"
                layout="constrained"
              />
            </article>
          </div>
        </div>
        {/* new sec end  */}
        <div className="mini_container">
          <h2 className="new_head_style">
            Mumbai Special with the Best Escorts Services in Mumbai
          </h2>
          <ul className="cat_tit_ul">
            <li>
              <span className="cat_tit">Young Escorts Services</span> - These
              escort Services include Mumbai College Girl Escorts, Independent
              Young Call girls, Foreign <b> College Girl Escorts </b>, Young
              Model Escorts & Much more. (Enliven the Young Heart within you).
            </li>
            <li>
              <span className="cat_tit">Bed Mate Matchers </span> - In our Best
              <strong> Escorts Agency Mumbai </strong>- we have a lot of
              freelance escorts which include Housewife Escorts, Widow Escorts,
              Divorced Escorts, Desi Bhabi Call Girls, etc. We connect these
              <b> Independent Call girls </b> with their King. In many cases,
              they end up making lifelong connections.
            </li>
            <li>
              <span className="cat_tit"> Women Seeking Men </span> - We work as
              bed matchmakers for our single clients. We connect young, MILFs,
              and even foreign girls with our clients. All you need is to
              satisfy the sexual needs of our independent women in Mumbai, and
              they are yours.
            </li>
            <li>
              <span className="cat_tit">Threesome </span> - Indulge in a
              passionate Threesome with prime Mumbai Model Escorts. We allow
              special 2 escorts offer for the price of 1 for repeated customers.
            </li>
            <li>
              <span className="cat_tit"> Strip Club Fun </span> - What you see
              in Movies, we do in reality. Our trained Female Escorts are
              experts at strip teasing, hence enjoy our Strip Club Services in
              Movies.
            </li>
            <li>
              <span className="cat_tit"> BDSM </span> - For the Adventure
              Seekers, we have BDSM Escorts in our{" "}
              <strong> Mumbai Call girls Services </strong>.
            </li>
            <li>
              <span className="cat_tit"> Party Girls Services </span> - Our
              <b> Mumbai Escorts </b> love to party- the reason we have Party
              Special Call Girl Services. Add spice to your party with our sexy
              call girls.
            </li>
            <li>
              <span className="cat_tit">Happy Hours </span> - At Happy Hours, we
              provide huge Discounts, Free Model Escorts to lucky customers,
              Free Oil Rubbing Body Massages, & Much more.
            </li>
            <li>
              <span className="cat_tit"> Girlfriend Experience </span> - Beat
              the loneliness of life with GF Experience- Our call girlfriend
              Mumbai can give you the best Girlfriend Experience.
            </li>
            <li>
              <span className="cat_tit"> Tourist Special Offers </span> - For
              tourists and travel lovers, we give Travel{" "}
              <b> Call Girls Services </b>. It includes our top Model Escorts as
              your travel guide and Bed partner.
            </li>
          </ul>
        </div>
        <div className="mini_container">
          {/* slide line start  */}
          <div className="section-title">
            <h2 className="cat">Blog</h2>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}
        </div>
        <Blog />
        <div className="mini_container">
          {/* slide line start  */}
          <div className="section-title">
            <h2 className="cat">Enjoy Our Escort Service</h2>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}
        </div>
        <div className="img_gal_one mini_container">
          <StaticImage
            src="../assets/images/new-ban-1.jpg"
            alt="sexy mumbai escorts"
            placeholder="blurred"
            layout="constrained"
            className="img_gal_one_image"
          />
          <StaticImage
            src="../assets/images/new-ban-2.jpg"
            alt="vip mumbai escorts"
            placeholder="blurred"
            layout="constrained"
            className="img_gal_one_image"
          />
          <StaticImage
            src="../assets/images/new-ban-3.jpg"
            alt="mumbai call girl service"
            placeholder="blurred"
            layout="constrained"
            className="img_gal_one_image"
          />
          <StaticImage
            src="../assets/images/new-ban-4.jpg"
            alt="escorts mumbai"
            placeholder="blurred"
            layout="constrained"
            className="img_gal_one_image"
          />
        </div>
        {/* about sec start  */}
        <div className="mini_container">
          {/* slide line start  */}
          <div className="section-title">
            <h2 className="cat">Escort Service Mumbai</h2>
            <div className="bar"></div>
          </div>
          {/* slide line start  */}
        </div>
        {/* new sec  */}
        <div className="section about">
          <div className="section-center about-center">
            <article className="about-img">
              <StaticImage
                src="../assets/images/sexy-callgirl-one.jpg"
                alt="mumbai escorts nearme"
                placeholder="blurred"
                layout="constrained"
                className="hero-photo"
              />
            </article>
            <article className="about-info">
              <div className="section-title about-title">
                <h2 className="h2_heading">
                  Bollywood Tadka with our Celebrity Escorts- VIP Bollywood
                  Celebrities Escorts
                </h2>
                <div className="underline" />
              </div>
              <p className="about_paras">
                Our{" "}
                <a href="https://www.mumbaidating.net/" className="a_color">
                  Mumbai Escorts Services
                </a>{" "}
                doesn't end at ordinary <b>Call Girl Services</b>, we go a step
                ahead for our VIP Mumbai Clients. We arrange hook-ups & One
                Night Stands of the famous{" "}
                <strong> Bollywood Celebrity Escorts </strong> with our VIP
                Clients. You would be amazed to know that 12 of our Celebrity
                Escorts are very famous and still active in the Bollywood
                Industry.
              </p>
              <p className="about_paras">
                The list of VIP Escorts doesn't end here, we have 18+ TV Serial
                Escorts, TV Actresses VIP Escorts,{" "}
                <b> Mumbai Top Model Escorts </b> in our world-class Mumbai
                Escorts Agency. You can't even imagine how friendly and
                professional these classy Celebrity Escorts are. Moreover, Image
                the Excitement when your favorite Bollywood Star will be giving
                BJs, and Stripping in front of you. Had we been at your place,
                we will sip her like bee sips honey. Get your Honeymoon with our
                Celebrity Escorts- Book your B Town{" "}
                <strong> Celebrity Escorts </strong> Now.
              </p>
              <a href="#" className="btn">
                about me
              </a>
            </article>
          </div>
        </div>
        {/* new sec  */}
        <div className="section about">
          <div className="section-center about-center new_sec_right">
            <article className="about-img">
              <StaticImage
                src="../assets/images/sexy-callgirl-two.jpg"
                alt="cheap mumbai escorts"
                placeholder="blurred"
                layout="constrained"
                className="hero-photo"
              />
            </article>
            <article className="about-info new_about_info">
              <div className="section-title about-title">
                <h2 className="h2_heading">
                  The Final Call to Heaven- Book Your Fav Call Girl Now
                </h2>
                <div className="underline" />
              </div>
              <p className="about_paras">
                With just a few clicks, you are about to witness the world's
                greatest pleasure that is bodily pleasure. The warmth of our
                <strong>Mumbai Call Girls</strong> Body & the freshness of her
                warm breath will wash away all the pains of your life. Start the
                journey of love, romance, sex, and pleasure by booking your
                favorite <b>Mumbai escorts</b> from our{" "}
                <strong>Mumbai Escorts Gallery</strong>. You can choose to book
                your dream Girl by phone call, online Booking through our
                Escorts Website, Email, WhatsApp, or customer Support Desk.
              </p>
              <p className="about_paras">
                What are you waiting for? Wash away all the pain and stress of
                your life- Book Sizzling Hot{" "}
                <a
                  href="https://www.mumbaidating.net/mumbai-call-girls"
                  className="a_color"
                >
                  Mumbai Call Girls Now
                </a>{" "}
                . Avail the fun at our prime 4/5 Stars Hotels or right next to
                your bed at home with our 24*7 Mumbai outcall services. Book
                your Bed Lover Now, Get Special Bonus Services for Free. Contact
                Now for 25% First Time Discount & Bonus 2-in-1 Escort Services
                Package.
              </p>
            </article>
          </div>
        </div>
        {/* about sec end  */}
        <div className="img_one">
          <StaticImage
            src="../assets/images/contact.jpg"
            alt="High class mumbai escorts"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  .home_top_new {
    background-color: #000;
  }
  .cat_tit {
    color: var(--headings);
    font-weight: bold;
  }
  .about_paras {
    font-size: 16px;
  }
  .h2_heading {
    font-size: 1.6em;
    color: var(--headings);
    text-transform: capitalize;
  }
  .cat_tit_ul li {
    color: var(--para-color);
    margin-bottom: 20px;
  }

  .sexy_night_heading_mine {
    font-size: 1.6em;
    color: var(--headings);
  }
  .sexy_night_right {
    margin: 0px auto;
  }
  .sexy_night {
    padding: 30px 0px !important;
    width: 90vw;
    margin: 0px auto;
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
  }
  .covid_rules {
    border: 1px solid gold;
  }
  .covid_rules_box {
    width: 60vw;
    margin: 0px auto;
  }
  @media (max-width: 720px) {
    .covid_rules_box {
      width: 95vw;
    }
    .sexy_night {
      grid-template-columns: 1fr !important;
    }
    .sexy_night_right {
      margin-top: 40px;
    }
  }
  .img_one_image {
    text-align: center;
  }

  .img_container {
    text-align: center;
  }

  .review_heading {
    text-align: center;
    text-transform: uppercase;
    margin-top: 40px;
  }
  .img_gal_one {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 20px;
  }
  .img_gal_one_image {
    margin: 1%;
    /* box-shadow: 0 0 4px 4px #ecd113cc; */
  }
  @media only screen and (max-width: 1100px) {
    .img_gal_one {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  .img_gal_one_image {
    border-radius: 5px;
  }

  .img_one {
    text-align: center;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 800px) {
    article.postcard.blue {
      height: 300px;
    }
  }
  .home_nwe_sec_heading {
    font-size: 1.8em;
    text-align: left;
    color: var(--headings);
    font-weight: bold;
  }
  .home_new_sec_right p {
    text-align: left;
  }
  .home_new_sec {
    width: 90vw;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 25% 75%;
    text-align: center;
    margin-bottom: 50px;
  }
  .home_top {
    width: 90vw;
    margin: 0px auto;
    text-align: center;
  }
  .home_top > h1 {
    color: var(--headings);
    font-size: 1.8rem;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .home_top > h2 {
    color: var(--headings);
    font-size: 1.8rem;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .gallery_img_heading {
    text-align: center;
    background-color: var(--nav-bg);
    padding: 0px 0px;
  }
  .gallery_img_heading h2 {
    font-size: 1.5rem;
    padding: 10px 0px;
    color: var(--headings);
  }
  .banner_img {
    border-bottom: 2px solid gold;
  }
  .img_gal_one_image {
    border-left: 1px solid gold;
  }
  .paras_box > p {
    text-align: left;
  }
  @media only screen and (max-width: 1100px) {
    .home_new_sec {
      width: 90vw;
      margin: 0px auto;
      display: grid;
      grid-template-columns: 1fr !important;
      margin-top: 50px;
    }
  }

  @media only screen and (max-width: 425px) {
    .desktop_banner {
      display: none;
    }
    .mobile_banner {
      display: block;
      /* height: 414px; */
      width: 100%;
    }
    .banner_mobile_img {
      border-bottom: 2px solid gold;
      /* height: 414px; */
      width: 100%;
    }
  }
  @media only screen and (min-width: 425px) {
    .desktop_banner {
      display: block;
      /* height: 458px; */
      width: 100%;
    }
    .banner_desktop_img {
      border-bottom: 2px solid gold;
      /* height: 458px; */
      width: 100%;
    }
    .mobile_banner {
      display: none;
    }
  }
  .my_top_div {
    width: 90vw;
    margin: 0px auto;
  }
`
