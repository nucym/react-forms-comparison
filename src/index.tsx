import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Container as MuiContainer, Stack, Divider, Box } from "@mui/material";
import { FormikMui } from "./components/FormikMui";
import { RHFMui } from "./components/RHFMui";

const Container = () => {
  return (
    <MuiContainer maxWidth="sm">
      <Stack
        component="nav"
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Link to="fomik-mui">Formik Mui</Link>
        <Link to="rhf-mui">RHF Mui</Link>
      </Stack>
      <Box mt={2}>
        <Outlet />
      </Box>
    </MuiContainer>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="fomik-mui" element={<FormikMui />} />
          <Route path="rhf-mui" element={<RHFMui />} />
          <Route index element={<FormikMui />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
