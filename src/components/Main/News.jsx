import React, { useEffect, useState } from "react";
import { Main } from "../../api";
import { t } from "i18next";
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const lang = localStorage.getItem("lang");
  useEffect(() => {
    const fetchData = async () => {
      const res = await Main.getNews();
      if (lang === "ru") {
        setNews(res);
      } else {
        setNews(res);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <h2 className="title-page">{t("news")}</h2>
      <div className="news-comp-img wallet-recovery">
        {news?.map((item, index) => (
          <>
            {item.is_display === true ? (
              <NavLink to={`/news-details/${item.slug}`}>
                <div
                  className="news-box1 news-inter-box d-flex flex-column justify-content-between"
                  key={index}
                >
                  <img
                    className="news-img-block"
                    src={item.img}
                    alt={item.title}
                  />
                  <div className="gap-page  align-items-end ">
                    <div className="d-flex flex-column title-inter-block">
                      <h4 className="news-description news-description-text1">
                        {item.title}
                      </h4>
                      <span className="text-span">{item.created_at}</span>
                    </div>
                    <div className="news-icons-block-inter">
                      <div className="news-icons news-icons1"></div>
                    </div>
                  </div>
                </div>
              </NavLink>
            ) : (
              ""
            )}
          </>
        ))}
        <div className="news-box d-flex flex-column">
          {news?.slice(0, 4)?.map((item, index) => (
            <>
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
            </>
          ))}
        </div>
      </div>
      <NavLink to="/all-news">
        <button className="more-news-btn d-flex align-items-center">
          {t("newsBtn")} <GoArrowUpRight size={24} />
        </button>
      </NavLink>
    </div>
  );
};

export default News;
