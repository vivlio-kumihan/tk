import { useState, useRef, useEffect } from "react";

const AccordionList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentRef = useRef();
    
  const toggleAccordion = () => {
    setIsOpen((prev) => {
      if (isOpen) {
        currentRef.current.classList.add("active");
      } else {
        currentRef.current.classList.remove("active");
      }
      return !prev;
    });
  }

  return (
    <ul>
      <li className="accordion-li">
        <button onClick={toggleAccordion}>menu</button>
        <ul id="toggleAccordionUl" ref={currentRef}>
          <li><a href="">child menu</a></li>
          <li><a href="">child menu<br />child menu</a></li>
          <li><a href="">child menu</a></li>
          <li><a href="">child menu<br />child menu</a></li>
          <li><a href="">child menu</a></li>
          <li><a href="">child menu</a></li>
        </ul>
      </li>
      <li><a href="">menu</a></li>
      <li><a href="">menu</a></li>
    </ul>
  );
};

export default AccordionList;