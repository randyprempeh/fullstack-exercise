import React from "react";
import "./index.scss";
import { Button } from "reactstrap"


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="logo"><img src=".logo.png" alt="" /></div>
                <h1>We bring the world closer to you</h1>
                <Button>Get Closer</Button>
            </div>

            <div className="hero-image">
                <img src="pl1.jpg" alt="" />
            </div>

        </section>
    )
}

export default Hero;
