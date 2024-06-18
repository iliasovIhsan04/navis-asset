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

  console.log(news);

  return (
    <div className="container">
      <div className="news wallet-recovery">
        <div className="news-box"> </div>
        <div className="news-box">
          {news?.map((newsItem) => (
            <div key={newsItem.id}>
              <div>
                <h1>{newsItem.title}</h1>
                <p>{newsItem.description}</p>
                {newsItem.comments.map((comment, index) => (
                  <div key={index}>
                    <h2>{comment.author}</h2>
                    <p>{comment.created_at}</p>
                    <p>{comment.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
