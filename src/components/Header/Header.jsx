import React from "react";
import projectLogo from "../../assets/img/navesAssetLogo.svg";
import { NavLink } from "react-router-dom";
import Language from "./Language";
import { t } from "i18next";

const Header = () => {
  const handleScroll = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header d-flex align-items-center">
      <div className="container">
        <div className="nav-link-block d-flex align-items-center justify-content-between">
          <NavLink to="/">
            <img src={projectLogo} alt="Project Logo" />
          </NavLink>
          <div className="nav-link-box">
            <NavLink to="/" className="nav-link-page" onClick={handleScroll}>
              {t("services")}
            </NavLink>
            <NavLink to="/price" className="nav-link-page">
              {t("price")}
            </NavLink>
            <NavLink to="/reviews" className="nav-link-page">
              {t("reviews")}
            </NavLink>
            <NavLink to="/about-us" className="nav-link-page">
              {t("aboutUs")}
            </NavLink>
            <NavLink to="/contacts" className="nav-link-page">
              {t("contacts")}
            </NavLink>
          </div>
          <div className="language-block d-flex align-items-center">
            <div className="language-box">
              <Language />
            </div>
            <button>{t("begin")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
