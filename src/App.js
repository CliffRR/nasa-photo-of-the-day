import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";





function App() {
const [nasaApiImage, setNasaApiImage] = useState([]);
const [nasaApiDate, setNasaApiDate] = useState([]);
const [nasaApiExplanation, setNasaApiExplanation] = useState([]);
const [nasaApiTitle, setNasaApiTitle] = useState([]);



//API, getting all the info I need
useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=VFCmHmGLSy2Ch2dPwPQfiM4NkVgVBHmXxjvu3tLI")
    .then(res => {
      setNasaApiImage(res.data.url);
      setNasaApiDate(res.data.date);
      setNasaApiExplanation(res.data.explanation);
      setNasaApiTitle(res.data.title);
    })
}, [])








//Design of the website goes here and below
  return (
    

    <div className="container">
      <h1>Nasa Picture of the day!</h1>
      <h2></h2>
      <img src = {nasaApiImage} alt = "Space" width = "600" height = "500"></img>
      

      <div className = "text">
        <h2>Picture Name:</h2>
        <h3>{nasaApiTitle}</h3>
        <h2>Explanation:</h2>
        <h3>{nasaApiExplanation} </h3>
        <h2>Date:</h2>
        <h3>{nasaApiDate}</h3>
      </div>



    </div>


  );
}

export default App;
