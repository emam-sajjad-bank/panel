//node modules
import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import { Link } from "react-router-dom";
import { AsideStyle, MainStyle, SidbarTogglerStyle, StyleUl } from "./style";

//components

//utils

//styles

const MainHOC = ({ children }) => {
  return (
    <>
      <Header />
      <AsideStyle>
        <SidbarTogglerStyle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="32"
            height="32"
            style={{ cursor: "pointer" }}
          >
            <path
              fill="#fff"
              d="M424 96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zM264 96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zM104 96H24c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96H32v-64h64v64zm328 96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zm-152-96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zm-152-96H24c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96H32v-64h64v64z"
            />
          </svg>
        </SidbarTogglerStyle>
        <StyleUl>
          <li>
            <Link to="/" className="nav-link navLink">
              <span className="md:inline-block hidden">صفحه نخست</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link navLink">
              <span className="md:inline-block hidden">پروفایل کاربری</span>
            </Link>
          </li>
        </StyleUl>
      </AsideStyle>
      <MainStyle>{children}</MainStyle>
    </>
  );
};

MainHOC.propTypes = {
  children: PropTypes.any,
};

export default MainHOC;
