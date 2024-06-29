import React, { useState } from "react";
import projectLogo from "../../assets/img/navesAssetLogo.svg";
import { NavLink } from "react-router-dom";
import Language from "./Language";
import { t } from "i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import close from "../../assets/img/close_modal.svg";
const Header = () => {
  const [menu, setMenu] = useState(false);
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
          <div className="burger-menu-block d-flex align-items-center">
            <RxHamburgerMenu
              className="burger-menu"
              size={30}
              style={{ cursor: "pointer" }}
              onClick={() => setMenu(true)}
            />
            <NavLink to="/">
              <img
                className="project-logo-img"
                src={projectLogo}
                alt="Project Logo"
              />
            </NavLink>
          </div>
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
          {menu && (
            <div className="menu">
              <div onClick={() => setMenu(false)} className="menu_not"></div>
              <div className="menu_container d-flex flex-column">
                <div className="close-language-block d-flex align-items-center justify-content-between">
                  <img
                    onClick={() => setMenu(false)}
                    className="close"
                    src={close}
                    alt=""
                  />
                  <div className="language-box-menu">
                    <Language />
                  </div>
                </div>
                <NavLink
                  to="/"
                  onClick={() => setMenu(false)}
                  className="burger-nav-link-page"
                >
                  {t("services")}
                </NavLink>
                <NavLink
                  to="/price"
                  onClick={() => setMenu(false)}
                  className="burger-nav-link-page"
                >
                  {t("price")}
                </NavLink>
                <NavLink
                  to="/reviews"
                  onClick={() => setMenu(false)}
                  className="burger-nav-link-page"
                >
                  {t("reviews")}
                </NavLink>
                <NavLink
                  to="/about-us"
                  onClick={() => setMenu(false)}
                  className="burger-nav-link-page"
                >
                  {t("aboutUs")}
                </NavLink>
                <NavLink
                  to="/contacts"
                  onClick={() => setMenu(false)}
                  className="burger-nav-link-page"
                >
                  {t("contacts")}
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
