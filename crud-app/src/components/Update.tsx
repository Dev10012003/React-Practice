import { Box, Button, TextField, styled } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

interface IUser {
  id: number;
  title: string;
  category: string;
  price: number;
  stock: number;
}
const StydedDiv = styled("div")({
  display: "flex",
  justifyContent: "start",
  marginTop: "40px",
});
function Update() {
  const { id } = useParams();

  const [formData, setFormData] = useState<IUser>({
    id: 0,
    title: "",
    stock: 0,
    price: 0,
    category: "",
  });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/" + id)
      .then((res) => {
        formik.setFieldValue("category", res.data.category);
        formik.setFieldValue("title", res.data.title);
        formik.setFieldValue("stock", res.data.stock);
        formik.setFieldValue("price", res.data.price);
        formik.setFieldValue("id", res.data.id);
      })
      .catch((err) => console.log(err));
  }, []);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required !"),
    category: Yup.string().required("Category is required !"),
    stock: Yup.number().required("Stock is required !"),
    price: Yup.number().required("Price is required !"),
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      debugger;
      console.log(id);
      try {
        const response = await axios.put(
          "https://dummyjson.com/products/" + id,
          values
        );
        console.log("122", values);
        navigate("/");
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
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
              name="title"
              placeholder="Enter Your Title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title ? formik.errors.title : ""}
            />
          </div>

          <div>
            <TextField
              type="text"
              name="category"
              placeholder="Enter Your Category"
              label="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category ? formik.errors.category : ""}
            />
          </div>

          <div>
            <TextField
              type="number"
              name="price"
              placeholder="Enter Your Price"
              label="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price ? formik.errors.price : ""}
            />
          </div>

          <div>
            <TextField
              type="number"
              name="stock"
              placeholder="Enter Your Stock"
              label="Stock"
              value={formik.values.stock}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.stock && Boolean(formik.errors.stock)}
              helperText={formik.touched.stock ? formik.errors.stock : ""}
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
