import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Error404 from "../components/users/common/error/user/error-404";
import AboutPage from "../pages/users/AboutPage";
import AuthPage from "../pages/users/AuthPage";
import ContactPage from "../pages/users/ContactPage";
import HomePage from "../pages/users/HomePage";
import ProfilePage from "../pages/users/ProfilePage";
import VehicleDetailsPage from "../pages/users/VehicleDetailsPage";
import VehiclesPage from "../pages/users/VehiclesPage";
import UserTemplate from "../templates/user-template";
import ProtectedRoute from "./protected-route";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
       
      <Routes>
        <Route path="/">
          {/* ADMIN ROUTES */}

          {/* USER ROUTES */}
          <Route index element={<UserTemplate><HomePage /></UserTemplate>} />
          <Route path="about" element={<UserTemplate><AboutPage /></UserTemplate>} />
          <Route path="contact" element={<UserTemplate><ContactPage /></UserTemplate>} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="*" element={<Error404/>}/>
         

          <Route path="vehicles">
            <Route index element={<UserTemplate><VehiclesPage /></UserTemplate>} />
            <Route path=":vehicleId" element={<UserTemplate><VehicleDetailsPage /></UserTemplate>} />
          </Route>

          <Route path="user">
            <Route index element={<ProtectedRoute><UserTemplate><ProfilePage /></UserTemplate></ProtectedRoute>} />
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
