import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function AccordionFaq({
  question,
  answer,
  isOpen,
  onClick,
  contentRef,
}) {
  return (
    <div className={`wrapper `}>
      <button className={`question-container`} onClick={onClick}>
        <h3 className="question-content">{question}</h3>

        <div className="question-box d-flex align-items-center justify-content-center">
          {isOpen ? (
            <FaMinus className="arrow" size={20} />
          ) : (
            <FaPlus className="arrow" size={20} />
          )}
        </div>
      </button>
      <div
        ref={contentRef}
        className="answer-container"
        style={{
          maxHeight: isOpen ? "1000px" : "0px",
        }}
      >
        <p className="answer-description">{answer}</p>
      </div>
      <div className="border"></div>
    </div>
  );
}
