import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // it is a state variable and tells whether Dark Mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f1e2c";
      showAlert("Dark mode has been enabled", "success");
      //document.title = 'TextUtils - Dark Mode';

      //setInterval(() =>
      //{document.title = 'Best site to arrange word';
      // }, 2000);
      // setInterval(() =>
      // {document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      //document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      {/*<Navbar title="TextUtils" aboutText="About Us" /> */}
      {/*<Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>

            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Try TextUtils - Word counter, Character counter, Remove extra spaces"
                  mode={mode}
                />
              }
            >
              {/*use exact path to get exact result otherwise react can render partial result*/}
              {/*<Textform showAlert={showAlert} heading="Enter the text to analyse below" mode= {mode}/>*/}
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
