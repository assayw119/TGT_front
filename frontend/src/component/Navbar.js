import React from "react";
import styled, { css } from "styled-components";
function Navbar(props) {
    return (
        <>
            <Navbar_style>
                <img src="images/logo.png" style={image_style} />
                <img src="images/line.png" style={line} />
                <img src="images/Mainpage.png" style={icon} />
                <img src="images/Clublistpage.png" style={icon} />
                <img src="images/Clubpage.png" style={icon} />
                <img src="images/Writepage.png" style={icon} />
                <img src="images/logout.png" style={logout} />
            </Navbar_style>
        </>
    );
}

export default Navbar;

const Navbar_style = styled.div`
    position: fixed;
    background: white;
    width: 6%;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const image_style = {
    width: "100%",
    padding: "10%",
    boxSizing: "border-box",
    marginTop: "40%",
};

const icon = {
    display: "flex",
    alignItems: "center",
    width: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50%",
    cursor: "pointer",
};

const line = {
    boxSizing: "border-box",
    width: "100%",
    padding: "10%",
};

const logout = {
    cursor: "pointer",
    position: "absolute",
    bottom: "5%",
    width: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    filter: "invert(100%) sepia(9%) saturate(0%) hue-rotate(114deg) brightness(86%) contrast(89%)",
};
