import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/LoginPage";
import Register from "./components/RegisterPage";
import NewPatientPage from "./components/NewPatientPage";
import SplashPage from "./components/SplashPage";
import Home from "./components/Home";
import { AboutUs } from "./components/AboutUsPage";
import { ForgotPasswordPage } from "./components/ForgotPasswordPage";
import { HealthIdAadhaarPage } from "./components/HealthIdAadhaarPage";
import { HealthIdDLPage } from "./components/HealthIdDLPage";
import { OtpAadhaarPage } from "./components/OtpAadhaarPage";
import { DLDetailsPage } from "./components/DLDetailsPage";
import { AbhaCardPage } from "./components/AbhaCardPage";
import { OtpDLPage } from "./components/OtpDLPage ";
import { ProfilePage } from "./components/ProfilePage";
import Error from "./components/Error";
import Layout from "./components/Layout";
import { OtpMobilePage } from "./components/OtpMobilePage";
import { EnterMobilePage } from "./components/EnterMobilePage";
import EnterAbhaDetailsPage from "./components/EnterAbhaDetailsPage";
import { OtpLoginMobilePage } from "./components/OtpLoginMobilePage";
import { LoginHealthIdPage } from "./components/LoginHealthIdPage";
import { ReportDetailsPage } from "./components/ReportDetailsPage";
import HealthIdDisplay from "./components/HealthIdDisplay";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<SplashPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          
          
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          {/* Create HID Through ADHAR */}
          <Route path="/createHidAadhaar" element={<HealthIdAadhaarPage />} />
          <Route path="/sendAadhaarOtp" element={<OtpAadhaarPage />} />
          <Route path="/enterMobileNo" element={<EnterMobilePage/>} />
          <Route path="/sendMobileOtp" element={<OtpMobilePage />} />
          <Route path="/abhaDetails" element={<EnterAbhaDetailsPage />} />
          <Route path="/getHealthId" element={<HealthIdDisplay />} />
          
          {/*  Get ABHA CARD */}
          <Route path="/enterHealthIdNo" element={<LoginHealthIdPage/>} />
          <Route path="/sendLoginMobileOtp" element={<OtpLoginMobilePage />} />
          <Route path="/displayABHA" element={<AbhaCardPage />} />
          
          {/* Create HID Through DL */}
          <Route path="/createHidDL" element={<HealthIdDLPage />} />
          <Route path="/sendDLOtp" element={<OtpDLPage />} />
          <Route path="/DLDetails" element={<DLDetailsPage />} />

          {/* New Patient Registration Routes */}
          <Route path="/newPatient" element={<NewPatientPage />} />
          <Route path="/reportDetails" element={<ReportDetailsPage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          _
          <Route path="*" element={<Error />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;