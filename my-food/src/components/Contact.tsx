import { useState } from "react";

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

function Contact() {
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

  const isValidEmail = (email: string): boolean => {
    // Regular expression for basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber: string): boolean => {
    // Regular expression for basic phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidPassword = (password: string): boolean => {
    // Regular expressions for password validation
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const isValidAge = (age: string): boolean => {
    return parseInt(age) >= 18 && parseInt(age) <= 100;
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords must match";
    }
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (!isValidAge(formData.age)) {
      newErrors.age =
        "You must be at least 18 years old and not older than 100 years";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (formData.interests.length === 0) {
      newErrors.interests = "Select at least one interest";
    }
    if (!formData.birthDate) {
      newErrors.birthDate = "Date of birth is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  console.log(errors);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log("Form Submitted!!");
    } else {
      console.log("Form Validation Failed!!");
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
    <form className="m-5 bg-green-100 p-5" onSubmit={handleSubmit}>
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

export default Contact;
