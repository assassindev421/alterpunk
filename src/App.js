import logo from './logo.svg';
import './App.css';
// import Piechart from './components/piechart'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import styled from 'styled-components';


const Slidestyled = styled.div`{
  .slick-slider {
    width:70%;
    margin: 0 auto;
    margin-top:50px;
  }
  .slick-slide img {
    width:30%;
    margin-left:35%;
  }
  .slick-dots li button:before {
    font-size:22px;
  }
  .slick-dots {
    bottom : unset !important
  }
  @media(max-width:768px) {
    .slick-slide img {
      width: 50%;
      margin-left: 25%;
    }
  }
}`

const App = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    duration: 1000
  };
  return (
    <>

      <div className="wrapper" id='banner'>
        <Header />
        <div className='wrapper-content'>
          <div className='banner-image' >
            <img src='assets/images/banner.png' />
          </div>
          <div className='banner-social'>
            <div className='banner-top'>
              <a href='https://twitter.com/AlterEgoPunks_' target='_blank' ><img src='assets/images/twitter.png' className='social-icon social-twitter' /></a>
              <a href='https://t.me/AlterEgoPunks' target='_blank'><img src='assets/images/telegram.png' className='social-icon social-telegram' /></a>
              <a><img src='assets/images/toz.png' className='toz' /></a>
              <a><img src='assets/images/NFTrede.png' className='nftrede' /></a>
              <a href='https://instagram.com/alteregopunks?utm_medium=copy_link ' target='_blank' ><img src='assets/images/instagram.png' className='social-icon social-instagram' /></a>
              <a href='https://discord.gg/Fqu2FVWYYM ' target='_blank' ><img src='assets/images/discord.png' className='social-icon social-discord' /></a>
              <a href='https://m.youtube.com/channel/UChbceQeK7xpyM8cpjR2nIsQ ' target='_blank' ><img src='assets/images/youtube.png' className='social-icon social-youtube' /></a>
            </div>
            <div className='horizontal'></div>
            <div className='banner-bottom'>
              <a href='https://alteregopunks.com/' target='_blank'><img src='assets/images/welcome.png' className='welcome' /></a>
            </div>
          </div>
        </div>
      </div>
      <section className="lore" id="story">
        <div className="container">
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
            <h2 style={{ textAlign: 'center' }}>Story </h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
            <p className="f-p">
              The earth orbited into a wormhole and traveled back in time.
              The year we in is 1500 and only 20,000 beins survived this event.
              16,000 Punks (8,000 Hunters and 8,000 Huntresses) have now turned into
              huntmans by default because their revisting a time in their past lives.
              2,000 zombies emerged from the dead. 2,000 vampires that been around since before
              1500 B.C have also survived. the population is broken down into 5 crews containing 4,000 hunters each, 2,000 zombies and 2,000 vampires.
            </p>
          </ScrollAnimation>

        </div>
      </section>
      <section className="about" id="about">
        <h2 style={{ textAlign: 'center' }}>About</h2>
        <div className="container">
          <div className="about_wrapper">
            <div className='about-gif'>
              <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
                <img src='assets/images/about.gif' />
              </ScrollAnimation>
            </div>
            <div className="about_wrapper--text">
              <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
                <p>The Alter Ego Hunters is a collection with a total supply of 10,000
                  NFTs integrated with the Avalanche blockchain. The collection consist of
                  16,000 Hu-Hunters, 2,000 Zombie Hunters & 2,000 Vampires.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        {/* <img src="img/about-blick.png" alt="" className="about-decor-right " /> */}
      </section>
      <div className="roadmap-section" id='roadmap'>
        <div className="container">
          <div className="roadmap-control">
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
              <h2 className='roadmap-title'>Roadmap</h2>
            </ScrollAnimation>
            <div className="timeline">
              <div className="vertical-timeline">
                <div id="" className="vertical-timeline-element">
                  <div className="vertical"></div>
                  <span className="vertical-timeline-element-icon bounce-in">
                  </span>
                  <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} duration={1}>
                    <div className="vertical-timeline-element-content bounce-in">
                      <h3 className="vertical-timeline-element-title">
                        Q1
                      </h3>
                      <p className='description'>CREATE THE PROJECT'S CONCEPT</p>
                      <p className='description'>CREATE ART</p>
                      <p className='description'>CREATE SOCIAL MEDIA ACCOUNTS</p>
                      <p className='description'>BUILD THE COMMUNITY</p>
                      <p className='description'>PUBLIC SALE (LIST NFT'S ON NFTRADE)</p>
                      <p className='description'>COMMUNITY GIVEAWAYS</p>
                    </div>
                  </ScrollAnimation>
                </div>
                <div id="" className="vertical-timeline-element">
                  <div className="vertical"></div>
                  <span className="vertical-timeline-element-icon bounce-in">
                  </span>
                  <ScrollAnimation animateIn='fadeInRight' animateOnce={true} duration={1}>
                    <div className="vertical-timeline-element-content bounce-in">
                      <h3 className="vertical-timeline-element-title">
                        Q2
                      </h3>
                      <p className='description'>PROFITS FROM SALES WILL BE STAKED IN A YIELD FARM</p>
                      <p className='description'>LISTING ON SECONDARY MARKETS</p>
                      <p className='description'>EVEN MORE GIVEAWAYS</p>
                      <p className='description'>CONTINUED MARKETING</p>
                      <p className='description'>EGOWORLD DEV BEGINS (HUNTERS, $EGO TOKEN, P2E GAME, INDEPENDENT MARKET)</p>
                    </div>
                  </ScrollAnimation>
                </div>
                <div id="" className="vertical-timeline-element">
                  <div className="vertical"></div>
                  <span className="vertical-timeline-element-icon bounce-in">
                  </span>
                  <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} duration={1}>

                    <div className="vertical-timeline-element-content bounce-in">
                      <h3 className="vertical-timeline-element-title">
                        Q3
                      </h3>
                      <p className='description'>EGOWORLD LAUNCH!</p>
                      <p className='description'>YES, MORE GIVEAWAYS</p>
                      <p className='description'>AIRDROP ALTER EGO HUNTERS TO OG PUNKS HOLDERS</p>
                      <p className='description'>PURCHASE FARM LAND IN FL/GA</p>
                      <p className='description'>ACQUIRE FARM TOOLS/EQUIPMENT</p>
                      <p className='description'>IRL FARM DEVELOPMENT/PLANNING</p>
                    </div>
                  </ScrollAnimation>

                </div>
                <div id="" className="vertical-timeline-element">
                  <div className="vertical"></div>
                  <span className="vertical-timeline-element-icon bounce-in">
                  </span>
                  <ScrollAnimation animateIn='fadeInRight' animateOnce={true} duration={1}>

                    <div className="vertical-timeline-element-content bounce-in">
                      <h3 className="vertical-timeline-element-title">
                        Q4
                      </h3>
                      <p className='description'>LAUNCH LADY PUNKS/HUNTRESSES</p>
                      <p className='description'>ORGANIZE FOOD DRIVES FOR LOCAL HOMELESS SHELTERS</p>
                      <p className='description'> OG PUNKS HOLDERS WILL BE SELECTED FOR AN IRL FARM VISIT</p>
                      <p className='description'>FURTHER STAKING OF PROFITS TO FUND FUTURE GIVEAWAYS</p>
                      <p className='description'>TBD</p>
                    </div>
                  </ScrollAnimation>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tokens-section" id='tokens'>
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
          <h2 className='tokens-title'>Tokenomics</h2>
        </ScrollAnimation>
        <div className="tokens-container">
          <div className="tokens-control">
            {/* <Piechart /> */}
            <div className='tokens-left'>
              <p>Token Symbol : $EGO</p>
              <p>Total Supply : 55,550,000</p>
              <p>Price : $0.01 USD</p>
            </div>
            <div className='tokens-right'>
              <div className='tokens-percent'>
                <h1>1%</h1>
                <p>Private Sale</p>
              </div>
              <div className='tokens-percent'>
                <h1>10%</h1>
                <p>Team </p>
              </div>
              <div className='tokens-percent'>
                <h1>2%</h1>
                <p>Liquidity</p>
              </div>
              <div className='tokens-percent'>
                <h1>72.75%</h1>
                <p>Farm</p>
              </div>
              <div className='tokens-percent'>
                <h1>15%</h1>
                <p> Staking Events</p>
              </div>
              <div className='tokens-percent'>
                <h1>0.25%</h1>
                <p> Public Events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='character-section' id='Characteristics '>
        <h2 className='character-title'>Characteristics </h2>
        <div className='container'>
          <div className='character-control'>
            <div className='character-image'>
              <img src='assets/images/banner.png' />
            </div>
            <div className='character-context'>
              <p>The Alter Ego Punks will have 5 different crews that are determined
                by the background color of the NFT; there are 200 members in each crew.
              </p>
              <p>Fire crew = Red Backgrounds</p>
              <p>Water crew = Blue backgrounds</p>
              <p>Earth crew = Green backgrounds</p>
              <p>Energy crew = Yellow backgrounds</p>
              <p>Air crew = White backgrounds</p>
            </div>
            {/* <Slidestyled>
              <Slider {...settings}>
                <div>
                  <img src='assets/images/t-1.png' />
                  <p className='character-name'>Fire Crew</p>
                </div>
                <div>
                  <img src='assets/images/t-2.png' />
                  <p className='character-name'>Water crew </p>
                </div>
                <div>
                  <img src='assets/images/t-3.png' />
                  <p className='character-name'>Earth crew </p>
                </div>
                <div>
                  <img src='assets/images/t-4.png' />
                  <p className='character-name'>Energy crew </p>
                </div>
                <div>
                  <img src='assets/images/t-3.png' />
                  <p className='character-name'>Air crew</p>
                </div>
              </Slider>
            </Slidestyled> */}
          </div>
        </div>
      </div>
      <section className="team" id="team">
        <div className="container">
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
            <h2>Team</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>

            <div className="team_wrapper">

              <div className="team_wrapper--item">
                <img src="assets/images/t-1.png" className="" alt="" />
                <div>
                  <div className="tw-item-info">
                    <h3>OWNER & FOUNDER </h3>
                    <p>ECHELON</p>
                  </div>
                </div>
              </div>
              <div className="team_wrapper--item">
                <img src="assets/images/t-2.png" alt="" className="" />
                <div>
                  <div className="tw-item-info">
                    <h3>ARTIST</h3>
                    <p>AMARJIT</p>
                  </div>
                </div>
              </div>
              <div className="team_wrapper--item">
                <img src="assets/images/t-3.png" className="" alt="" />
                <div>
                  <div className="tw-item-info">
                    <h3>Dev</h3>
                    <p>WINTER</p>
                  </div>
                </div>
              </div>
              <div className="team_wrapper--item">
                <img src="assets/images/t-4.png" className="" alt="" />
                <div>
                  <div className="tw-item-info">
                    <h3>Dev</h3>
                    <p>PROFESSOR</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="faq" id="faq">
        <div className="container">
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
            <h2>FAQ</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
            <div className="faq_wrapper">
              <div className="faq_wrapper--item">
                <h3>What are the Alter Ego Punks? </h3>
                <p>The Alter Ego Punks consists of 2 NFT collections on the Avalanche blockchain.
                  The 1st version has a total of 1,000 NFTs that will be listed on NFFTrade and
                  TofuNFT.
                  The 2nd version has a total of 10,000 NFTs that will be generated using a
                  blind minting generator.
                </p>
              </div>
              <div className="faq_wrapper--item">
                <h3>When is the release date? </h3>
                <p>The project went live on 1 Jan 2022! The creation of the Punks
                  began on 25 Dec 2021.
                </p>
              </div>
              <div className="faq_wrapper--item">
                <h3>How can I mint an Alter Ego Punk?  </h3>
                <p>Click the <b>MINT</b> button on the homepage and you will be redirected to
                  a page where you can choose to buy the v1 collection from NFTrade or TofuNFT.
                  For the 2nd collection, we will update our website to use the blind minting
                  generator.
                </p>
              </div>
              <div className="faq_wrapper--item">
                <h3>Why should I join this community? </h3>
                <p>The goal of the Alter Ego Punks community is to bring positivity, utility and benefits
                  to everyone. We want to help in any way possible and we are driven to do so by any
                  means necessary! We’re young and hungry.
                </p>
              </div>
              <div className="faq_wrapper--item">
                <h3>Will there be any AMAs? </h3>
                <p>Every Friday, a community AMA will be held in our Discord server.</p>
              </div>
            </div>
          </ScrollAnimation>
          {/* <div className="stone"><a href="https://discord.gg/95fu79Ak" target="_blank" className="btn">Join Discord</a></div> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
