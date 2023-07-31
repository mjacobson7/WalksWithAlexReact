import React, { useState } from "react";
import ImagePopup from "./ImagePopup";

import armImage from "../images/rescue-partners_arm.webp";
import hopeImage from "../images/rescue-partners_hope.webp";
import hitImage from "../images/rescue-partners_hit.webp";
import iswmpImage from "../images/iswmp.webp";

import rescue01 from "../images/rescue01.webp";
import rescue02 from "../images/rescue02.webp";
import rescue03 from "../images/rescue03.webp";
import rescue04 from "../images/rescue04.webp";
import rescue05 from "../images/rescue05.webp";
import rescue06 from "../images/rescue06.webp";
import rescue07 from "../images/rescue07.webp";
import rescue08 from "../images/rescue08.webp";
import rescue09 from "../images/rescue09.webp";
import rescue10 from "../images/rescue10.webp";
import rescue11 from "../images/rescue11.webp";
import rescue12 from "../images/rescue12.webp";
import rescue13 from "../images/rescue13.webp";
import rescue14 from "../images/rescue14.webp";
import rescue15 from "../images/rescue15.webp";
import rescue16 from "../images/rescue16.webp";
import rescue17 from "../images/rescue17.webp";
import rescue18 from "../images/rescue18.webp";
import rescue19 from "../images/rescue19.webp";
import rescue20 from "../images/rescue20.webp";
import rescue21 from "../images/rescue21.webp";
import rescue22 from "../images/rescue22.webp";
import rescue23 from "../images/rescue23.webp";
import rescue24 from "../images/rescue24.webp";
import rescue25 from "../images/rescue25.webp";
import rescue26 from "../images/rescue26.webp";
import rescue27 from "../images/rescue27.webp";
import rescue28 from "../images/rescue28.png";

