import React, { Fragment } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Button, TextField, Stack, Typography } from "@mui/material";

interface Values {
  name: string;
  email: string;
}

export const RHFMui = () => {
  const { control, handleSubmit } = useForm<Values>({
    resolver: yupResolver(
      Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })
    ),
  });

  const onSubmit: SubmitHandler<Values> = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <Typography gutterBottom variant="h6">
        React Hook Form Mui example
      </Typography>
      <Stack
        component="form"
        sx={{ maxWidth: "30rem" }}
        alignItems="flex-start"
        spacing={2}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={control}
          defaultValue={""}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              fullWidth
              label="Name"
              required
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue={""}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              fullWidth
              label="Email"
              required
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
            />
          )}
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
