import { t } from "i18next";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const WalletRecovery = () => {
  return (
    <div className="container">
      <div className="wallet-recovery">
        <div className="wallet-recovery-inner-box d-flex flex-column justify-content-between">
          <h1>
            {t("simple")}
            <br />
            {t("transparent")}
          </h1>
          <span className="text-span"> {t("easiest")} </span>
          <div className="d-flex" style={{ gap: "10px" }}>
            <button className="submit-application-btn">
              {t("submitYourApplication")}
            </button>
            <button className="more-details-btn d-flex aling-items-center">
              {t("moreDetails")} <GoArrowUpRight size={24} />
            </button>
          </div>
        </div>
        <div className="wallet-recovery-img-box"></div>
      </div>
    </div>
  );
};

export default WalletRecovery;
