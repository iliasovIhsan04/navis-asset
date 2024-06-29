import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { MdOutlineCall } from "react-icons/md";
import { PiMapPin } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";
import { Pages } from "../api";
import Loading from "../assets/UI/Loading/Loading";

export default function Contacts() {
  const [contact, setContact] = useState([]);
  const lang = localStorage.getItem("lang");
  const [inputChanged, setInputChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const initialInfoState = {
    country: "",
    wallet_type: "",
    recovery_type: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    wallet_value: 0,
    status_agree: true,
  };
  const [info, setInfo] = useState(initialInfoState);

  const post = {
    country: info.country,
    wallet_type: info.wallet_type,
    recovery_type: info.recovery_type,
    first_name: info.first_name,
    last_name: info.last_name,
    email: info.email,
    phone: info.phone,
    wallet_value: info.wallet_value,
    status_agree: info.status_agree,
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await Pages.getContact();
        setContact(res.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [lang]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
    setInputChanged(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await Pages.postContact(post);
      console.log(res);
      setInfo(initialInfoState); 
      setError({}); 
    } catch (error) {
      if (error?.response?.data) {
        setError(error.response.data);
      } else {
        setError({ general: "An error occurred. Please try again later." });
      }
      console.error("Error posting contact:", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(error);

  return (
    <div className="contact">
      <div className="container">
        <div className="wallet-recovery">
          <div className="contacts-card d-flex flex-column justify-content-between white-backg-contact">
            <div className="contact-inter-box d-grid">
              <h2 className="technical-support">{t("technical")}</h2>
              <div className="address-call-block d-grid">
                <div className="address-box address-box1 d-flex">
                  <div>
                    <PiMapPin
                      className="icons-map"
                      size={24}
                      style={{ color: "white" }}
                    />
                  </div>
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
          <div className="contacts-card we-will-help-box contact-gap">
            <form
              action=""
              style={{ height: "100%" }}
              className="d-flex flex-column justify-content-between"
              onSubmit={handleSubmit}
            >
              <div className="input-block g-10">
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="firstName">Имя</label>
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    placeholder="Имя"
                    value={info.first_name}
                    onChange={handleChange}
                  />
                  {error.first_name && (
                    <p className="red">{error.first_name}</p>
                  )}
                </div>
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="lastName">Фамилия</label>
                  <input
                    id="lastName"
                    name="last_name"
                    placeholder="Фамилия"
                    type="text"
                    value={info.last_name}
                    onChange={handleChange}
                  />
                  {error.last_name && <p className="red">{error.last_name}</p>}
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
                {error.country && <p className="red">{error.country}</p>}
              </div>
              <div className="input-block g-10">
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="email">Почта</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Электронная почта"
                    value={info.email}
                    onChange={handleChange}
                  />
                  {error.email && <p className="red">{error.email}</p>}
                </div>
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="phone">Телефон</label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="Телефон"
                    type="text"
                    value={info.phone}
                    onChange={handleChange}
                  />
                  {error.phone && <p className="red">{error.phone}</p>}
                </div>
              </div>
              <div className="input-box d-flex flex-column g-10">
                <label htmlFor="recovery_type">Тип восстановления</label>
                <select
                  className="input-select"
                  name="recovery_type"
                  id="recovery_type"
                  value={info.recovery_type}
                  onChange={handleChange}
                >
                  {contact.recovery?.map((el, id) => (
                    <option key={id} value={el.recovery}>
                      {el.recovery}
                    </option>
                  ))}
                </select>
                {error.recovery_type && (
                  <p className="red">{error.recovery_type}</p>
                )}
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
                  {error.wallet_type && (
                    <p className="red">{error.wallet_type}</p>
                  )}
                </div>
                <div className="input-box d-flex flex-column g-10">
                  <label htmlFor="wallet_value">Объем кошелька</label>
                  <input
                    id="wallet_value"
                    name="wallet_value"
                    placeholder="Объем кошелька"
                    type="text"
                    value={info.wallet_value}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  id="status_agree"
                  name="status_agree"
                  checked={info.status_agree}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                <p>
                  {t("checkboxText")} <span>{t("userAgreement")}</span>
                </p>
              </label>
              <button type="submit">
                {isLoading ? <Loading /> : " Отправить заявку"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
