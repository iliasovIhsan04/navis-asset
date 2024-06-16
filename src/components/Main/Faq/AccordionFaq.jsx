import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function AccordionFaq({ title, text, isOpen, onClick, contentRef }) {
    return (
        <div className={`wrapper `}>
            <button
                className={`question-container d-flex align-items-center justify-content-between`}
                onClick={onClick}
            >
                <h3 className="question-content title-h3">{title}</h3>
                <div className='question-box d-flex align-items-center justify-content-center'>
                    {isOpen ? (
                        <FaMinus className='arrow' size={24} />
                    ) : (
                        <FaPlus className='arrow' size={24}  />
                    )
                    }
                </div>
            </button>
            <div
                ref={contentRef}
                className="answer-container"
                style={{ maxHeight: isOpen ? contentRef.current.scrollHeight + "px" : "0px" }}
            >
                <p className="answer-content textP white">{text}</p>
            </div>
            <div className="border"></div>
        </div>
    )
}
