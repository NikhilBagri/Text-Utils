import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(33 37 41 / 96%)';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <div className="Head">
      <h1>Try TextUtils - Enter Text below to analyze</h1>
    </div>
    <Textform/>
    </>
//     <BrowserRouter>
// <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
//       <Alert alert={alert}/>
//     <div className="container my-3"></div>
//     <Routes>
//     <Route path="/" element={ <Textform showAlert={showAlert} heading="Try TextUtils - Enter Text below to analyze" mode={mode}/>} />
//     <Route path="/about" element={<About mode={mode} />} />
//     </Routes>
// </BrowserRouter>
  );
}

export default App;
