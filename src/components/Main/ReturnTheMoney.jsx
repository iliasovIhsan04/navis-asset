import { t } from "i18next";
import React from "react";
import { useNavigate } from "react-router";

const ReturnTheMoney = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="return-the-money d-flex aling-items-center justify-content-between top-page">
        <h2>{t("moneyText")}</h2>
        <div className="money-btn_block d-flex flex-column justify-content-between align-items-end">
          <span className="text-span"> {t("moneyText2")}</span>
          <button onClick={() => navigate("/application")}>
            {t("moneyBtn")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReturnTheMoney;
