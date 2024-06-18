import React, { useEffect, useState } from "react";
import { Main } from "../../api";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await Main.getNews();
      setNews(res);
    //   console.log(res);
    };
    fetchData();
  }, []);

  console.log(news);

  return (
    <div className="container">
      <div className="news wallet-recovery">
        {/* <div className="news-box"> </div> */}
        <div className="news-box">
          {news?.map((index, item) => (
            <div key={index}>
              <div>
                <h1>{item.description}</h1>
                <p>{item.description}</p>
                {item?.comments?.map((index, comment) => (
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
