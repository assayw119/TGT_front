/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
function Navbar(props) {
  return (
    <>
      <Navbar_style>
        <NavLink to="/">
          <img src="images/logo.png" style={image_style} />
          <img src="images/line.png" style={line} />
        </NavLink>
        <NavLink to="/">
          <img src="images/Mainpage.png" style={icon} />
        </NavLink>
        <NavLink to="/Postlist">
          <img src="images/Clublistpage.png" style={icon} />
        </NavLink>
        <NavLink to="/Clubpage">
          <img src="images/Clubpage.png" style={icon} />
        </NavLink>
        <NavLink to="/Writepage">
          <img src="images/Writepage.png" style={icon} />
        </NavLink>
        <NavLink to="/Logout">
          <img src="images/logout.png" style={logout} />
        </NavLink>
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
  width: '100%',
  padding: '10%',
  boxSizing: 'border-box',
  marginTop: '40%',
};

const icon = {
  display: 'flex',
  alignItems: 'center',
  width: '20%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '50%',
  cursor: 'pointer',
};

const line = {
  boxSizing: 'border-box',
  width: '100%',
  padding: '10%',
};

const logout = {
  cursor: 'pointer',
  position: 'absolute',
  bottom: '5%',
  width: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  filter:
    'invert(100%) sepia(9%) saturate(0%) hue-rotate(114deg) brightness(86%) contrast(89%)',
};
