import "./SliderMeetPeople.css";
import slideImage1 from "../images/SliderMTP-1.png";
import slideImage2 from "../images/SliderMTP-2.png";
import slideImage3 from "../images/SliderMTP-3.png";
import slideImage4 from "../images/SliderMTP-4.png";
import slideImage5 from "../images/SliderMTP-5.png";
import slideImage6 from "../images/SliderMTP-6.png";
import slideImage7 from "../images/SliderMTP-7.png";
import slideImage8 from "../images/SliderMTP-8.png";
import slideImage9 from "../images/SliderMTP-9.png";
import { useState } from "react";

function SliderMeetPeople() {
  const [index, setIndex] = useState(0);

  const handleClick = (direction) => {
    direction = direction.target;
    // console.log(direction);
    const slider = direction.closest(".slider").querySelector(".slide-wrapper");

    if (index > 1 || index < -1) {
      setIndex(0);
      return;
    }
    if (direction.classList.contains("slide-prev")) {
      setIndex(index + 1);
      console.log(index);
      slider.style.setProperty("--slide-i", index + 1);
    }
    if (direction.classList.contains("slide-next")) {
      setIndex(index - 1);
      slider.style.setProperty("--slide-i", index - 1);
    }

    // console.log(index);
    // console.log(slider);
  };

  return (
    <div className="mb-11">
      <div className="mt-20 mx-20 syneFont text-xl md:text-4xl text-neutral-800">
        {/* <p className="dash-mark">&mdash;</p> */}
        <h3 className="font-normal">Meet the people</h3>
        <h3 className="font-semibold">We are Working With</h3>
      </div>
      <div className="slider">
        <div className="slide-btn flex justify-end items-center">
          <button className="slide-prev" onClick={handleClick}>
            &larr;
          </button>
          <button className="slide-next" onClick={handleClick}>
            &rarr;
          </button>
        </div>
        <div className="slide-container">
          <div className="slide-wrapper">
            <img className="slide" src={slideImage1} alt="slide" />
            <img className="slide" src={slideImage2} alt="slide" />
            <img className="slide" src={slideImage3} alt="slide" />
            <img className="slide" src={slideImage4} alt="slide" />
            <img className="slide" src={slideImage5} alt="slide" />
            <img className="slide" src={slideImage6} alt="slide" />
            <img className="slide" src={slideImage7} alt="slide" />
            <img className="slide" src={slideImage8} alt="slide" />
            <img className="slide" src={slideImage9} alt="slide" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderMeetPeople;
