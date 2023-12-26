import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [modeName, setModeName] = useState("DarkMode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const removeAlert = () => {
    setAlert(null);
  }


  const toggleMode = () => {   // this function is for toggle "darkmode" and "lightmode"
    if(mode === "light"){
      setMode("dark");
      setModeName("LightMode");
      document.body.style.backgroundColor = "#212529";
      
      showAlert("Success: Dark mode is enabled", "success");
    }
    else{
      setMode("light");
      setModeName("DarkMode");
      document.body.style.backgroundColor = "white";

      showAlert("Success: Light mode is enabled", "success");
    }
  }

  const toggleTitle = () => {
    setInterval(() => {
      document.title = "Text Editor ~ By Devyansh";

      setTimeout(() => {
        document.title = "LowerCase | UpperCase | Word Searching";
      }, 999);

    }, 3000);
  }


  return (
    <>
      <Router>

          <Navbar mode={mode} modeName={modeName} toggleMode={toggleMode} toggleTitle={toggleTitle} alert={alert}></Navbar>
          <Alert alert={alert} removeAlert={removeAlert}></Alert>
          <Routes>
            <Route exact path="/" element={<TextForm mode={mode} heading="Enter the text to analyze below" showAlert={showAlert}></TextForm>} />
            <Route exact path="/about" element={<About mode={mode}></About>} />
          </Routes>

      </Router>
    </>
  );
}

export default App;
