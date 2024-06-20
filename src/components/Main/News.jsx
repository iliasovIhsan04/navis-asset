import React, { useEffect, useState } from "react";
import { Main } from "../../api";
import { FiArrowUpRight } from "react-icons/fi";

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
      <div className="news wallet-recovery">
        {news?.map((item, index) => (
          <>
            {item.is_display === true ? (
              <div className="news-box news-inter-box" key={index}>
                <img
                  className="news-img-block"
                  src={item.img}
                  alt={item.title}
                />
                <div className="gap-page  align-items-end ">
                  <div className="d-flex flex-column title-inter-block">
                    <h4 className="news-description"> {item.title} </h4>
                    <span className="text-span">{item.created_at}</span>
                  </div>
                  <div className="news-icons-block-inter">
                    <div className="news-icons"></div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ))}
        <div className="news-box d-flex flex-column">
          {news.map((item, index) => (
            <div className="news-box2 d-flex" key={index}>
              <div className="griting d-flex">
                <div className="news-box2-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="d-flex flex-column justify-content-between news-text-item">
                  <h4 className="news-description">{item.title}</h4>
                  <span>{item.created_at}</span>
                </div>
              </div>
              <div className="news-icons-block-inter">
                <div className="news-icons"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
