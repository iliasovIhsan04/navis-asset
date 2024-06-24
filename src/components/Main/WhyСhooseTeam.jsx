import React from "react";
import { useTranslation } from "react-i18next";
import number1 from "../../assets/img/number1.svg";
import number2 from "../../assets/img/number2.svg";
import number3 from "../../assets/img/number3.svg";
const WhyСhooseTeam = () => {
  const { t } = useTranslation();
  const team = [
    {
      id: 1,
      text: t("chooseText1"),
      title: t("chooseTitle1"),
      img: number1,
    },
    {
      id: 2,
      text: t("chooseText2"),
      title: t("chooseTitle2"),
      img: number2,
    },
    {
      id: 3,
      text: t("chooseText3"),
      title: t("chooseTitle3"),
      img: number3,
    },
  ];

  return (
    <div className="why-choose-team top-page">
      <div className="container">
        <h2 className="title-page">{t("choose")}</h2>
        <div className="team-box-conditions-block">
          {team.map((el, id) => (
            <div
              className="team-box-conditions-box d-flex flex-column justify-content-between"
              key={id}
            >
              <span className="text-span">{el.text}</span>
              <div
                className="d-flex flex-column justify-content-between"
                style={{ height: "245px" }}
              >
                <h3 className="title-h3">{el.title}</h3>
                <div className="team-contitions-img">
                  <img src={el.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyСhooseTeam;
