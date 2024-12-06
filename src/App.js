import React, { useState } from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#072743";
      showAlert("Dark mode is activated.", "success");
      document.title = "Textutils - Dark mode";

      // setInterval(() => {
      //   document.title = "Textutils - Dark mode";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Textutils - Light mode";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is activated.", "success");
      document.title = "Textutils - Light mode";
    }
  };

  return (
    <>
     {/* <Router> */}
        <Navbar title="MyReact" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />
          {/* <Routes>
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/"
              element={}
            />
          </Routes> */}
        </div>
      {/* </Router> */}
        
    </>
  );
}

export default App;
