import React from "react";
import projectLogo from "../../assets/img/navesAssetLogo.svg";
import { NavLink } from "react-router-dom";
import Language from "./Language";
import { t } from "i18next";
const Header = () => {
  return (
    <div className="header d-flex align-items-center">
      <div className="container">
        <div className="nav-link-block d-flex align-items-center justify-content-between">
          <NavLink to="/">
            <img src={projectLogo} alt="" />
          </NavLink>
          <div className="nav-link-box d-flex">
            <NavLink to="us" className="nav-link-page">
              {t("services")}
            </NavLink>
            <NavLink to="p" className="nav-link-page">
              {t("price")}
            </NavLink>
            <NavLink to="o" className="nav-link-page">
              {t("reviews")}
            </NavLink>
            <NavLink to="b" className="nav-link-page">
              {t("aboutUs")}
            </NavLink>
            <NavLink to="k" className="nav-link-page">
              {t("contacts")}
            </NavLink>
          </div>
          <div className="language-block d-flex aling-items-center">
            <div className="language-box">
              <Language />
            </div>
            <button> {t("begin")} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
