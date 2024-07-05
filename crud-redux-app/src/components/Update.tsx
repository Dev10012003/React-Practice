import { Box, Button, TextField, styled } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { updateUser } from "./UserReducer";

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface RootState {
  users: IUser[];
}
const StydedDiv = styled("div")({
  display: "flex",
  justifyContent: "start",
  marginTop: "40px",
});
function Update() {
  const users = useSelector((state: RootState) => state.users);
  const { id } = useParams();
  const existUser = users.filter((f) => f.id === parseInt(id!));
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState<IUser>({
    id: existUser[0].id,
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

  useEffect(() => {
    formik.setFieldValue("name", existUser[0].name);
    formik.setFieldValue("email", existUser[0].email);
    formik.setFieldValue("phone", existUser[0].phone);
    formik.setFieldValue("website", existUser[0].website);
  }, []);

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        updateUser({
          id: values.id,
          name: values.name,
          email: values.email,
          phone: values.phone,
          website: values.website,
        })
      );
      navigate("/home");
    },
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <div className="w-50 rounded bg-white border shadow p-4">
        <h1>Update User</h1>
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
              value={formik.values.name}
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
              value={formik.values.email}
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
              value={formik.values.phone}
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
              value={formik.values.website}
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
              Update
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

export default Update;
