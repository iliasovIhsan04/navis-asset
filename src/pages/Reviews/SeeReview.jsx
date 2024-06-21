import React, { useEffect, useState } from "react";
import user from "../../assets/img/user.svg";
import { Pages } from "../../api";

export default function SeeReview() {
  const [review, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await Pages.getReviews();
      setReviews(response.data);
    };
    fetchData();
  }, []);
  const data = review;
  return (
    <div className="review g-10">
      {data?.map((item, index) => (
        <div
          className="review-card d-flex flex-column justify-content-between"
          key={index}
        >
          <div className="review-star-block d-grid">
            <div>{item.star}</div>
            <p className="subtitle1 news-description"> «{item.review}» </p>
          </div>
          <div className="d-flex g-10">
            <div className="user d-flex justify-content-center align-items-center">
              <img src={user} alt="" />
            </div>
            <div className="d-flex flex-column g-0" style={{ gap: "1px" }}>
              <h3 className="review-name review-date"> {item.user} </h3>
              <p className="review-date"> {item.created_time} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
