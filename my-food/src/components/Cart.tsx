import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik, Formik, Field, Form, FormikHelpers } from "formik";
import { IFormData } from "../utils/dummyData";
import Formikdata from "./Formikdata";

function Cart() {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
    city: "",
    age: "",
    interests: [],
    birthDate: "",
  });
  const [userList, setUserList] = useState<IFormData[]>([]);

  const win = window.localStorage;

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required !"),
    lastName: Yup.string().required("Last Name is required !"),
    email: Yup.string()
      .required("Email is required !")
      .email("Invalid Email Format"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits !")
      .required("Phone Number is required !"),
    password: Yup.string()
      .required("Password is required !")
      .min(8, "Password must be at least 8 characters !")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol !"
      )
      .matches(/[0-9]/, "Password must contain at least one number !")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter !")
      .matches(
        /[a-z]/,
        "Password must contain at least one lowercase letter !"
      ),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password are not matched !"
      )
      .required("Confirm Password is required !"),
    age: Yup.number()
      .typeError("Age must be number !")
      .min(18, "You must be at least 18 years old !")
      .max(100, "You can not be 100 years old !")
      .required("Age is required !"),
    city: Yup.string().required("City is required !"),
    gender: Yup.string().required("Gender is required !"),
    interests: Yup.array()
      .min(1, "Select at least one interest !")
      .required("Select at least one interest !"),
    birthDate: Yup.date().required("Date of Birth is required !"),
  });

  useEffect(() => {
    debugger;
    const storedItem = localStorage.getItem("formData");
    if (storedItem) {
      try {
        let storedFormData: IFormData = JSON.parse(storedItem);
        setFormData(storedFormData);
        console.log("123", storedFormData);
      } catch (error) {
        console.error("Error parsing stored form data:", error);
      }
    } else {
      const defaultFormData: IFormData = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        gender: "",
        city: "",
        age: "",
        interests: [],
        birthDate: "",
      };
      setFormData(defaultFormData);
    }
  }, []);
  const onSubmit = (values: IFormData, actions: FormikHelpers<IFormData>) => {
    setFormData(values);
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          id: Math.random.toString(),
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          password: values.password,
          confirmPassword: values.confirmPassword,
          gender: values.gender,
          city: values.city,
          age: values.age,
          interests: values.interests,
          birthDate: values.birthDate,
        },
      ];
    });
    localStorage.setItem("formData", JSON.stringify(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="m-5 bg-yellow-100 p-5">
            <div>
              <label>First Name :</label>
              <Field
                className="mt-5 ms-2 p-1"
                type="text"
                name="firstName"
                placeholder="Enter Your Firstname"
              />
            </div>
            {errors.firstName && touched.firstName && (
              <div className="text-red-600">{errors.firstName}</div>
            )}
            <div>
              <label>Last Name :</label>
              <Field
                className="mt-5 ms-2 p-1"
                type="text"
                name="lastName"
                placeholder="Enter Your Lastname"
              />
            </div>
            {errors.lastName && touched.lastName && (
              <div className="text-red-600">{errors.lastName}</div>
            )}
            <div>
              <label>Email :</label>
              <Field
                className="mt-5 ms-2 p-1"
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
            </div>
            {errors.email && touched.email && (
              <div className="text-red-600">{errors.email}</div>
            )}
            <div>
              <label>Phone Number :</label>
              <Field
                className="mt-5 ms-2 p-1"
                type="text"
                name="phoneNumber"
                placeholder="Enter Your Phone number"
              />
            </div>
            {errors.phoneNumber && touched.phoneNumber && (
              <div className="text-red-600">{errors.phoneNumber}</div>
            )}
            <div>
              <label>Password :</label>
              <Field
                className="mt-5 ms-2 p-1"
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
            </div>
            {errors.password && touched.password && (
              <div className="text-red-600">{errors.password}</div>
            )}
            <div>
              <label>Confirm Password :</label>
              <Field
                className="mt-5 ms-2 p-1"
                type="password"
                name="confirmPassword"
                placeholder="Enter Your Confirm Password"
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="text-red-600">{errors.confirmPassword}</div>
            )}
            <div>
              <label>Age :</label>
              <Field
                className="mt-5 ms-2 p-1"
                type="number"
                name="age"
                placeholder="Enter Your Age"
              />
            </div>
            {errors.age && touched.age && (
              <div className="text-red-600">{errors.age}</div>
            )}
            <div>
              <label>Gender :</label>
              <label>
                <Field
                  className="mt-5 ms-2 p-1"
                  type="radio"
                  name="gender"
                  value="male"
                ></Field>
                Male
              </label>
              <label>
                <Field
                  className="mt-5 ms-2 p-1"
                  type="radio"
                  name="gender"
                  value="female"
                ></Field>
                Female
              </label>
              <label>
                <Field
                  className="mt-5 ms-2 p-1"
                  type="radio"
                  name="gender"
                  value="other"
                ></Field>
                Other
              </label>
            </div>
            {errors.gender && touched.gender && (
              <div className="text-red-600">{errors.gender}</div>
            )}
            <div>
              <label>City :</label>
              <Field component="select" className="mt-5 ms-2 p-1" name="city">
                <option value="" selected disabled>
                  Select
                </option>
                <option value="ahmedabad">Ahmedabad</option>
                <option value="rajkot">Rajkot</option>
                <option value="surat">Surat</option>
              </Field>
            </div>
            {errors.city && touched.city && (
              <div className="text-red-600">{errors.city}</div>
            )}
            <div>
              <label>Interests :</label>
              <label>
                <Field
                  className="mt-5 ms-2 p-1"
                  type="checkbox"
                  name="interests"
                  value="coding"
                ></Field>
                Coding
              </label>
              <label>
                <Field
                  className="mt-5 ms-2 p-1"
                  type="checkbox"
                  name="interests"
                  value="sports"
                ></Field>
                Sports
              </label>
              <label>
                <Field
                  className="mt-5 ms-2 p-1"
                  type="checkbox"
                  name="interests"
                  value="reading"
                ></Field>
                Reading
              </label>
            </div>
            {errors.interests && touched.interests && (
              <div className="text-red-600">{errors.interests}</div>
            )}
            <div>
              <label>Date Of Birth :</label>
              <Field
                className="mt-5 ms-2 p-1"
                type="date"
                name="birthDate"
                placeholder="Enter Your BirthDate"
              />
            </div>
            {errors.birthDate && touched.birthDate && (
              <div className="text-red-600">{errors.birthDate}</div>
            )}
            <div>
              <button
                type="submit"
                className="mt-5 p-1 bg-blue-600 rounded-md px-5 text-white text-lg"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <Formikdata users={userList}></Formikdata>
    </div>
  );
}

export default Cart;
