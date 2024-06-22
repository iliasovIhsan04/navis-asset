import check from "../assets/img/checkImg.svg";
import { useTranslation } from "react-i18next";

export default function Price() {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      img: check,
      text: t("checkTitle1"),
    },
    {
      id: 2,
      img: check,
      text: t("checkTitle2"),
    },
    {
      id: 3,
      img: check,
      text: t("checkTitle3"),
    },
    {
      id: 4,
      img: check,
      text: t("checkTitle4"),
    },
    {
      id: 5,
      img: check,
      text: t("checkTitle5"),
    },
  ];
  return (
    <div className="container">
      <div className="wallet-recovery">
        <div className="price-card customer-card">
          <h2 className="big-text price-title"> {t("price")} </h2>
          <p className="text-span">
            {t("priceText1")}
            <br />
            {t("priceText2")}
            <br />
            {t("priceText3")}
            <br />
            {t("priceText4")}
          </p>
        </div>
        <div className="price-card customer-card">
          <h2 className="subtitle2 subtitle1"> {t("walletRecovery")} </h2>
          <h2 className="big-text">
            25%{" "}
            <span className="price-wallet-text"> {t("fromTheWallet")} </span>{" "}
          </h2>
          <div className="checks d-grid">
            {data?.map((el) => (
              <div
                key={el.id}
                className="check-card d-flex align-items-center g-10"
              >
                <div className="check-card-img d-flex d-flex align-items-center justify-content-center">
                  <img src={el.img} alt="" />
                </div>
                <h3 className="title-basic">{el.text} </h3>
              </div>
            ))}
          </div>
          <button className="btn-white d-flex align-items-center justify-content-center">
            {t("startRecovery")}
          </button>
        </div>
      </div>
    </div>
  );
}
