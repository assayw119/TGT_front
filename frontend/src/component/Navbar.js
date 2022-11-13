/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
function Navbar(props) {
  //검색창, 모달창 밖에 클릭하면꺼지도록
  function useOutSideRef(funct, close_button) {
    const ref = useRef(null);
    const [searchResult, setsearchResult] = useState([]);

    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          funct(false);
        } else if (!close_button) {
          funct(false);
        } else {
          funct(true);
        }
      }
      document.addEventListener('click', handleClickOutside);

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    });

    return ref;
  }
  const [view, setView] = useState(false);
  return (
    <>
      <Navbar_style>
        <NavLink to="/">
          <img src="images/logo.png" style={image_style} />
          <img src="images/line.png" style={line} />
        </NavLink>
        <NavLink to="/Mainpage">
          <img src="images/Mainpage.png" style={icon} className="mainpage" />
        </NavLink>
        <NavLink to="/Postlist">
          <img
            src="images/Clublistpage.png"
            style={icon}
            className="postlist"
          />
        </NavLink>
        {/* <NavLink to="/Clubpage"> */}
        <div
          onClick={() => {
            setView(!view);
          }}
        >
          <img style={icon} src="images/Clubpage.png" className="clubpage" />
          {view && <Dropdown />}
        </div>

        {/* </NavLink> */}
        <NavLink to="/Writepage">
          <img style={icon} src="images/Writepage.png" className="writepage" />
        </NavLink>
        <NavLink to="/Logout">
          <img src="images/logout.png" style={logout} className="logout" />
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
