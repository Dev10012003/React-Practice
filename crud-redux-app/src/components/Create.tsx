import { Box, Button, TextField, styled } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const StydedDiv = styled("div")({
  display: "flex",
  justifyContent: "start",
  marginTop: "40px",
});
interface RootState {
  users: IUser[];
}
function Create() {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState<IUser>({
    id: users[users.length - 1].id + 1,
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required !"),
    email: Yup.string()
      .required("Email is required !")
      .email("Invalid Email Format"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits !")
      .required("Phone Number is required !"),
    website: Yup.string().required("Website is required !"),
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addUser(values));
      console.log(values);
      navigate("/");
    },
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <div className="w-50 rounded bg-white border shadow p-4">
        <h1>Add User</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { mt: 4, width: "100%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <TextField
              type="text"
              name="name"
              placeholder="Enter Your Name"
              label="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name ? formik.errors.name : ""}
            />
          </div>

          <div>
            <TextField
              type="email"
              name="email"
              placeholder="Enter Your Email"
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email ? formik.errors.email : ""}
            />
          </div>

          <div>
            <TextField
              type="text"
              name="phone"
              placeholder="Enter Your Phone"
              label="Phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone ? formik.errors.phone : ""}
            />
          </div>

          <div>
            <TextField
              type="text"
              name="website"
              placeholder="Enter Your Website"
              label="Website"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.website && Boolean(formik.errors.website)}
              helperText={formik.touched.website ? formik.errors.website : ""}
            />
          </div>

          <StydedDiv>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{
                padding: "10px 25px",
                fontSize: 16,
              }}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              sx={{ marginLeft: 2, padding: "10px 25px", fontSize: 16 }}
            >
              Back
            </Button>
          </StydedDiv>
        </Box>
      </div>
    </div>
  );
}

export default Create;
