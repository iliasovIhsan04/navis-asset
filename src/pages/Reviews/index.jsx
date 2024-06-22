import React from "react";
import { t } from "i18next";
import SeeReview from "./SeeReview";

export default function Reviews() {
  return (
    <div className="container">
      <div className="reviews">
        <h2 className="title-page"> {t("reviewsFrom")} </h2>
        <SeeReview />
      </div>
    </div>
  );
}
