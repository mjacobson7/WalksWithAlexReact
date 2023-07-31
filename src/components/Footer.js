import React from "react";
import fearFreeImage from "../images/certification_fear_free.webp";
import iaabcImage from "../images/certification_iaabc.webp";
import familyDogMediation from "../images/certification_family-dog-meditation_1.webp";
import redCrossImage from "../images/certification_red_cross.webp";
import apdtImage from "../images/certification_apdt.webp";
import ccpdtImage from "../images/ccpdt.png";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="certifications">
        <li>
          <a
            href="https://www.ccpdt.org/dog-owners/certified-dog-trainer-directory/profile/1238846/"
            target="_blank"
            rel="noreferrer" className="certifications__link"
          >
            <img src={ccpdtImage} alt="" className="certifications__image" />
          </a>
        </li>
        <li>
          <a href="https://fearfreepets.com/" target="_blank" rel="noreferrer" className="certifications__link">
            <img src={fearFreeImage} alt="" className="certifications__image" />
          </a>
        </li>
        <li>
          <a href="https://iaabc.org/" target="_blank" rel="noreferrer" className="certifications__link">
            <img src={iaabcImage} alt="" className="certifications__image" />
          </a>
        </li>
        <li>
          <a
            href="https://www.familydogmediation.com/"
            target="_blank"
            rel="noreferrer" className="certifications__link"
          >
            <img
              src={familyDogMediation}
              alt=""
              className="certifications__image"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.redcross.org/take-a-class/first-aid/cat-dog-first-aid"
            target="_blank"
            rel="noreferrer" className="certifications__link"
          >
            <img src={redCrossImage} alt="" className="certifications__image" />
          </a>
        </li>
        <li>
          <a href="https://apdt.com/" target="_blank" rel="noreferrer" className="certifications__link">
            <img src={apdtImage} alt="" className="certifications__image" />
          </a>
        </li>
      </ul>
      <h2 className="footer__title heading-text">Contact</h2>
      <ul className="footer__contact-list">
        <li className="footer__contact-item">
          <p className="footer__subtitle">Email</p>
          <p className="footer__text">info@walkswithalex.com</p>
        </li>
        <li className="footer__contact-item">
          <p className="footer__subtitle">Hours of Operation</p>
          <p className="footer__text">Monday - Sunday</p>
          <p className="footer__text">6am - 6pm</p>
        </li>
        <li className="footer__contact-item">
          <p className="footer__subtitle">Area of Service</p>
          <p className="footer__text">San Fernando Valley</p>
        </li>
      </ul>
      <ContactForm />
    </footer>
  );
};

export default Footer;
