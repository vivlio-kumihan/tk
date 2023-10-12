import { useState, useRef } from "react";

const AccordionList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const currentRef = useRef();
    
  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      currentRef.current.classList.add("active");
      // currentRef.current.style.height = `${currentRef.current.offsetHeight}px`;
    } else {
      currentRef.current.classList.remove("active");
      // currentRef.current.style.height = "0px";
    }
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