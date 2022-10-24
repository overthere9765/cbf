import React from "react"
import { log, logwarn, logerror } from "./std"
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Header from './Header';
import Home from './Home';
import './App.scss';
import Button from "./com/Button";

import Signin from "./Signin";
import { connectWeb3 } from "./store/web3Store";

import 'react-toastify/dist/ReactToastify.css';
import AirdropToken from "./com/AirdropToken";


class App extends React.Component {
  state = {
  }
  render() {
    return (
      <>
        <Header />
        <Home />

        {/* about */}
        <section id="about" className="about about--wave section--gradient">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <h2 className="section__title section__title--white section__title--margin">About Brazil Fan Club</h2>
              </div>
              {/* end section title */}

              <div className="col-12">
                {/* about text */}
                <div className="about__text">
                  <p>The <b>Brazilian Football Confederation</b> is the governing body of football in Brazil. It was founded on Monday, 8 June 1914, as Federação Brasileira de Sports, and renamed Confederação Brasileira de Desportos in 1916. The football confederation, as known today, separated from other sports associations on 24 September 1979. Between 1914 and 1979 it was the governing body, or at least the international reference, for other olympic sports, such as tennis (until the CBT was founded in 1955), athletics (until the CBAt was founded in 1977), handball (until 1979), swimming and waterpolo. It currently has the most wins on FIFA world cups, with a total of five.</p>
                  <p>The CBF has its headquarters in Rio de Janeiro. The confederation owns a training center, named Granja Comary, located in Teresópolis.</p>
                  <p>It was announced on 29 September 2007, that the CBF would launch a women's league and cup competition in October 2007 following pressure from FIFA president Sepp Blatter during the 2007 FIFA Women's World Cup in China.</p>
                </div>
                {/* end about text */}
              </div>
            </div>
          </div>
        </section>
        {/* end about */}

        {/* get started */}
        <section id="getstarted" className="section section--pt0">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <h2 className="section__title">How to Get Started</h2>
                <span className="section__tagline">CBF Token</span>
              </div>
              {/* end section title */}

              <div className="col-12 col-md-4">
                {/* box (style 4) */}
                <div className="box4">
                  <span className="box4__number">01</span>
                  <h3 className="box4__title">Download Metamask</h3>
                  <p className="box4__text">
                    <a href="https://metamask.io/" target="_blank">Metamask</a> is most popular cryptocurrency wallet in the world.
                    Download Metamask on <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">Chrome Store</a>, <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">App Store</a> or <a href="https://play.google.com/store/apps/details?id=io.metamask&hl=en&gl=US" target="_blank">Play Store</a><br />
                    Create your wallet and deposit USD
                  </p>
                </div>
                {/* end box (style 4) */}
              </div>

              <div className="col-12 col-md-4">
                {/* box (style 4) */}
                <div className="box4">
                  <span className="box4__number">02</span>
                  <h3 className="box4__title">Connect your wallet</h3>
                  <p className="box4__text">
                    Press Metamask button in website to connect wallet with this website. On your phone, open Metamask and open browser in Metamask, access website and press Metamask button
                  </p>
                </div>
                {/* end box (style 4) */}
              </div>

              <div className="col-12 col-md-4">
                {/* box (style 4) */}
                <div className="box4">
                  <span className="box4__number">03</span>
                  <h3 className="box4__title">Receive Airdrop</h3>
                  <p className="box4__text">
                    After connect wallet, please choose your blockchain network and your USD. <br />
                    Press <b>Receive</b> <br />
                    → <b>Confirm</b>
                  </p>
                </div>
                {/* end box (style 4) */}
              </div>
            </div><p></p>
            <div className="row justify-content-center"><Button href="#home">Receive Airdrop ↑</Button></div>
          </div>
        </section>
        {/* end get started */}

        {/* features */}
        <section id="features" className="section section--grey">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <h2 className="section__title">Brazil Fan Token</h2>
                <span className="section__tagline">Why should I own $CBF?</span>
              </div>
              {/* end section title */}

              <div className="col-12 col-sm-6 col-lg-4">
                {/* box (style 2) */}
                <div className="box2">
                  <span className="box2__icon">
                    <img src="img/shareb.svg" />
                  </span>
                  <h3 className="box2__title">Own a share of influence of your team</h3>
                  <p className="box2__text"></p>
                </div>
                {/* end box (style 2) */}
              </div>

              <div className="col-12 col-sm-6 col-lg-4">
                {/* box (style 2) */}
                <div className="box2">
                  <span className="box2__icon">
                    <img src="img/slide.svg" />
                  </span>
                  <h3 className="box2__title">Get in the driving seat and make the right decisions</h3>
                  <p className="box2__text"> </p>
                </div>
                {/* end box (style 2) */}
              </div>

              <div className="col-12 col-sm-6 col-lg-4">
                {/* box (style 2) */}
                <div className="box2">
                  <span className="box2__icon">
                    <img src="img/chart.svg" />
                  </span>
                  <h3 className="box2__title">Turn your dreams into reality with fantastic rewards</h3>
                  <p className="box2__text"> </p>
                </div>
                {/* end box (style 2) */}
              </div>

              <div className="col-12 col-sm-6 col-lg-4">
                {/* box (style 2) */}
                <div className="box2">
                  <span className="box2__icon">
                    <img src="img/cup.svg" />
                  </span>
                  <h3 className="box2__title">Join a new era of super fans</h3>
                  <p className="box2__text"> </p>
                </div>
                {/* end box (style 2) */}
              </div>

              <div className="col-12 col-sm-6 col-lg-4">
                {/* box (style 2) */}
                <div className="box2">
                  <span className="box2__icon">
                    <img src="img/chartpie.svg" />
                  </span>
                  <h3 className="box2__title">Join to win VIP rewards</h3>
                  <p className="box2__text"> </p>
                </div>
                {/* end box (style 2) */}
              </div>

              <div className="col-12 col-sm-6 col-lg-4">
                {/* box (style 2) */}
                <div className="box2">
                  <span className="box2__icon">
                    <img src="img/robo.svg" />
                  </span>
                  <h3 className="box2__title">Meet your Idol</h3>
                  <p className="box2__text">Various versions have evolved over the years, sometimes by accident, sometimes
                    on purpose.</p>
                </div>
                {/* end box (style 2) */}
              </div>
            </div>
          </div>
        </section>
        {/* end features */}

        {/* roadmap */}
        <section className="section">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <h2 className="section__title">Roadmap</h2>
                <span className="section__tagline">CBF project path</span>
              </div>
              {/* end section title */}

              {/* roadmap */}
              <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 col-xl-12 offset-xl-0">
                <ul className="roadmap">
                  <li className="active">
                    <span>Q1 2022</span>
                    <p>Project start-up. Product conception. System architecture development.</p>
                  </li>
                  <li className="active">
                    <span>Q2 2022</span>
                    <p>Connection to stock exchanges. Development of trading platform and the system’s core elements.
                    </p>
                  </li>
                  <li className="active">
                    <span>Q3 2022</span>
                    <p>Test environment launch for algorithm creators. Development of the first algorithms.</p>
                  </li>
                  <li className="active">
                    <span>Q4 2022</span>
                    <p>Tradingene public product launch for algorithm creators. Broadening of financial instruments for
                      algorithm creation. </p>
                  </li>
                  <li>
                    <span>Q1 2023</span>
                    <p>Launch app NFT, Token fan, Metaverse...</p>
                  </li>
                </ul>
              </div>
              {/* end roadmap */}

              {/* section button */}
              <div className="col-12">
                <a href="#" className="section__btn"><span>Receive now</span></a>
              </div>
              {/* end section button */}
            </div>
          </div>
        </section>
        {/* end roadmap */}

        {/* video */}
        <section className="section section--bg video" data-bg="img/section-bg/section-bg2.jpg">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <a href="https://www.youtube.com/watch?v=yavo7EU2Qjc" className="video__btn">
                  <img src="img/play.svg" style={{ "width": "36px" }} />
                </a>
                <h4 className="video__title">CBF winners</h4>
                <p className="video__text"> </p>
              </div>
            </div>
          </div>
        </section>
        {/* end video */}

        {/* safety */}
        <section id="safety" className="section">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <h2 className="section__title section__title--underline">It is Safe</h2>
              </div>
              {/* end section title */}

              <div className="col-12 col-sm-8 offset-sm-2 col-md-4 offset-md-0">
                {/* box (style 3) */}
                <div className="box3 box3--line">
                  <div className="box3__icon">
                    <img src="img/shield.svg" />
                  </div>
                  <h3 className="box3__title">Security</h3>
                  <p className="box3__text"></p>
                </div>
                {/* end box (style 3) */}
              </div>

              <div className="col-12 col-sm-8 offset-sm-2 col-md-4 offset-md-0">
                {/* box (style 3) */}
                <div className="box3 box3--line">
                  <div className="box3__icon">
                    <img src="img/lock.svg" />
                  </div>
                  <h3 className="box3__title">License</h3>
                  <p className="box3__text"></p>
                </div>
                {/* end box (style 3) */}
              </div>

              <div className="col-12 col-sm-8 offset-sm-2 col-md-4 offset-md-0">
                {/* box (style 3) */}
                <div className="box3">
                  <div className="box3__icon"><img src="img/books.svg" />
                  </div>
                  <h3 className="box3__title">Result</h3>
                  <p className="box3__text"></p>
                </div>
                {/* end box (style 3) */}
              </div>
            </div>
          </div>
        </section>
        {/* end safety */}

        {/* counter */}
        <div className="section section--bg counter" data-bg="img/section-bg/section-bg3.jpg">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="counter__box">
                  <span className="counter__value">5.7</span>
                  <span className="counter__title">mln transactions</span>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className="counter__box">
                  <span className="counter__value">70</span>
                  <span className="counter__title">online consultants</span>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className="counter__box">
                  <span className="counter__value">23</span>
                  <span className="counter__title">countries served</span>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
                <div className="counter__box">
                  <span className="counter__value">2.5</span>
                  <span className="counter__title">mln wallets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end counter */}

        {/* advisors */}
        <section id="advisors" className="section">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <h2 className="section__title">Advisors</h2>
                <p className="section__text">We are proud of our great team. He is one of the most motivated and is always
                  ready and willing to help out where needed.</p>
              </div>
              {/* end section title */}
            </div>

            <div className="row">
              {/* member */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="team">
                  <div className="team__title">
                    <h3>Santiago Robinson</h3>
                    <span>GP & LP Investor</span>
                  </div>
                  <img src="img/team/member.jpg" alt="" className="team__img" />
                  <ul className="team__social">
                    <li>
                      <a href="#" className="ld">
                        <img src="img/ld.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fb">
                        <img src="img/fb.svg" style={{ "height": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/tw.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/ig.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* end member */}

              {/* member */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="team">
                  <div className="team__title">
                    <h3>Tony Young</h3>
                    <span>Business developer</span>
                  </div>
                  <img src="img/team/member4.jpg" alt="" className="team__img" />
                  <ul className="team__social">
                    <li>
                      <a href="#" className="ld">
                        <img src="img/ld.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fb">
                        <img src="img/fb.svg" style={{ "height": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/tw.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/ig.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* end member */}

              {/* member */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="team">
                  <div className="team__title">
                    <h3>Marsha Lee</h3>
                    <span>Community manager</span>
                  </div>
                  <img src="img/team/member5.jpg" alt="" className="team__img" />
                  <ul className="team__social">
                    <li>
                      <a href="#" className="ld">
                        <img src="img/ld.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fb">
                        <img src="img/fb.svg" style={{ "height": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/tw.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/ig.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* end member */}
            </div>
          </div>
        </section>
        {/* end advisors */}

        {/* team */}
        <section className="section section--grey">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <h2 className="section__title">Our Team</h2>
                <p className="section__text">We are proud of our great team. He is one of the most motivated and is always
                  ready and willing to help out where needed.</p>
              </div>
              {/* end section title */}
            </div>

            <div className="row">
              {/* member */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="team">
                  <div className="team__title">
                    <h3>Roland Samuel</h3>
                    <span>CEO</span>
                  </div>
                  <img src="img/team/member6.jpg" alt="" className="team__img" />
                  <ul className="team__social">
                    <li>
                      <a href="#" className="ld">
                        <img src="img/ld.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fb">
                        <img src="img/fb.svg" style={{ "height": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/tw.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/ig.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* end member */}

              {/* member */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="team">
                  <div className="team__title">
                    <h3>David Drake</h3>
                    <span>Head of marketing</span>
                  </div>
                  <img src="img/team/member3.jpg" alt="" className="team__img" />
                  <ul className="team__social">
                    <li>
                      <a href="#" className="ld">
                        <img src="img/ld.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fb">
                        <img src="img/fb.svg" style={{ "height": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/tw.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/ig.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* end member */}

              {/* member */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="team">
                  <div className="team__title">
                    <h3>Sandra Pen</h3>
                    <span>App developer</span>
                  </div>
                  <img src="img/team/member7.jpg" alt="" className="team__img" />
                  <ul className="team__social">
                    <li>
                      <a href="#" className="ld">
                        <img src="img/ld.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fb">
                        <img src="img/fb.svg" style={{ "height": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/tw.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/ig.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* end member */}

              {/* member */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="team">
                  <div className="team__title">
                    <h3>John Smith</h3>
                    <span>Manager</span>
                  </div>
                  <img src="img/team/member2.jpg" alt="" className="team__img" />
                  <ul className="team__social">
                    <li>
                      <a href="#" className="ld">
                        <img src="img/ld.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fb">
                        <img src="img/fb.svg" style={{ "height": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/tw.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tw">
                        <img src="img/ig.svg" style={{ "width": "33px" }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* end member */}
            </div>
          </div>
        </section>
        {/* end team */}

        {/* faq */}
        <section className="section section--grey">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <h2 className="section__title">FAQ</h2>
                <p className="section__text">Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others.
                  If you have any other questions, please get in touch.</p>
              </div>
              {/* end section title */}
            </div>

            <div className="accordion" id="accordion">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="faq">
                    <div className="faq__btn" id="heading1">
                      <button type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false"
                        aria-controls="collapse1">
                        <span>When will CBF be listed on exchanges?</span>
                        <img src="img/plus.svg" style={{ "width": "33px" }} />
                      </button>
                    </div>

                    <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
                      <p className="faq__text">It is expected that the project will go listing at the end of 2022 with the support of large investment funds.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="faq">
                    <div className="faq__btn" id="heading2">
                      <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse2"
                        aria-expanded="false" aria-controls="collapse2">
                        <span>Can I make payments directly from an exchange?</span>
                        <img src="img/plus.svg" style={{ "width": "33px" }} />
                      </button>
                    </div>

                    <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
                      <p className="faq__text">Just simply deposit assets into the exchange and trade, the expected time is at the end of the year.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="faq">
                    <div className="faq__btn" id="heading3">
                      <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse3"
                        aria-expanded="false" aria-controls="collapse3">
                        <span>What cryptocurrencies can I use to purchase?</span>
                        <img src="img/plus.svg" style={{ "width": "33px" }} />
                      </button>
                    </div>

                    <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordion">
                      <p className="faq__text">Popular asset classes like USDC, USDT, BUSD, BTC, ETH, BNB,...</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="faq">
                    <div className="faq__btn" id="heading4">
                      <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse4"
                        aria-expanded="false" aria-controls="collapse4">
                        <span>How can I create a crypto-wallet?</span>
                        <img src="img/plus.svg" style={{ "width": "33px" }} />
                      </button>
                    </div>

                    <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
                      <p className="faq__text">
                        Following 3 step <a href="#getstarted"><b>here</b></a>, easy .</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="faq">
                    <div className="faq__btn" id="heading5">
                      <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse5"
                        aria-expanded="false" aria-controls="collapse5">
                        <span>How do I benefit from the CBF Token?</span>
                        <img src="img/plus.svg" style={{ "width": "33px" }} />
                      </button>
                    </div>

                    <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordion">
                      <p className="faq__text">With the backing of large investment funds, a talented development team, and the popularity of huge fans, will help the token grow well and sustainably.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="faq">
                    <div className="faq__btn" id="heading6">
                      <button className="collapsed" type="button" data-toggle="collapse" data-target="#collapse6"
                        aria-expanded="false" aria-controls="collapse6">
                        <span>How can I participate in the First Token sale?</span>
                        <img src="img/plus.svg" style={{ "width": "33px" }} />
                      </button>
                    </div>

                    <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
                      <p className="faq__text">First you need to register to receive the airdrop, then we will notify you when the launch pad date comes, you will have the first priority to buy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end faq */}

        {/* get in touch */}
        <section id="contacts" className="section">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <h2 className="section__title">Get in Touch</h2>
                <p className="section__text">We are always open and we welcome and questions you have for our team. If you
                  wish to get in touch, please fill out the form below.</p>
              </div>
              {/* end section title */}

              <div className="col-12 col-md-6">
                {/* contacts */}
                <div className="contacts">
                  <ul className="contacts__list">
                    <li>
                      <span>
                        <img src="img/phone.svg" style={{ "width": "33px" }} />
                      </span>
                      <p>Rua 14 de Julho, 1274 - Centro, <br />Campo Grande, Brazil</p>
                    </li>
                    <li>
                      <span>
                        <img src="img/clock.svg" style={{ "width": "33px" }} />
                      </span>
                      <p>Mon - Fri: <br />08:00 - 19:00</p>
                    </li>
                    <li>
                      <span>
                        <img src="img/mail.svg" style={{ "width": "33px" }} />
                      </span>
                      <a href={"mailto:support@" + document.location.host}>{"support@" + document.location.host}</a>
                    </li>
                  </ul>
                </div>
                {/* end contacts */}
              </div>

              <div className="col-12 col-md-6">
                {/* form */}
                <form action="#" className="form form--contacts">
                  <input type="text" className="form__input" placeholder="Name" />
                  <input type="text" className="form__input" placeholder="Email" />
                  <textarea className="form__textarea" placeholder="Message"></textarea>
                  <button className="form__btn" type="button"><span>Send</span></button>
                </form>
                {/* end form */}
              </div>
            </div>
          </div>
        </section>
        {/* end get in touch */}

        {/* partners */}
        <div className="partners section--grey">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* partners slider */}
                <div className="owl-carousel partners__slider">
                  {/* slider item */}
                  <a href="#">
                    <img src="img/partners/fantom.png" alt="" />
                  </a>
                  {/* end slider item */}

                  {/* slider item */}
                  <a href="#">
                    <img src="img/partners/ethereum-logo-landscape-black.png" alt="" />
                  </a>
                  {/* end slider item */}

                  {/* slider item */}
                  <a href="#">
                    <img src="img/partners/chilli.png" alt="" />
                  </a>
                  {/* end slider item */}

                  {/* slider item */}
                  <a href="#">
                    <img src="img/partners/Binancecompanylogo.png" alt="" />
                  </a>
                  {/* end slider item */}

                  {/* slider item */}
                  <a href="#">
                    <img src="img/partners/avax.png" alt="" />
                  </a>
                  {/* end slider item */}
                </div>
                {/* end partners slider */}
              </div>
            </div>
          </div>
        </div>
        {/* end partners */}

        {/* footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <h2 className="section__title section__title--footer section__title--white">Subscribe for Our Newsletter</h2>
              </div>
              {/* end section title */}

              <div className="col-12">
                <form action="#" className="subscribe">
                  <input type="text" className="subscribe__input" placeholder="Enter your e-mail address" />
                  <button type="button" className="subscribe__btn"><img src="img/subcribe.svg" style={{ "width": "33px" }} /></button>
                </form>
              </div>

              <div className="col-12">
                {/* social list */}
                <ul className="footer__social">
                  <li>
                    <a href="https://www.linkedin.com/company/cbf-futebol" className="in" target="_blank">
                      <img src="img/ld.svg" style={{ "width": "33px" }} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/CBF" className="fb" target="_blank">
                      <img src="img/fb.svg" style={{ "height": "33px" }} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/cbf_futebol/" className="inst" target="_blank">
                      <img src="img/ig.svg" style={{ "width": "33px" }} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/CBF_Futebol" className="tw" target="_blank">
                      <img src="img/tw.svg" style={{ "width": "33px" }} />
                    </a>
                  </li>
                </ul>
                {/* end social list */}
              </div>

              <div className="col-12">
                {/* copyright */}
                <small className="footer__copyright">© CBF, 2022 .</small>
                {/* end copyright */}
              </div>
            </div>
          </div>
        </footer>
        {/* end footer */}

        {/* article */}
        <div id="article" className="zoom-anim-dialog mfp-hide modal modal--article">
          <button className="modal__close" type="button"><img src="img/x.svg" /></button>

          <div className="modal__article">
            <h1>Keep Reading (H1)</h1>

            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will <b>uncover many</b> web sites still in their infancy. Various versions have
              evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

            <h2>Some title(H2)</h2>

            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle of text.</p>

            <h3>Some title(H3)</h3>

            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
              the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

            <img src="img/blog/1.jpg" alt="" />

            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
              source.</p>

            <h4>Some title(H4)</h4>

            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
              the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

            <blockquote>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true generator on the Internet.</blockquote>

            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <h5>Some title(H5)</h5>

            <h6>Some title(H6)</h6>

            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
              repetition, injected humour, or non-characteristic words etc.</p>

            <ul>
              <li>Theme Forest</li>
              <li>Graphic River</li>
              <li>Audio Jungle</li>
              <li>3D Ocean</li>
              <li>Code Canayon</li>
            </ul>

            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle of text. <a href="#">Link</a> the Lorem Ipsum generators on the Internet tend to repeat predefined
              chunks as necessary, making this the first true generator on the Internet.</p>
          </div>

          <div className="share">
            <a href="#" className="share__link share__link--fb"><img src="img/share.svg" style={{ "width": "33px" }} /></a>
            <a href="#" className="share__link share__link--tw"><img src="img/tweet.svg" style={{ "width": "33px" }} /></a>
          </div>
        </div>
        {/* end article */}

        {/* privacy */}
        <div id="privacy" className="zoom-anim-dialog mfp-hide modal modal--article">
          <button className="modal__close" type="button"></button>

          <div className="modal__article">
            <h1>Privacy policy</h1>

            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

            <h4>Determination of personal information of users</h4>

            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

            <ol>
              <li>If you are going to use a passage of Lorem Ipsum:
                <ol>
                  <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet.</li>
                  <li>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                    always free from repetition, injected humour, or non-characteristic words etc.</li>
                </ol>
              </li>
              <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable.</li>
              <li>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</li>
            </ol>

            <h4>Reasons for collecting and processing user personal information</h4>

            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle of text.</p>

            <ol>
              <li>It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters.</li>
              <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet:
                <ol>
                  <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged;</li>
                  <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages;</li>
                  <li>Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like);</li>
                  <li>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text;</li>
                </ol>
              </li>
            </ol>

            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
              the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
              going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
              middle of text. <a href="#">Link</a> the Lorem Ipsum generators on the Internet tend to repeat predefined
              chunks as necessary, making this the first true generator on the Internet.</p>
          </div>
        </div>
        {/* end privacy */}

        <Signin />

        {/* sign up */}
        <div id="signup" className="zoom-anim-dialog mfp-hide modal">
          <button className="modal__close" type="button"><img src="img/share.svg" style={{ "width": "33px" }} /></button>

          <h6 className="modal__title">Sign Up</h6>

          <form action="#" className="form form--modal">
            <input type="text" className="form__input" placeholder="Name" />
            <input type="text" className="form__input" placeholder="Email" />
            <input type="password" className="form__input" placeholder="Password" />
            <div className="form__checkbox">
              <input id="privacy1" name="privacy1" type="checkbox" onChange={() => { }} checked="checked" />
              <label htmlFor="privacy1">I agree to the <a href="#privacy" className="modal-article">Privacy Policy</a></label>
            </div>
            <button className="form__btn" type="button"><span>Send</span></button>
          </form>

          <span className="modal__text">Already have an account? <a href="#signin" className="modal-btn">Sign in!</a></span>
        </div>
        {/* end sign up  */}

        {/* forgot */}
        <div id="forgot" className="zoom-anim-dialog mfp-hide modal">
          <button className="modal__close" type="button"><img src="img/x.svg" /></button>

          <h6 className="modal__title">Restore password</h6>

          <form action="#" className="form form--modal">
            <input type="text" className="form__input" placeholder="Email" />
            <div className="form__checkbox">
              <input id="privacy2" name="privacy2" type="checkbox" onChange={() => { }} checked="checked" />
              <label htmlFor="privacy2">I agree to the <a href="#privacy" className="modal-article">Privacy Policy</a></label>
            </div>
            <button className="form__btn" type="button"><span>Send</span></button>
          </form>

          <span className="modal__text">We will send a password to your Email</span>
        </div>
        {/* end forgot */}

        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  web3: state.web3Store.web3,
  accounts: state.web3Store.accounts,
  // contract: state.Contract.contract,
  // owner: state.Contract.owner,
});

export default connect(mapStateToProps, {
  connectWeb3: connectWeb3,
  // connectContract: connectContract,
})(App);