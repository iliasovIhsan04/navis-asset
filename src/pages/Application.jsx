import { t } from "i18next";
import React from "react";

const Application = () => {
  return (
    <div className="application">
      <div className="container">
        <div className="wallet-recovery">
          <div className="application-card we-will-help-box d-flex flex-column justify-content-between">
            <div className="application-box">
              <div className="will-icons-backg application-icons-box1"></div>
              <div className="d-grid aplication-text-box">
                <h3 className="title-h3">{t("trustedWallet")}</h3>
                <span className="text-span">{t("trustedName")}</span>
              </div>
            </div>
            <div className="application-box">
              <div className="will-icons-backg application-icons-box2"></div>
              <div className="d-grid aplication-text-box">
                <h3 className="title-h3">{t("secureStorage")}</h3>
                <span className="text-span">{t("informationAbout")}</span>
              </div>
            </div>
            <div className="application-box">
              <div className="will-icons-backg application-icons-box2"></div>
              <div className="d-grid aplication-text-box">
                <h3 className="title-h3">{t("getStarted")}</h3>
                <span className="text-span">{t("getStartedText")}</span>
              </div>
            </div>
          </div>
          <div className="contacts-card we-will-help-box ">
            <form
              action=""
              style={{ height: "100%" }}
              className="d-flex flex-column justify-content-between"
            >
              <div className="input-block d-flex g-10">
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="">Имя</label>
                  <input type="text" placeholder="Имя" />
                </div>
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="">Фамилия</label>
                  <input placeholder="Фамилия" type="text" />
                </div>
              </div>
              <div className="input-box d-flex flex-column g-10">
                <label htmlFor="">Страна</label>
                <select className="input-select" name="" id=""></select>
              </div>
              <div className="input-block d-flex g-10">
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="">Почта</label>
                  <input type="text" placeholder="Электронная почта" />
                </div>
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="">+996 502 800 202</label>
                  <input placeholder="Фамилия" type="text" />
                </div>
              </div>
              <div className="input-box d-flex flex-column g-10">
                <label htmlFor="">Тип восстановления</label>
                <select className="input-select" name="" id=""></select>
              </div>
              <div className="input-block g-10">
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="">Вид кошелька</label>
                  <select className="input-select" name="" id=""></select>
                </div>
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="">Объем кошелька</label>
                  <input placeholder="Объем кошелька" type="text" />
                </div>
              </div>
              <label className="checkbox-container">
                <input type="checkbox" id="subscribe" name="subscribe" />
                <span className="checkmark"></span>
                <p>
                  {t("checkboxText")} <span>{t("userAgreement")}</span>
                </p>
              </label>
              <button>Отправить заявку</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
