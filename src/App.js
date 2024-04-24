
//import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"

const  App= () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])
  return (
    <div className="App">
    <Navbar/>
    
    <div className='content'>
      <Home/>
      
    </div>
    <h3>Astronomy Picture of the Day</h3>
    {apod && (
        <article>
          <header>
            {apod.title} - <i>{apod.date}</i>
          </header>
          <img src={apod.url} alt="APOD" width="800" height="auto" />
          <p>{apod.explanation}</p>
        
        </article>
      )}
    </div>
  );
}

export default App;
