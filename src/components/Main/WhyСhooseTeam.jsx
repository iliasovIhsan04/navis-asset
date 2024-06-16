import React from "react";
const WhyСhooseTeam = () => {
  return (
    <div className="why-choose-team top-page">
      <div className="container">
        <h2 className="title-page">Почему выбирают Navis Asset?</h2>
        <div className="team-box-conditions-block">
          <div className="team-box-conditions-box d-flex flex-column justify-content-between">
            <span className="text-span">
              Наша панель пользователя позволяет вам загружать данные в любое
              время
            </span>
            <h3 className="title-h3">
              Восстановим ваш заблокированный кошелёк
            </h3>
            <div className="team-contitions-img1"></div>
          </div>
          <div className="team-box-conditions-box d-flex flex-column justify-content-between">
            <span>
              Гарантируем, что резервная копия зашифрованного кошелька будет
              хнариться в сервере
            </span>
            <h3 className="title-h3">
              Ваш кошелёк будет защищен воздушной прослойкой
            </h3>
            <div className="team-contitions-img2"></div>
          </div>
          <div className="team-box-conditions-box  d-flex flex-column justify-content-between">
            <span>
              Наша панель пользователя позволяет вам загружать данные в любое
              время
            </span>
            <h3 className="title-h3">Ваш забытый пароль будет восстановлен</h3>
            <div className="team-contitions-img3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyСhooseTeam;
