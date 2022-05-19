import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";

const ContactForm = () => {
  return (
    <>
      <h3>Send Message</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5}/>
        </Form.Group>
        <Button variant="primary">Send Message</Button>
      </Form>
    </>
  );
};

export default ContactForm;