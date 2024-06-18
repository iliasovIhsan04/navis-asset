import React, { useEffect, useState } from "react";
import { Main } from "../../api";


const News = () => {
const [news, setNews] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      const res = await Main.getNews();
      setNews(res);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="news wallet-recovery">
        <div className="news-box"></div>
        <div className="news-box"></div>
      </div>
    </div>
  );
};

export default News;
