import "./SliderMeetPeople.css";
import "./SlideRating.css";
import { useState } from "react";

function SlideRating({ customerRating }) {
  const [index, setIndex] = useState(0);
  const [comment, setComment] = useState("...");

  const handleClick = (direction) => {
    direction = direction.target;
    console.log(direction);
    const slider = direction.closest(".slider").querySelector(".slide-wrapper");

    if (index > 1 || index < -1) {
      setIndex(0);
      return;
    }
    if (direction.classList.contains("slide-prev")) {
      setIndex(index + 1);
      slider.style.setProperty("--slide-i", index);
    }
    if (direction.classList.contains("slide-next")) {
      setIndex(index - 1);
      slider.style.setProperty("--slide-i", index);
    }
  };

  const renderCustomersRating = customerRating.map((rating) => {
    return (
      <li
        key={rating.key}
        className="client-rating px-10"
        // onClick={handleCustomerRateClick}
      >
        <div
          data-client-rating
          className="client-rating-profile flex flex-col items-center"
          onClick={(e) => {
            // let clientComment = document.querySelectorAll(
            //   "[data-rating-comments]"
            // )[0];
            let activeRating = e.target.closest("[data-client-rating]");

            // clientComment.innerHTML = rating.comments;
            setComment(rating.comments);
            if (activeRating) {
              activeRating.classList.toggle("activeRating");
              activeRating.classList.toggle("client-rating-profile");
            }
            document
              .querySelectorAll("[data-client-rating].activeRating")
              .forEach((rate) => {
                if (rate === activeRating) return;
                rate.classList.remove("activeRating");
                rate.classList.add("client-rating-profile");
              });
          }}
        >
          <div className="profileImage">{rating.profileImage}</div>
          <div>{rating.stars}</div>
          <div className="profile-name interFont font-bold text-lg">
            {rating.clientName}
          </div>
          <div className="interFont font-normal text-sm">
            {rating.ocupation}
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="slider flex justify-around">
      <div className="slide-btn pt-28">
        <button className="slide-prev" onClick={handleClick}>
          &larr;
        </button>{" "}
      </div>
      <div>
        <div className="my-5 syneFont text-center text-xl md:text-4xl text-neutral-800">
          <h3 className="font-normal">Why cutomers love</h3>
          <h3 className="font-semibold">working with us</h3>
        </div>
        <div className="flex justify-center">
          <div className="text-8xl">&#8219;</div>
          <div
            data-rating-comments
            className="rating-comments text-center pt-5 pl-10 pb-5 max-w-6xl md:max-w-2xl min-w-lg rubikFont text-sm md:text-lg text-neutral-600"
          >
            {comment}
          </div>
          <div className="text-8xl pt-8 pl-10">&#8218;</div>
        </div>
        <div className="container-ratings">
          <ul className="slide-wrapper">{renderCustomersRating}</ul>
        </div>
      </div>
      <div className="slide-btn pt-28">
        <button className="slide-next" onClick={handleClick}>
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default SlideRating;
