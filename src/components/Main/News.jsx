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
        {news?.slice(0, 1).map((item, index) => (
          <div className="news-box news-inter-box" key={index}>
            <img className="news-img-block" src={item.image} alt={item.title} />
            <div className="gap-page d-flex justify-content-between align-items-end ">
              <div className="d-flex flex-column title-inter-block">
                <h4 className="news-description"> {item.title} </h4>
                <span className="text-span">{item.created_at}</span>
              </div>
              <div className="news-icons d-flex align-items-center justify-content-center">
                <FiArrowUpRight size={30} />
              </div>
            </div>
          </div>
        ))}
        <div className="news-box">
          {news.map((item, index) => (
            <div className="news-box2 " key={index}>
              <div className="griting">
                <div className="news-boxs2-img">
                  <img src={item.image} alt="" />
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <h4 className="news-description">{item.title}</h4>
                <span>{item.created_at}</span>
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
