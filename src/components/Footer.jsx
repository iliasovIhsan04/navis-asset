import { t } from "i18next";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column justify-content-between">
      <div className="container">
        <div className="footer-block d-flex justify-content-between flex-wrap">
          <div className="d-flex flex-column">
            <div className="footer-icons"></div>
            <span className="text-span footer-text">{t("footerText")}</span>
            <a className="the-link" href="">
              navisasset@mail.com
            </a>
          </div>
          <div className="footer-box2 flex-wrap">
            <div className="d-flex flex-column">
              <h2 className="title-internal-footer">{t("basics")}</h2>
              <div className="link-footer-block d-flex flex-column">
                <NavLink to="/about-us" className="link-footer">
                  {t("aboutUs")}
                </NavLink>
                <NavLink to="/contacts" className="link-footer">
                  {t("contacts")}
                </NavLink>
                <NavLink className="link-footer">{t("partners")}</NavLink>
                <NavLink className="link-footer">
                  {t("why")} <br /> NavisAsset?
                </NavLink>
              </div>
            </div>
            <div className="d-flex flex-column footer-order2">
              <h2 className="title-internal-footer">{t("users")}</h2>
              <div className="link-footer-block d-flex flex-column">
                <NavLink className="link-footer"> {t("services")}</NavLink>
                <NavLink to="/reviews" className="link-footer">
                  {t("reviews")}
                </NavLink>
                <NavLink to="/price" className="link-footer">
                  {t("price")}
                </NavLink>
                <NavLink to="/all-news" className="link-footer">
                  {t("news")}
                </NavLink>
              </div>
            </div>
            <div className="d-flex flex-column footer-order3">
              <h2 className="title-internal-footer">{t("networks")}</h2>
              <div className="social-network-block d-flex">
                <div className="social-network-box1"></div>
                <div className="social-network-box2"></div>
                <div className="social-network-box3"></div>
                <div className="social-network-box4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="made-with d-flex align-items-center">
        <div className="made-width-inter container d-flex justify-content-between">
          <p>{t("reserved")}</p>
          <h2>
            Made with ❤️ by <a href="">NavisDevs</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
