import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPages from "../pages/users/AboutPages";
import AuthPage from "../pages/users/AuthPage";
import ContactPage from "../pages/users/ContactPage";
import HomePage from "../pages/users/HomePage";
import VehicleDetailPage from "../pages/users/VehicleDetailPage";
import VehiclesPage from "../pages/users/VehiclesPage";
import UserTemplate from "../templates/user-template";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* ADMIN ROUTES */}

          {/* USER ROUTES */}
          <Route index element={<UserTemplate><HomePage /></UserTemplate>} />
          <Route path="about" element={<UserTemplate><AboutPages /></UserTemplate>} />
          <Route path="contact" element={<UserTemplate><ContactPage /></UserTemplate>} />
          <Route path="auth" element={<AuthPage />} />

          <Route path="vehicles">
            <Route index element={<UserTemplate><VehiclesPage /></UserTemplate>} />
            <Route path=":vehicleId" element={<UserTemplate><VehicleDetailPage /></UserTemplate>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
