import React from "react";
import { Button } from "reactstrap";
import "./index.scss";


const Users = props => {
    return (
        <div className="user-wrapper">
            <div className="user-thumbnail">
                <img className="image" src="/u1.jpg" alt="" />
                <small>Guest: Grzgorz Rog from Eduweb</small>
            </div>
            <Button> Listen up here --></Button>
            <a href="/">or watch on youtube</a>
        </div>
    )
}

export default Users;
