import React, { useEffect, useRef, useState } from "react";
import { t } from "i18next";
import AccordionFaq from "./AccordionFaq";
import { Main } from "../../../api";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faq, setFaq] = useState([]);
  const contentRef = useRef();
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await Main.getFaq();
      setFaq(res.FAQ);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div id="faq" className="top-page">
        <h2 className="title-page d-flex align-items-center justify-content-center">
          {t("faq")}
        </h2>
        <div className="faqAccordions">
          {faq?.map((item, index) => (
            <AccordionFaq
              key={index}
              contentRef={contentRef}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
