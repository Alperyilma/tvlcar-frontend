import React from "react";
import data from "./whyus.json";
import "./whyus.css";
import { Container } from "react-bootstrap";
import SectionHeader from "../section-header/section-header";

const WhyUs = () => {
  return (
    <div className="whyus">
    <SectionHeader title="Why People Like Us" desc="Inbecilloque elegans errorem concedo etsi electram." />
      <Container>
        <ul className="row g-5">
          {data.map((item, index) => (
            <li key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
              <span>{item.title}</span>
              <br />
              {item.desc}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default WhyUs;