const Rescue = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const rescueImages = [
    { id: 1, link: rescue01, name: "Some name here", colSpan: 2, rowSpan: 2 },
    {
      id: 2,
      link: rescue02,
      name: "Some name here",
      colSpan: 2,
      rowSpan: null,
    },
    {
      id: 3,
      link: rescue03,
      name: "Some name here",
      colSpan: 2,
      rowSpan: null,
    },
    {
      id: 4,
      link: rescue10,
      name: "Some name here",
      colSpan: null,
      rowSpan: null,
    },
    {
      id: 5,
      link: rescue07,
      name: "Some name here",
      colSpan: 2,
      rowSpan: null,
    },
    {
      id: 6,
      link: rescue04,
      name: "Some name here",
      colSpan: null,
      rowSpan: null,
    },
    {
      id: 7,
      link: rescue06,
      name: "Some name here",
      colSpan: 2,
      rowSpan: null,
    },
    {
      id: 8,
      link: rescue05,
      name: "Some name here",
      colSpan: 2,
      rowSpan: null,
    },
    { id: 9, link: rescue11, name: "Some name here", colSpan: 2, rowSpan: 2 },
    {
      id: 10,
      link: rescue08,
      name: "Some name here",
      colSpan: null,
      rowSpan: null,
    },
    { id: 11, link: rescue09, name: "Some name here", colSpan: 2, rowSpan: 2 },
    {
      id: 12,
      link: rescue12,
      name: "Some name here",
      colSpan: null,
      rowSpan: null,
    },
    {
      id: 13,
      link: rescue13,
      name: "Some name here",
      colSpan: null,
      rowSpan: null,
    },
    {
      id: 14,
      link: rescue14,
      name: "Some name here",
      colSpan: 3,
      rowSpan: null,
    },
    {
      id: 15,
      link: rescue15,
      name: "Some name here",
      colSpan: 2,
      rowSpan: null,
    },
    {
      id: 16,
      link: rescue16,
      name: "Some name here",
      colSpan: 2,
      rowSpan: null,
    },
    {
      id: 17,
      link: rescue19,
      name: "Some name here",
      colSpan: null,
      rowSpan: null,
    },
    {
      id: 18,
      link: rescue20,
      name: "Some name here",
      colSpan: null,
      rowSpan: null,
    },
    { id: 19, link: rescue26, name: "Some name here", colSpan: 3, rowSpan: 2 },
    {
      id: 20,
      link: rescue18,
      name: "Some name here",
      colSpan: 3,
      rowSpan: null,
    },
    {
      id: 21,
      link: rescue21,
      name: "Some name here",
      colSpan: 2,
      rowSpan: null,
    },
    {
      id: 22,
      link: rescue22,
      name: "Some name here",
      colSpan: null,
      rowSpan: null,
    },
    { id: 23, link: rescue23, name: "Some name here", colSpan: 3, rowSpan: 2 },
    {
      id: 24,
      link: rescue24,
      name: "Some name here",
      colSpan: 3,
      rowSpan: null,
    },
    {
      id: 25,
      link: rescue25,
      name: "Some name here",
      colSpan: 3,
      rowSpan: null,
    },
    {
      id: 26,
      link: rescue17,
      name: "Some name here",
      colSpan: 2,
      rowSpan: null,
    },
    {
      id: 27,
      link: rescue27,
      name: "Some name here",
      colSpan: 2,
      rowSpan: null,
    },
    {
      id: 28,
      link: rescue28,
      name: "Some name here",
      colSpan: 2,
      rowSpan: null,
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleImageNavigation = (currentImage, direction) => {
    const currentIndex = rescueImages.findIndex(
      (image) => image.id === currentImage.id
    );
    if (currentIndex >= 0) {
      if (currentIndex <= rescueImages.length - 1) {
        if (direction === "left") {
          setSelectedImage(rescueImages[Math.max(currentIndex - 1, 0)]);
        } else if (direction === "right") {
          setSelectedImage(rescueImages[currentIndex + 1]);
        }
      }
    }
  };

  return (
    <main className="page">
      <h1 className="heading-text page__title">Rescue</h1>
      <p className="page__subtitle paragraph-text">
        All services are half off for our rescue partners. Any pets adopted
        through them receive a $30 credit toward any service.
      </p>
      <div className="rescue-partners">
        <a
          href="https://istandwithmypack.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="rescue-partners__image" src={iswmpImage} alt="" />
        </a>
        <a
          href="https://www.theanimalrescuemission.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="rescue-partners__image" src={armImage} alt="" />
        </a>
        <a
          href="https://www.animalhopeandwellness.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="rescue-partners__image" src={hopeImage} alt="" />
        </a>
        <a
          href="https://www.hitlivingfoundation.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="rescue-partners__image" src={hitImage} alt="" />
        </a>
      </div>

      <div className="partner" style={{ textAlign: 'center', margin: '75px 0 50px' }}>
        <h2 className="heading-text">Partner With Us!</h2>
        <p className="paragraph-text">
          Discounts are available for Non-Profit Rescue Groups and their
          adopters. Email{" "}
          <a href="mailto:contact@thegratefuldogla.com">
            contact@thegratefuldogla.com
          </a>{" "}
          for more information!
        </p>
      </div>

      <ul className="photo-collage">
        {rescueImages.map((image) => (
          <li
            key={image.id}
            className={`photo-collage__item ${
              image.colSpan
                ? "photo-collage__item_col-span-" + image.colSpan
                : null
            } ${
              image.rowSpan
                ? "photo-collage__item_row-span-" + image.rowSpan
                : null
            }`}
          >
            <img
              src={image.link}
              alt=""
              className="photo-collage__image"
              onClick={() => handleImageClick(image)}
            />
          </li>
        ))}
      </ul>
      <ImagePopup
        selectedImage={selectedImage}
        hideLeftNav={rescueImages[0].id === selectedImage?.id}
        hideRightNav={
          rescueImages[rescueImages.length - 1].id === selectedImage?.id
        }
        onClose={() => setSelectedImage(null)}
        onOutsideClick={() => setSelectedImage(null)}
        onNavigate={handleImageNavigation}
      />
    </main>
  );
};

export default Rescue;
