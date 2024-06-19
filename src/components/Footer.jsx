import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column justify-content-between">
      <div className="container">
        <div className="footer-block d-flex justify-content-between">
          <div className="d-flex flex-column">
            <div className="footer-icons"></div>
            <span className="text-span footer-text">
              Это международный сервис, где вам <br /> быстро и надежно
              восстановят ваш <br />
              забытый криптокошелёк
            </span>
            <a className="the-link" href="">
              navisasset@mail.com
            </a>
          </div>
          <div className="footer-box2">
            <div className="d-flex flex-column">
              <h2 className="title-internal-footer">Основное</h2>
              <div className="link-footer-block d-flex flex-column">
                <NavLink className="link-footer">О нас</NavLink>
                <NavLink className="link-footer">Контакты</NavLink>
                <NavLink className="link-footer">Партнеры</NavLink>
                <NavLink className="link-footer">Почему NavisAsset?</NavLink>
              </div>
            </div>
            <div className="d-flex flex-column footer-order2">
              <h2 className="title-internal-footer">Пользователям</h2>
              <div className="link-footer-block d-flex flex-column">
                <NavLink className="link-footer">Услуги</NavLink>
                <NavLink className="link-footer">Отзывы</NavLink>
                <NavLink className="link-footer">Прайс</NavLink>
                <NavLink className="link-footer">Новости</NavLink>
              </div>
            </div>
            <div className="d-flex flex-column footer-order3">
              <h2 className="title-internal-footer">Мы в соцсетях</h2>
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
        <div className="container d-flex justify-content-between">
          <p>© 2024 NavisAsset Все права защищены</p>
          <h2>
            Made with ❤️ by <a href="">NavisDevs</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
