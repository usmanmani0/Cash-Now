import React from "react";
import Home from "./pages";
import "./App.css";

import Form from "./pages/Form";
import { Routes, Router, Route } from "react-router-dom"
import Step2 from "./components/Forms/Step2";
import Step3 from "./components/Forms/Step3";
import Step4 from "./components/Forms/Step4";
import Step5 from "./components/Forms/Step5";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import FormBottomText from "../src/components/Forms/Text"
function App() {
  return (
    <>

      <Header />
      <NavBar />
      <Routes  >
        <Route path="/" element={<Home />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
        <Route path="/finish" element={< FormBottomText />} />
      </Routes>
      <Footer />


    </>
  )
}


export default App;
