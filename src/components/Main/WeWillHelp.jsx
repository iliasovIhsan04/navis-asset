import { t } from "i18next";
import React from "react";

const WeWillHelp = () => {
  return (
    <div className="wi-help" id="services-section">
      <div className="container">
        <h2 className="title-page">{t("wiHelpYou")}</h2>
        <div className="we-will-help">
          <div className="we-will-help-box we-will-help-box-first">
            <div className="interior-box-icons1"></div>
            <h3 className="title-h3">
              {t("weHelpTitleOne")} <br />
              {t("works")}
            </h3>
            <span className="text-span">{t("weHelpTextOne")}</span>
          </div>
          <div className="we-will-help-box">
            <div className="interior-box-icons2 will-icons-backg"></div>
            <h3 className="title-h3">{t("weHelpTitleTwo")}</h3>
            <span className="text-span">{t("weHelpTextTwo")}</span>
          </div>
          <div className="we-will-help-box">
            <div className="interior-box-icons3 will-icons-backg"></div>
            <h3 className="title-h3">{t("weHelpTitleThree")}</h3>
            <span className="text-span">{t("weHelpTextThree")}</span>
          </div>
          <div className="we-will-help-box ">
            <div className="interior-box-icons4 will-icons-backg"></div>
            <h3 className="title-h3">
              {t("weHelpTitleFour")} <br /> {t("scammers")}
            </h3>
            <span className="text-span">{t("weHelpTextFour")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeWillHelp;
