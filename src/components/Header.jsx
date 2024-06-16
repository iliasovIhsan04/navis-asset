import React from "react";
import projectLogo from "../assets/img/navesAssetLogo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header d-flex align-items-center">
      <div className="container">
        <div className="nav-link-block d-flex align-items-center justify-content-between">
          <NavLink to="/">
            <img src={projectLogo} alt="" />
          </NavLink>
          <div className="nav-link-box d-flex">
            <NavLink to="us" className="nav-link-page">
              Услуги
            </NavLink>
            <NavLink to="p" className="nav-link-page">
              Прайс
            </NavLink>
            <NavLink to="o" className="nav-link-page">
              Отзывы
            </NavLink>
            <NavLink to="b" className="nav-link-page">
              О нас
            </NavLink>
            <NavLink to="k" className="nav-link-page">
              Контакты
            </NavLink>
          </div>
          <div className="language-block d-flex aling-items-center">
            <div className="language-box"></div>
            <button>Начать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
