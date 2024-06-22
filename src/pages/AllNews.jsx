import React, { useEffect, useState } from "react";
import { Main } from "../api";

const AllNews = () => {
  const [allNews, setAllNews] = useState([]);
  const lang = localStorage.getItem("lang");
  useEffect(() => {
    const fetchData = async () => {
      const res = await Main.getNews();
      if (lang === "ru") {
        setAllNews(res);
      } else {
        setAllNews(res);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="all-news">
      <div className="container">
        <div className="news wallet-recovery">
          {allNews?.map((el, index) => (
            <>
              {el.is_display === true ? (
                <div className="news-box news-inter-box" key={index}>
                  <img className="news-img-block" src={el.img} alt={el.title} />
                  <div className="gap-page  align-items-end ">
                    <div className="d-flex flex-column title-inter-block">
                      <h4 className="news-description"> {el.title} </h4>
                      <span className="text-span">{el.created_at}</span>
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
            {allNews?.map((item, index) => (
              <div className="news-box2 d-flex " key={index}>
                <div className="news-box2-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="d-flex flex-column justify-content-between news-box-inter">
                  <h4 className="news-description">{item.title}</h4>
                  <div className="news-icons-block-inter d-flex align-items-end justify-content-between">
                    <span>{item.created_at}</span>
                    <div className="news-icons"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNews;
