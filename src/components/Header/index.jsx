import React from "react";
import "./index.scss";
import { Facebook } from "./facebook";
import { Instagram } from "./instagram";
import { Twitter } from "./twitter"

import { Youtube } from "./youtube";


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a className="Facebook" href="/"><Facebook /></a></li>
                    <li><a className="Youtube" href="/"><Youtube /></a></li>
                    <li><a className="Instagram" href="/"><Instagram /></a></li>
                    <li><a className="Twitter" href="/"><Twitter /></a></li>
                </ul>
            </nav>
            <span>Appp Loads 2018</span>
        </header>
    )
}



export default Header;

