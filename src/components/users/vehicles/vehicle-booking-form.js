import { Button, Spinner } from "react-bootstrap";
import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  FloatingLabel,
  InputGroup,
} from "react-bootstrap";
import SectionHeader from "../common/section-header/section-header";
import * as Yup from "yup";
import MaskedInput from "react-maskedinput";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Spacer from "../common/spacer/spacer";

const VehicleBookingForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpDate: "",
    time: "",
    dropOffDate: "",
    cardNumber: "",
    nameOnCard: "",
    expireDate: "",
    cvc: "",
  };

  const validationSchema = Yup.object({
    pickUpLocation: Yup.string().required("Please enter your pick up location"),
    dropOffLocation: Yup.string().required(
      "Please enter your drop off location"
    ),
    pickUpDate: Yup.string().required("Please enter your pick up date"),
    time: Yup.string().required("Please enter your time"),
    dropOffDate: Yup.string().required("Please enter your drop off date"),
    cardNumber: Yup.string()
      .required()
      .length(19, "Please enter your card number")
      .test(
        "includes_",
        "Please enter your phone number",
        (value) => value && !value.includes("_")
      ),
    nameOnCard: Yup.string().required("Please enter your name on card"),
    expireDate: Yup.string()
      .required()
      .test(
        "includes_",
        "Please enter your phone number",
        (value) => value && !value.includes("_")
      )
      .length(5, "Please enter your expire date"),
    cvc: Yup.string().required("Please enter your cvc"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    // try {
    //   const resp = await register(values);
    //   toast("You are registered successfully");
    //   setLoading(false);
    //   formik.resetForm();
    //   setDefaultTab("login");
    // } catch (err) {
    //   toast(err.response.data.message);
    //   setLoading(false);
    // }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <SectionHeader title="Booking Form" />
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Container>
          <Row>
            <Col md={6}>
              <FloatingLabel label="Pickup Location" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Pickup Location"
                  {...formik.getFieldProps("pickUpLocation")}
                  isInvalid={
                    formik.touched.pickUpLocation &&
                    formik.errors.pickUpLocation
                  }
                  isValid={
                    formik.touched.pickUpLocation &&
                    !formik.errors.pickUpLocation
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.pickUpLocation}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel label="Dropoff Location" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Dropoff Location"
                  {...formik.getFieldProps("dropOffLocation")}
                  isInvalid={
                    formik.touched.dropOffLocation &&
                    formik.errors.dropOffLocation
                  }
                  isValid={
                    formik.touched.dropOffLocation &&
                    !formik.errors.dropOffLocation
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.dropOffLocation}
                </Form.Control.Feedback>
              </FloatingLabel>

              <InputGroup className="mb-3">
                <FloatingLabel label="Pickup Date" className="flex-grow-1">
                  <Form.Control
                    type="date"
                    placeholder="Pickup Date"
                    {...formik.getFieldProps("pickUpDate")}
                    isInvalid={
                      formik.touched.pickUpDate && formik.errors.pickUpDate
                    }
                    isValid={
                      formik.touched.pickUpDate && !formik.errors.pickUpDate
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.pickUpDate}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label="Time">
                  <Form.Control
                    type="time"
                    placeholder="Pickup Time"
                    {...formik.getFieldProps("time")}
                    isInvalid={formik.touched.time && formik.errors.time}
                    isValid={formik.touched.time && !formik.errors.time}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.time}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>

              <InputGroup className="mb-3">
                <FloatingLabel label="Dropoff Date" className="flex-grow-1">
                  <Form.Control
                    type="date"
                    placeholder="Dropoff Date"
                    {...formik.getFieldProps("dropOffDate")}
                    isInvalid={
                      formik.touched.dropOffDate && formik.errors.dropOffDate
                    }
                    isValid={
                      formik.touched.dropOffDate && !formik.errors.dropOffDate
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.dropOffDate}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label="Time">
                  <Form.Control
                    type="time"
                    placeholder="Dropoff Time"
                    {...formik.getFieldProps("time")}
                    isInvalid={formik.touched.time && formik.errors.time}
                    isValid={formik.touched.time && !formik.errors.time}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.time}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>
            </Col>

            <Col md={6}>
              <FloatingLabel label="Card Number" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="####-####-####-####"
                  as={MaskedInput}
                  mask="1111-1111-1111-1111"
                  {...formik.getFieldProps("cardNumber")}
                  isInvalid={
                    formik.touched.cardNumber && formik.errors.cardNumber
                  }
                  isValid={
                    formik.touched.cardNumber && !formik.errors.cardNumber
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.cardNumber}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel label="Name on Card" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name on Card"
                  {...formik.getFieldProps("nameOnCard")}
                  isInvalid={
                    formik.touched.nameOnCard && formik.errors.nameOnCard
                  }
                  isValid={
                    formik.touched.nameOnCard && !formik.errors.nameOnCard
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.nameOnCard}
                </Form.Control.Feedback>
              </FloatingLabel>

              <InputGroup className="mb-3">
                <FloatingLabel label="Expire Date" className="flex-grow-1">
                  <Form.Control
                    type="text"
                    as={MaskedInput}
                    mask="11/11"
                    placeholder="12/12"
                    {...formik.getFieldProps("expireDate")}
                    isInvalid={
                      formik.touched.expireDate && formik.errors.expireDate
                    }
                    isValid={
                      formik.touched.expireDate && !formik.errors.expireDate
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.expireDate}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label="CVC" className="flex-grow-1">
                  <Form.Control
                    type="text"
                    placeholder="CVC"
                    as={MaskedInput}
                    mask="111"
                    {...formik.getFieldProps("cvc")}
                    isInvalid={formik.touched.cvc && formik.errors.cvc}
                    isValid={formik.touched.cvc && !formik.errors.cvc}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.cvc}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>

              <Form.Check
                type="checkbox"
                label="I have read and aggree the sales contract"
                id="contract"
              />
            </Col>
            <Col className="text-center">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                disabled={loading}
              >
                {loading && <Spinner animation="border" size="sm" />}
                Book Now
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default VehicleBookingForm;
