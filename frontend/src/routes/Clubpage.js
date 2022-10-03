import React from "react";
import Navbar from "../component/Navbar";
import "../static/css/grid.css";

function Clubpage(props) {
    return (
        <>
            <Navbar />
            <div className="clubpage_container container">
                <div className="clubpage_item"></div>
                <div className="clubpage_item"></div>
                <div className="clubpage_item"></div>
                <div className="clubpage_item"></div>
                <div className="clubpage_item"></div>
            </div>
        </>
    );
}

export default Clubpage;
