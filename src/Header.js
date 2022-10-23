import React from "react"
import { log, logwarn, logerror } from "./std"
import Wallet from "./com/Wallet";

class Header extends React.Component {
    render() {
        return (
            <><header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__content">
                                <button className="header__btn" type="button">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                                <a data-scroll href="#home" className="header__logo">
                                    <img className="header__logo-white" src="img/logo.png" alt="Brazil Fan Club" />
                                    <img className="header__logo-dark" src="img/logo.png" alt="Brazil Fan Club" />
                                </a>

                                <span className="header__tagline">Brazil<br />Fan Club</span>

                                <ul className="header__nav">
                                    <li className="dropdown header__dropdown">
                                        <a data-scroll href="#home">Home
                                        </a>
                                    </li>
                                    <li>
                                        <a data-scroll href="#about">About</a>
                                    </li>
                                    <li>
                                        <a data-scroll href="#getstarted">Get Started</a>
                                    </li>
                                    <li>
                                        <a data-scroll href="#features">Features</a>
                                    </li>
                                    <li>
                                        <a data-scroll href="#safety">Safety</a>
                                    </li>
                                    <li>
                                        <a data-scroll href="#advisors">Advisors</a>
                                    </li>
                                </ul>
                                <Wallet />
                                {/* <a href="#signin" className="header__signin modal-btn"><span>Sign In</span></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header></>
        )
    }
}

export default Header;