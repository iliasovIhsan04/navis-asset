import React from 'react'
import { t } from 'i18next'
import SeeReview from './SeeReview'


export default function Reviews() {
    return (
        <div className="container">
            <div className="reviews">
                <h1 className="title-page"> {t("reviewsFrom")} </h1>
                <SeeReview />
            </div>
        </div>
    )
}
