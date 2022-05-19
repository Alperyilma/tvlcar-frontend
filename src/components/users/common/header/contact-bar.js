import React from "react";
import { RiHeadphoneLine, RiMailOpenLine, RiMapPinLine } from "react-icons/ri";

const ContactBar = () => {
  return (
    <ul className="contact-bar" >
      <li>
        <RiHeadphoneLine />
        <div>
          <a href="tel:0467878879">(467)-8788-79</a>
          <br />
          <a href="tel:0467878879">(555)-8788-79</a>
        </div>
      </li>
      <li className="d-none d-lg-flex">
        <RiMailOpenLine />
        <div>
          <a href="mailto:info@trvlcar.com">info@trvlcar.com</a>
          <br />
          <a href="mailto:support@trvlcar.com">alperyilmaz.be@gmail.com</a>
        </div>
      </li>
      <li>
        <RiMapPinLine />
        <div>
          sjkhsdjfhsjkdfhksdf
          <br />
          Florida USA
        </div>
      </li>
    </ul>
  );
};

export default ContactBar;
