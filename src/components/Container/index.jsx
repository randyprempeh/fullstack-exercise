import React from "react";
import "./index.scss"
const Container = props => {
    return (
        <section className="container">
            <div className="content">
                <span className="overline"> For who and why?</span>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consectetur fugiat
                    quidem aliquid quibusdam cum nesciunt sit ea provident illo dignissimos voluptatum numquam,
                    quasi molestiae eos vel! Created by <a href="/">Randy Prempeh</a>.</h2>

                <hr />

                {props.children}

            </div>
        </section>
    )
}



export default Container;