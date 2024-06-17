import React from 'react'
import { t } from 'i18next'
import founder from "../assets/img/founder-img.svg"
import floor from "../assets/img/about-img.svg"
import colleg from "../assets/img/about-collega.svg"

export default function AboutUs() {
    return (
        <div className='container'>
            <div className="about-us">
                <h1 className='title-page'> {t("about")} </h1>
                <div className="we-will-help">
                    <div className="about">
                        <div className="d-flex g-10">
                            <div className="customer-card d-flex align-items-center g-10">
                                <img src={founder} alt="" />
                                <div className="founder-name d-flex flex-column g-10">
                                    <h3 className="title-basic"> {t("founder")} </h3>
                                    <h3 className="subtitle"> {t("founderFN")} </h3>
                                </div>
                            </div>
                            <div className="customer-card d-flex flex-column justify-content-between">
                                <h2 className='title-page'> 45+ </h2>
                                <p className='title-basic'> {t("satisfiedClients")} </p>
                            </div>
                        </div>
                        <div className="customer-card customer-card-last d-flex flex-column justify-content-between">
                            <h2 className='title-page'> 100% </h2>
                            <p className='text-span'> {t("qualityWork")} </p>
                        </div>
                    </div>
                    <img src={floor} alt="" />
                    <img src={colleg} alt="" />
                    <div className="guarantees we-will-help d-flex">
                        <div className="guarantee-card d-flex flex-column justify-content-between">
                            <h2 className='title-page'> 10+ </h2>
                            <p className='title-basic'> {t("professional")} </p>
                        </div>
                        <div className="guarantee-card d-flex flex-column justify-content-between">
                            <h2 className='title-page'> {t("guarantee")} </h2>
                            <p className='text-span'> {t("professional")} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}