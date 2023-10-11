import { useState, useRef, useEffect } from "react";

const AccordionList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentRef = useRef();

  useEffect(() => {
    if (isOpen) {
      currentRef.current.style.maxHeight = `${ currentRef.current.offsetHeight }px`;
      currentRef.current.style.visibility = "visible";
      currentRef.current.style.opacity = 1;
    } else {
      currentRef.current.style.maxHeight = 0;
      currentRef.current.style.visiblity = "hidden";
      currentRef.current.style.opacity = 0;
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <ul>
        <li className="accordion-li">
          <button onClick={toggleAccordion}>menu</button>
          <ul ref={currentRef}>
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
    </>
  );
};

export default AccordionList;