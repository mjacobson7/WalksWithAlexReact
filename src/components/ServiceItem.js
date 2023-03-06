import React, { useState } from "react";

const ServiceItem = ({ title, price, visibleText, hiddenText, image }) => {
  const [showHiddenText, setshowHiddenText] = useState(false);

  return (
    <li className="card">
      <img src={image} alt="" className="card__img" />
      <h3 className="card__title">{title}</h3>
      <p className="card__price paragraph-text">{price}</p>
      <span className="card__subtitle paragraph-text">
        {Array.isArray(visibleText)
          ? visibleText.map((text, index) => {
              return (
                <ul key={index}>
                  <li className="card__list-item">{text}</li>
                </ul>
              );
            })
          : visibleText}
        {!showHiddenText && hiddenText && (
          <span className="card__dots card__dots_visible">
            {Array.isArray(hiddenText) ? "" : "... "}
            <button
              className="card__link"
              onClick={() => setshowHiddenText(true)}
            >
              Read More
            </button>
          </span>
        )}
        {showHiddenText && (
          <span className="card__read-more">
            {Array.isArray(hiddenText)
              ? hiddenText.map((text, index) => {
                  return (
                    <ul key={index}>
                      <li className="card__list-item">{text}</li>
                    </ul>
                  );
                })
              : hiddenText}

            <button
              className="card__link"
              onClick={() => setshowHiddenText(false)}
            >
              Read Less
            </button>
          </span>
        )}
      </span>
      <a
        href="mailto:info@walkswithalex.com"
        target="_blank"
        className="card__btn button button_color_yellow"
        rel="noreferrer"
      >
        Book Now
      </a>
    </li>
  );
};

export default ServiceItem;
