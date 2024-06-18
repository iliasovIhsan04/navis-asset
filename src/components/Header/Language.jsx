import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import en from "../../assets/img/flagEnglish.svg";
import ru from "../../assets/img/flagRussian.svg";

const Language = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [exchange, setExchange] = useState(i18n.language === "ru");
  const containerRef = useRef(null);

  useEffect(() => {
    if (open && containerRef.current) {
      containerRef.current.focus();
    }
  }, [open]);

  const handleClose = (languageDir) => {
    i18n.changeLanguage(languageDir);
    document.documentElement.lang = languageDir;
    localStorage.setItem("lang", languageDir);
    setOpen(false);
    setExchange(languageDir === "ru");
    window.location.reload();
  };
  return (
    <div className="position-relative">
      <div
        className={open ? "active-l" : " language"}
        onClick={() => setOpen(!open)}
        ref={containerRef}
      >
        <div className="active-ru-en">
          <img src={exchange ? ru : en} alt="" />
          <p>{exchange ? "РУС" : "ENG"}</p>
        </div>
        <IoIosArrowDown
          style={{
            position: "absolute",
            right: 12,
            top: 18,
          }}
          color="#6F6F6F"
          size={18}
          className={open ? "down" : ""}
        />
      </div>
      <div
        className={open ? "active-block" : "active-none"}
        onClick={() => handleClose(exchange ? "en" : "ru")}
      >
        <div className="active-ru-en">
          <img src={exchange ? en : ru} alt="" />
          <p>{exchange ? "ENG" : "РУС"}</p>
        </div>
      </div>
    </div>
  );
};

export default Language;
