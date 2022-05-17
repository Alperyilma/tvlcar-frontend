import { Button } from "react-bootstrap";
import React from "react";
import "./bookbar.css";
import { Link } from "react-router-dom";

const Bookbar = () => {
  return (
    <div className="bookbar">
      <h3>Explorer our cars and book now</h3>
      <div>
        <Button variant="secondary" as={Link} to="/vehicles">
          BOOK NOW
        </Button>
      </div>
    </div>
  );
};

export default Bookbar;
