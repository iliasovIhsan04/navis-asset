import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const WalletRecovery = () => {
  return (
    <div className="container">
      <div className="wallet-recovery">
        <div className="wallet-recovery-inner-box d-flex flex-column justify-content-between">
          <h1>
            Простое
            <br /> и прозрачное восстановление кошелька
          </h1>
          <span className="text-span">
            Самый простой способ восстановить свой потерянный пароль от кошелька
            и расследовать обманутую криптовалюту
          </span>
          <div className="d-flex" style={{ gap: "10px" }}>
            <button className="submit-application-btn">Оставить заявку</button>
            <button className="more-details-btn d-flex aling-items-center">
              Подробнее <GoArrowUpRight size={24} />
            </button>
          </div>
        </div>
        <div className="wallet-recovery-img-box"></div>
      </div>
    </div>
  );
};

export default WalletRecovery;
