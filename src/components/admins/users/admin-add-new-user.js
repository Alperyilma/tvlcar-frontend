import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import PasswordInput from "../../users/common/password-input/password-input";
import * as Yup from "yup";
import { useFormik } from "formik";
import MaskedInput from 'react-maskedinput'
import { toast } from "react-toastify";
import Spacer from "../../users/common/spacer/spacer";
import { adminRegister } from "../../../api/admin-user-service";


const AdminAddNewUser = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    email: "",
    password: "",
    confirmPassword: "",
    roles: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter first name"),
    lastName: Yup.string().required("Please enter last name"),
    phoneNumber: Yup.string().required("Please enter phone")
    .required()
      .test(
        "includes_",
        "Please enter your phone number",
        (value) => value && !value.includes("_")
      ),
    address: Yup.string().required("Please enter address"),
    zipCode: Yup.string().required("Please enter zip code"),
    email: Yup.string().required("Please enter email"),
    password: Yup.string().required("Please enter password")
    .min(8, "Must be at least 8 characters")
    .matches(/[a-z]+/, "One lowercase character")
    .matches(/[A-Z]+/, "One lowercase character")
    .matches(/[!@#$%^&*.,/()_+-]+/, "One lowercase character")
    .matches(/\d+/, "Add a digit"),
    confirmPassword: Yup.string()
    .required("Please re-enter your password")
    .oneOf([Yup.ref("password")], "Password fields doesn't match"),
  });

  const onSubmit = async (values) =>{
      setLoading(true)
      const data = {...values, roles:[values.roles]}
      try{
        const resp = await adminRegister(data);
        console.log(resp.data)
        toast("You are registered successfully");
        setLoading(false);
        formik.resetForm();
      }
      catch(err){
          console.log(err)
          toast(err.response.data.message)
          setLoading(false);
      }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
      <>
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("firstName")}
          isInvalid={formik.touched.firstName && formik.errors.firstName}
          isValid={formik.touched.firstName && !formik.errors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("lastName")}
          isInvalid={formik.touched.lastName && formik.errors.lastName}
          isValid={formik.touched.lastName && !formik.errors.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          as={MaskedInput}
          mask="(111) 111-1111"
          {...formik.getFieldProps("phoneNumber")}
          isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
          isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.phoneNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("address")}
          isInvalid={formik.touched.address && formik.errors.address}
          isValid={formik.touched.address && !formik.errors.address}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.address}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("zipCode")}
          isInvalid={formik.touched.zipCode && formik.errors.zipCode}
          isValid={formik.touched.zipCode && !formik.errors.zipCode}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.zipCode}
        </Form.Control.Feedback>
      </Form.Group>

        <Spacer height={20}/>
        <hr/>
        <Spacer height={20}/>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && formik.errors.email}
          isValid={formik.touched.email && !formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <PasswordInput {...formik.getFieldProps("password")}
          isInvalid={formik.touched.password && formik.errors.password}
          isValid={formik.touched.password && !formik.errors.password}
          error={formik.errors.password} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password Confirm</Form.Label>
        <PasswordInput {...formik.getFieldProps("confirmPassword")}
          isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
          isValid={formik.touched.confirmPassword && !formik.errors.confirmPassword}
          error={formik.errors.confirmPassword}/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Roles</Form.Label>
        <Form.Select defaultValue="Choose..."
    
        {...formik.getFieldProps("roles")}
        isInvalid={formik.touched.roles && formik.errors.roles}
        isValid={formik.touched.roles && !formik.errors.roles}
         
         >
        <option value="Administrator">Admin</option>
        <option value="Customer">User</option>
  
      </Form.Select>
      </Form.Group>
        
      <Button variant="primary" type="submit" disabled={loading}>
        {loading && <Spinner animation="border" size="sm" />} Register
      </Button>
    </Form>

    <Spacer height={20}/>
    </>
  );
};

export default AdminAddNewUser;
