import React from "react";
import { Container } from "react-bootstrap";

const Map = () => {
  return (
    <Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.767765157553!2d4.043210215540185!3d50.94650777954682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c397e120eea4a3%3A0xd38b0919a2c1c400!2sDokter%20de%20Moorstraat%20109%2C%209300%20Aalst!5e0!3m2!1sen!2sbe!4v1652985601968!5m2!1sen!2sbe"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default Map;
