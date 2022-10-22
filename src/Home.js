import React from "react"
import AirdropToken from "./com/AirdropToken";

import "./Home.scss"

class Home extends React.Component {
    render() {
        return (
            <section id="home" className="home section--bg" data-bg="img/home/maxresdefault.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col home__content home__content--left">
                            <h1 className="home__title">Brazil Fantoken ($CBF)</h1>
                            <p className="home__text">($CBF) Secure & Easy Way To Trade, earn official products, and more.</p>

                            {/* <div className="home__btns">
                                    <a data-scroll href="#getstarted" className="home__btn home__btn--white"><span>Get started</span></a>
                                    <a href="#" className="home__btn"><span>Whitepaper</span></a>
                                </div> */}
                        </div>
                        <AirdropToken />
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;