import React from 'react'
import { t } from 'i18next'
import check from "../assets/img/check.svg"

export default function Price() {
    return (
        <div className="container">
            <div className='wallet-recovery'>
                <div className="price-card customer-card">
                    <h1 className="title-page"> {t("price")} </h1>
                    <p className='text-span'>
                        {t("priceText1")}
                        <br />
                        {t("priceText2")}
                        <br />
                        {t("priceText3")}
                        <br />
                        {t("priceText4")}
                    </p>
                </div>
                <div className="price-card customer-card white">
                    <h2 className='subtitle2 subtitle1'> {t("walletRecovery")} </h2>
                    <h1 className="title-page l white"> 25% <span className="oval1 white"> {t("fromTheWallet")} </span> </h1>
                    <div className="checks d-grid">
                        <div className="check-card d-flex align-items-center g-10">
                            <img src={check} alt="" />
                            <h3 className='title-basic'> {t("checkTitle1")} </h3>
                        </div>
                        <div className="check-card d-flex align-items-center g-10">
                            <img src={check} alt="" />
                            <h3 className='title-basic'> {t("checkTitle2")} </h3>
                        </div>
                        <div className="check-card d-flex align-items-center g-10">
                            <img src={check} alt="" />
                            <h3 className='title-basic'> {t("checkTitle3")} </h3>
                        </div>
                        <div className="check-card d-flex align-items-center g-10">
                            <img src={check} alt="" />
                            <h3 className='title-basic'> {t("checkTitle4")} </h3>
                        </div>
                        <div className="check-card d-flex align-items-center g-10">
                            <img src={check} alt="" />
                            <h3 className='title-basic'> {t("checkTitle5")} </h3>
                        </div>
                    </div>
                    <button className='btn-white d-flex align-items-center justify-content-center'>
                        {t("startRecovery")}
                    </button>
                </div>
            </div>
        </div>
    )
}
