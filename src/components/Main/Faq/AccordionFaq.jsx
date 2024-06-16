import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

export default function AccordionFaq({ title, text, isOpen, onClick, contentRef }) {
    return (
        <div className={`wrapper ${isOpen ? 'active' : ''}`}>
            <button
                className={`question-container between  ${isOpen ? "active" : ""}`}
                onClick={onClick}
            >
                <p className={`question-content white ${isOpen ? "active" : ''}`}>{title}</p>
                <RiArrowDropDownLine className={`arrow white ${isOpen ? "active" : ""}`} />
            </button>
            <div
                ref={contentRef}
                className="answer-container"
                style={{ maxHeight: isOpen ? contentRef.current.scrollHeight + "px" : "0px" }}
            >
                <p className="answer-content textP white">{text}</p>
            </div>
        </div>
    )
}
