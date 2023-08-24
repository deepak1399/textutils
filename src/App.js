import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState("light")// Dark mode
  const [alert, setAlert] = useState(null)

  const showAlert =(massage,type) =>{
    setAlert({
      msg : massage,
      type : type
    })
  }

  setTimeout(() => {
    setAlert(null);
  },3000);

  const togglemode = () =>{

    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#0f0c45";
      showAlert("dark mode has been enable", "Success : ");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "Success : ");
    }
  }

  return (
    <>
    <Router>
    {/*<Navbar title="TextUtils" aboutTextutils=" about" />*/}
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          
          <Route exact path="/" element={ <TextForm showalert={showAlert} heading=" Enter text below to analyse" mode={mode}/>  } />
          <Route exact path="/about" element={ <About/> } />
        </Routes>
    </div> 
    </Router>
    </>
  );
}

export default App;
