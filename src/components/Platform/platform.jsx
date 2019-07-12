import React from "react";
import "./index.scss"
import { Facebook } from "./facebook";
import { Youtube } from "./youtube";
import { Instagram } from "./instagram";
import { Twitter } from "./twitter";




const DivStyle = {
    /* border: "3px solid #000", */
    backgroundImage: "url(.ben.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginRight: "150px",
   /*  background:"#ecbcbe" */
    width: "1050px",
    height: 640

}

const PlatformWrapper = () => {
    return (
        <div className="design" style={DivStyle}>
            <section className="platform-content">
                <div className="profile">
                    <img src="frame_anim.svg" alt="" />
                </div>
                <div className="text">
                    <small>Who am I?</small>
                    <p>I'm Oliver, User Interface and User Experience designer with 10 years of experience.
                    In my everyday work, In everyday work, I help startups improve their products.You can check me out on <a href="/">Dribble,</a><a href="/">Linkedin, </a>
                     <br/>   <a href="/"> Medium</a> and  <a href="/">About.me.</a>
                    </p>
                </div>
                <div className="footer-content">
                    <div className="wrapper">
                        <div className="foot-text">
                            <small>
                                <h6>App loads by itself</h6>
                                <span>&copy;All Rights Reserved</span> <br />
                                <b>Made in pain and frustrations in 2018</b>
                            </small>
                        </div>
                        <div className="social">
                        <nav>
                            <ul>
                                <li><a className="Facebook" href="/"><Facebook /></a></li>
                                <li><a className="Youtube" href="/"><Youtube /></a></li>
                                <li><a className="Instagram" href="/"><Instagram /></a></li>
                                <li><a className="Twitter" href="/"><Twitter /></a></li>
                            </ul>
                        </nav>
                        <small>
                        <span>Have any Questions?</span> <br />
                                <b>Send me an email: <a href="/">rprempehs@yahoo.com</a> </b>
                            </small>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default PlatformWrapper;
