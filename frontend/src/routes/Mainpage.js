import React from "react";
import Navbar from "../component/Navbar";
import "../static/css/grid.css";

function Mainpage(props) {
    return (
        <>
            <Navbar />
            <div className="mainpage_container container">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
        </>
    );
}

export default Mainpage;
