

import { useState } from 'react';
import './App.css';
import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import About from './Components/About';

import {
  
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState("")

  const showAlert =(message , type)=> {


    setAlert(
      {
        msg : message,
        type : type 
      }
    )
    setTimeout(() => {
      setAlert("");
    }, 1500);

  }
  const tooglerMode =()=>{
    if (mode === 'light' )
    { 
      setmode('dark');
      document.body.style.backgroundColor = "gray";
      showAlert("Dark Mode has been enabled ", "success");
      document.title = "TextUtils - Dark"
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light Mode has been enabled " , "Sucess"); 
      document.title = "TextUtils - light"
    }
  }
  return (
    <div className="App">
<Navbar title="TextUtils" mode = {mode} tooglerMode = {tooglerMode} />
      <Alert alert = {alert} />
    <Routes>
      <Route exact path="/" element={<TextForm showAlert = {showAlert} mode = {mode} heading="ENTER THE TEXT TO CHANGE CASE"/>}/>
      
      <Route exact path='/About' element={<About/>}/>
    </Routes>
  


      
       
       
       
    </div>
  );
}

export default App;
