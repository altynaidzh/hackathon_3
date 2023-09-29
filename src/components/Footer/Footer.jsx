import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container footer-block">
        <div class="footer-block_left">
          <ul class="footer__list">
            <h4>Contacts</h4>
            <li class="footer__item">
              <img src="./images/whatsapp.png" alt="" class="beforeimg" />
              +996999550088
            </li>
            <li class="footer__item">
              <a
                href="https://www.instagram.com/sheishenbekovv_/"
                class="footer__item__link"
              >
                <img src="./images/instagram.png" alt="" class="beforeimg" />
                instagram
              </a>
            </li>
          </ul>
          <h6 class="footer__title">Made by Makers students</h6>
        </div>
        <div class="footer-block_right">
          <ul>
            <h4>sources</h4>
            <li class="footer__item footer__item_right">
              <a href="https://concept.kg/" class="footer__item__link">
                Idea
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
