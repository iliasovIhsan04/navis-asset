import React, { useEffect, useState } from 'react'
import user from "../../assets/img/user.svg"
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Pages } from '../../api';

export default function SeeReview() {
    const [review, setReviews] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await Pages.getReviews();
            setReviews(response.data);
            console.log(response);
        }
        fetchData();
    }, [])
    const data = review
    return (
        <div className="review g-10">
            {
                data?.map((item, index) => (
                    <div className="review-card d-flex flex-column justify-content-between" key={index}>
                        <div className="d-flex g-10">
                            <CiStar size={20} />
                            <FaStar size={20} />
                        </div>
                        <p className="subtitle1 subtitle3"> «{item.review}» </p>
                        <div className="d-flex g-10">
                            <div className='user d-flex justify-content-center align-items-center'>
                                <img src={user} alt="" />
                            </div>
                            <div className="d-flex flex-column g-10">
                                <h3 className='subtitle1 oval2'> {item.user} </h3>
                                <p> {item.date} </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
