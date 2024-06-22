import React, { useEffect, useState } from "react";
import { Main } from "../api";
import { useParams } from "react-router";
import { t } from "i18next";
import { NavLink } from "react-router-dom";

const NewsDetails = () => {
  const { slug } = useParams();
  const [newsDetails, setNewsDetails] = useState([]);
  const lang = localStorage.getItem("lang");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Main.getNewsDetails(lang, slug);
        setNewsDetails(res);
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };
    fetchData();
  }, [slug, lang]);
  return (
    <div className="news-details">
      <div className="container">
        <NavLink to="/">
          <div className="back-button"></div>
        </NavLink>
        <div className="wallet-recovery news-details-grid">
          <div className="d-grid news-details-grid-box1">
            <div className="news-box news-inter-box">
              <h3 className="question-content">{newsDetails?.news?.title}</h3>
              <p className="text-span">{newsDetails?.news?.created_at}</p>
              <img
                className="news-img-block"
                src={newsDetails?.news?.img}
                alt={newsDetails?.news?.title}
              />
            </div>
            <p className="text-span news-details-description">
              {newsDetails?.news?.description}
            </p>
          </div>
          <div className="news-box d-flex flex-column">
            <h3 className="question-content">{t("readAlso")}</h3>
            {newsDetails?.similar_news?.map((item, index) => (
              <NavLink to={`/news-details/${item.slug}`}>
                <div className="news-box2 d-flex " key={index}>
                  <div className="news-box2-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="d-flex flex-column justify-content-between news-box-inter">
                    <h4 className="news-description">{item.title}</h4>
                    <div className="news-icons-block-inter d-flex align-items-end justify-content-between">
                      <span className="text-span">{item.created_at}</span>
                      <div className="news-icons"></div>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
