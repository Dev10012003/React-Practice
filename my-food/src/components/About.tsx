import { useState } from "react";
import * as Yup from "yup";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  gender: string;
  age: string;
  interests: string[];
  birthDate: string;
}

interface IAboutProps {
  saveUser: (userData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    age: string;
    gender: string;
    interests: string[];
    birthDate: string;
  }) => void;
}

function About(props: IAboutProps) {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    interests: [],
    birthDate: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [data, setData] = useState<{ [key: string]: string }>({});

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
      .oneOf([Yup.ref("password")])
      .required("Confirm Password is required !"),
    age: Yup.number()
      .typeError("Age must be number !")
      .min(18, "You must be at least 18 years old !")
      .max(100, "You can not be 100 years old !")
      .required("Age is required !"),
    gender: Yup.string().required("Gender is required !"),
    interests: Yup.array()
      .min(1, "Select at least one interest !")
      .required("Select at least one interest !"),
    birthDate: Yup.date().required("Date of Birth is required !"),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        age: formData.age,
        gender: formData.gender,
        interests: formData.interests,
        birthDate: formData.birthDate,
      };

      props.saveUser(userData);
      console.log(userData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        gender: "",
        age: "",
        interests: [],
        birthDate: "",
      });
    } catch (error: any) {
      const newError: { [key: string]: string } = {};

      error.inner.forEach((err: { path: string; message: string }) => {
        newError[err.path] = err.message;
      });

      setErrors(newError);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    let updatedInterests = [...formData.interests];
    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter(
        (interest) => interest !== name
      );
    }

    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  return (
    <form className="m-5 bg-yellow-100 p-5" onSubmit={handleSubmit}>
      <div>
        <label>First Name :</label>
        <input
          className="mt-5 ms-2 p-1"
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter Your Firstname"
          onChange={handleChange}
        />
      </div>
      {errors.firstName && (
        <div className="text-red-600">{errors.firstName}</div>
      )}
      <div>
        <label>Last Name :</label>
        <input
          className="mt-5 ms-2 p-1"
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter Your Lastname"
          onChange={handleChange}
        />
      </div>
      {errors.lastName && <div className="text-red-600">{errors.lastName}</div>}
      <div>
        <label>Email :</label>
        <input
          className="mt-5 ms-2 p-1"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter Your Email"
          onChange={handleChange}
        />
      </div>
      {errors.email && <div className="text-red-600">{errors.email}</div>}
      <div>
        <label>Phone Number :</label>
        <input
          className="mt-5 ms-2 p-1"
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          placeholder="Enter Your Phone number"
          onChange={handleChange}
        />
      </div>
      {errors.phoneNumber && (
        <div className="text-red-600">{errors.phoneNumber}</div>
      )}
      <div>
        <label>Password :</label>
        <input
          className="mt-5 ms-2 p-1"
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter Your Password"
          onChange={handleChange}
        />
      </div>
      {errors.password && <div className="text-red-600">{errors.password}</div>}
      <div>
        <label>Confirm Password :</label>
        <input
          className="mt-5 ms-2 p-1"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Enter Your Confirm Password"
          onChange={handleChange}
        />
      </div>
      {errors.confirmPassword && (
        <div className="text-red-600">{errors.confirmPassword}</div>
      )}
      <div>
        <label>Age :</label>
        <input
          className="mt-5 ms-2 p-1"
          type="number"
          name="age"
          value={formData.age}
          placeholder="Enter Your Age"
          onChange={handleChange}
        />
      </div>
      {errors.age && <div className="text-red-600">{errors.age}</div>}
      <div>
        <label>Gender :</label>
        <select
          className="mt-5 ms-2 p-1"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      {errors.gender && <div className="text-red-600">{errors.gender}</div>}
      <div>
        <label>Interests :</label>
        <label>
          <input
            className="mt-5 ms-2 p-1"
            type="checkbox"
            name="coding"
            checked={formData.interests.includes("coding")}
            onChange={handleCheckBoxChange}
          ></input>
          Coding
        </label>
        <label>
          <input
            className="mt-5 ms-2 p-1"
            type="checkbox"
            name="sports"
            checked={formData.interests.includes("sports")}
            onChange={handleCheckBoxChange}
          ></input>
          Sports
        </label>
        <label>
          <input
            className="mt-5 ms-2 p-1"
            type="checkbox"
            name="reading"
            checked={formData.interests.includes("reading")}
            onChange={handleCheckBoxChange}
          ></input>
          Reading
        </label>
      </div>
      {errors.interests && (
        <div className="text-red-600">{errors.interests}</div>
      )}
      <div>
        <label>Date Of Birth :</label>
        <input
          className="mt-5 ms-2 p-1"
          type="date"
          name="birthDate"
          value={formData.birthDate}
          placeholder="Enter Your BirthDate"
          onChange={handleChange}
        />
      </div>
      {errors.birthDate && (
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
    </form>
  );
}

export default About;
