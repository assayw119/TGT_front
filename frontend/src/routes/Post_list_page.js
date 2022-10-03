import React from "react";
import Navbar from "../component/Navbar";
import "../static/css/grid.css";
function Post_list_page(props) {
    return (
        <>
            <Navbar />
            <div className="post_list_container container">
                <div className="post_list_item"></div>
                <div className="post_list_item"></div>
                <div className="post_list_item"></div>
                <div className="post_list_item"></div>
                <div className="post_list_item"></div>
                <div className="post_list_item"></div>
                <div className="post_list_item"></div>
                <div className="post_list_item"></div>
                <div className="post_list_item"></div>
            </div>
        </>
    );
}

export default Post_list_page;
