import { t } from "i18next";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router";

const WalletRecovery = () => {
  const navigate = useNavigate();
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
          <div className="d-flex wallet-btn-block" style={{ gap: "10px" }}>
            <button
              className="submit-application-btn "
              onClick={() => navigate("/application")}
            >
              {t("submitYourApplication")}
            </button>
            <button className="more-details-btn d-flex align-items-center justify-content-center">
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
