import React, { useEffect, useState } from "react";
import { Main } from "../../api";

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
        {news.slice(0, 1).map((item, index) => (
          <div className="news-box news-inter-box" key={index}>
            <img className="news-img-block" src={item.image} alt={item.title} />
            <div className="gap-page d-flex justify-content-between align-items-end ">
              <div className="d-flex flex-column title-inter-block">
                <h4 className="news-description"> {item.title} </h4>
                <span className="text-span">{item.created_at}</span>
              </div>
              <div className="news-icons"></div>
            </div>
          </div>
        ))}
        <div className="news-box news-block2">
          {news.map((item, index) => (
            <div className="news-box2" key={index}>
              <div className="griting d-flex">
                <div className="news-box2-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="news-text-box d-flex flex-column justify-content-between">
                  <h4 className="news-description">{item.title}</h4>
                  <span>{item.created_at}</span>
                </div>
              </div>
              <div className="gridddddddd">
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
