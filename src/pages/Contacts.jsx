import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { MdOutlineCall } from "react-icons/md";
import { PiMapPin } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";
import { Pages } from "../api";

export default function Contacts() {
  const [contact, setContact] = useState([]);
  const lang = localStorage.getItem("lang");
  const [inputChanged, setInputChanged] = useState(false);
  const [info, setInfo] = useState({
    country: "",
    wallet_type: "",
    recovery: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    wallet_value: 0,
    status_agree: true,
  });

  const post = [{
    
  }]

  useEffect(() => {
    const fetchData = async () => {
      const res = await Pages.getContact();
      setContact(res.data);
    };
    fetchData();
  }, [lang]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    setInputChanged(true);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="wallet-recovery">
          <div className="contacts-card d-flex flex-column justify-content-between white-backg-contact">
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
                  <label htmlFor="firstName">Имя</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Имя"
                    value={info.first_name}
                  />
                </div>
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="lastName">Фамилия</label>
                  <input
                    id="lastName"
                    placeholder="Фамилия"
                    type="text"
                    value={info.last_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="input-box d-flex flex-column g-10">
                <label htmlFor="country">Страна</label>
                <select
                  className="input-select"
                  name="country"
                  id="country"
                  value={info.country}
                  onChange={handleChange}
                >
                  {contact?.country?.map((el, id) => (
                    <option key={id} value={el.country}>
                      {el.country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-block d-flex g-10">
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="email">Почта</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Электронная почта"
                    value={info.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="phone">Телефон</label>
                  <input id="phone" placeholder="Телефон" type="text" />
                </div>
              </div>
              <div className="input-box d-flex flex-column g-10">
                <label htmlFor="recovery">Тип восстановления</label>
                <select
                  className="input-select"
                  name="recovery"
                  id="recovery"
                  value={info.recovery}
                  onChange={handleChange}
                >
                  {contact.recovery?.map((el, id) => (
                    <option key={id} value={el.recovery}>
                      {el.recovery}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-block g-10">
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="wallet_type">Вид кошелька</label>
                  <select
                    className="input-select"
                    name="wallet_type"
                    id="wallet_type"
                    value={info.wallet_type}
                    onChange={handleChange}
                  >
                    {contact.wallet_type?.map((el, id) => (
                      <option key={id} value={el.wallet_type}>
                        {el.wallet_type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="wallet_volume">Объем кошелька</label>
                  <input
                    id="wallet_volume"
                    placeholder="Объем кошелька"
                    type="text"
                    value={info.wallet_value}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <label className="checkbox-container">
                <input type="checkbox" id="subscribe" name="subscribe" />
                <span className="checkmark"></span>
                <p>
                  {t("checkboxText")} <span>{t("userAgreement")}</span>
                </p>
              </label>
              <button type="submit">Отправить заявку</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
