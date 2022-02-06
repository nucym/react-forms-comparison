import React, { Fragment } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TextField, Stack, Typography } from "@mui/material";

interface Values {
  name: string;
  email: string;
}

export const FormikMui = () => {
  const formik = useFormik<Values>({
    initialValues: { name: "", email: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <Fragment>
      <Typography gutterBottom variant="h6">
        Formik Mui example
      </Typography>
      <Stack
        component="form"
        sx={{ maxWidth: "30rem" }}
        spacing={2}
        alignItems="flex-start"
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          required
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <Button
          color="primary"
          variant="contained"
          type="submit"
          fullWidth={false}
        >
          Submit
        </Button>
      </Stack>
    </Fragment>
  );
};
