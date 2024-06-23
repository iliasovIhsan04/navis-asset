import React from "react";
import key from "../../assets/img/key.svg";
import coment from "../../assets/img/commentt.svg";
import close from "../../assets/img/close.svg";
import sheild from "../../assets/img/shield.svg";
import { useTranslation } from "react-i18next";

const WeWillHelp = () => {
  const { t } = useTranslation();
  const weHelp = [
    {
      id: 1,
      img: key,
      title: t("weHelpTitleOne"),
      title2: t("works"),
      text: t("weHelpTextOne"),
    },
    {
      id: 2,
      img: coment,
      title: t("weHelpTitleTwo"),
      text: t("weHelpTextTwo"),
    },
    {
      id: 3,
      img: close,
      title: t("weHelpTitleThree"),
      text: t("weHelpTextTwo"),
    },
    {
      id: 4,
      img: sheild,
      title: t("weHelpTitleFour"),
      title2: t("scammers"),
      text: t("weHelpTextFour"),
    },
  ];
  return (
    <div className="wi-help" id="services-section">
      <div className="container">
        <h2 className="title-page">{t("wiHelpYou")}</h2>
        <div className="we-will-help">
          {weHelp.map((el) => (
            <div className="we-will-help-box">
              <div className="interior-box-icons will-icons-backg d-flex align-items=center justify-content-center">
                <img src={el.img} alt="" />
              </div>
              <h3 className="title-h3">
                {el.title}
                <br />
                {el.title2}
              </h3>
              <span className="text-span">{el.text}</span>
            </div>
          ))}
          {/* <div className="we-will-help-box">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WeWillHelp;
