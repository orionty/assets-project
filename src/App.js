import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./components/ForgotPassword";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Home from "./components/Home";

import ContactPage from "./Dashboard/ContactPage";
import Form from "./components/Form";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Dashboard from "./Dashboard/Dashboard";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            {" "}
          </Route>
          <Route path="register" element={<Register />}>
            {" "}
          </Route>
          <Route path="reset" element={<ForgotPassword />}>
            {" "}
          </Route>
          <Route path="admin" element={<Home />}>
            {" "}
          </Route>
          <Route path="dashboard" element={<Dashboard />}>
            {" "}
          </Route>

          <Route path="sign-in" element={<Form />}>
            {" "}
          </Route>
          <Route path="contact-us" element={<Contact />}>
            {" "}
          </Route>
          <Route path="services" element={<Services />}>
            {" "}
          </Route>

          <Route path="contact" element={<ContactPage />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
