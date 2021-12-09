import React from "react";
import Home from "./pages";
import "./App.css";
import Form from "./pages/Form";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
    <Header />
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
