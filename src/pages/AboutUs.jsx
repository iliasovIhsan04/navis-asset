import React from "react";
import { t } from "i18next";
import founder from "../assets/img/founder-img.svg";
export default function AboutUs() {
  return (
    <div className="container">
      <div className="about-us">
        <h1 className="title-page"> {t("about")} </h1>
        <div className="we-will-help about-box1">
          <div className="about g-10">
            <div className="d-flex g-10">
              <div className="customer-card d-flex align-items-center g-10">
                <img src={founder} alt="" />
                <div className="founder-name d-flex flex-column g-10">
                  <h3 className="text-span"> {t("founder")} </h3>
                  <h3 className="title-h3"> {t("founderFN")} </h3>
                </div>
              </div>
              <div className="customer-card d-flex flex-column justify-content-between">
                <h2 className="big-text"> 45+ </h2>
                <p className="title-basic"> {t("satisfiedClients")} </p>
              </div>
            </div>
            <div className="customer-card customer-card-last d-flex flex-column justify-content-between">
              <h2 className="big-text"> 100% </h2>
              <p className="text-span"> {t("qualityWork")} </p>
            </div>
          </div>
          <div className="about-img1"></div>
        </div>
        <div className="we-will-help about-box2">
          <div className="about-img2"></div>
          <div className="guarantees d-flex g-10">
            <div className="guarantee-card d-flex flex-column justify-content-between">
              <h2 className="big-text"> 10+ </h2>
              <p className="title-basic"> {t("professional")} </p>
            </div>
            <div className="guarantee-text-box guarantee-card d-flex flex-column justify-content-between">
              <h2 className="big-text"> {t("guarantee")} </h2>
              <p className="text-span profesional-text">{t("professional")} </p>
            </div>
          </div>
        </div>
        <div className="garants d-grid">
          <div className="d-grid garant">
            <h3 className="question-content"> {t("guaranteeTitle")} </h3>
            <p className="text-span"> {t("guaranteeText")} </p>
          </div>
          <div className="d-grid garant">
            <h3 className="question-content"> {t("aboutFounders")} </h3>
            <p className="text-span">{t("aboutFoundersText")} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
