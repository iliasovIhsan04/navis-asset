import { t } from "i18next";
import React from "react";
import { MdOutlineCall } from "react-icons/md";
import { PiMapPin } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";

export default function Contacts() {
  return (
    <div className="contact">
      <div className="container">
        <div className="wallet-recovery">
          <div className=" contacts-card we-will-help-box d-flex flex-column justify-content-between">
            <div className="contact-inter-box d-grid">
              <h2 className="technical-support">{t("technical")}</h2>
              <div className="address-call-block d-grid">
                <div className="address-box d-flex">
                  <PiMapPin size={24} style={{ color: "white" }} />
                  <p>{t("address")}</p>
                </div>
                <div className="address-box d-flex">
                  <MdOutlineCall size={24} style={{ color: "white" }} />
                  <div className="d-flex flex-column g-10">
                    <p>+996 (502)-800-202 </p>
                    <p>+996 (502)-800-202 </p>
                  </div>
                </div>
                <div className="address-box d-flex">
                  <VscMail size={24} style={{ color: "white" }} />
                  <p>navisasset@mail.com</p>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h2 className="title-internal-footer contact-social-text">
                  {t("socialText")}
                </h2>
                <div className="contact-social-block d-flex">
                  <div className="social-network-box1 contact-social-box1"></div>
                  <div className="social-network-box2 contact-social-box2"></div>
                  <div className="social-network-box3 contact-social-box3"></div>
                  <div className="social-network-box4 contact-social-box4"></div>
                </div>
              </div>
            </div>
            <p className="text-contact">{t("contactText")}</p>
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
}
