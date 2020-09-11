import React, {useEffect, useState, Component} from 'react';
import '../css/App.css';
import '../css/App-Navbar.css'
import Navbar from './Header'
import MainView from './Mainview'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Pages = {
  TIRE: 1,
  FORK: 2,
  SHOCK: 3,
}

const App = () => {

  const [page, setPage] = useState(0);
  const [style, setStyle] = useState(0);
  


  return (

    <Router>
      <div class="central-header">
          <h1 class="heading">dialed</h1>
          <h2 class="subheading">dial in your bike.</h2>
      </div>
      <nav>
        <div class="logo"></div>
        <div class="links">
            <Link to="/about">about</Link>
            <Link to="/protune">protune</Link>
            <Link to="https://yt-industries.com">yt-industries.com</Link>
        </div>
       </nav>
      </Router>

    //   <form>


    //     <div class="trail"></div>



    //     <div class="weight-container">
    //         <div class="form-text">
    //           <label for="rider-weight">Rider weight: </label>
    //           <input type="text"></input>
    //         </div>
    //         <div class="form-text">
    //           <label for="bike-weight">Bike weight: </label>
    //           <input type="text"></input>
    //         </div>
    //     </div>
    //     <div class="form-slider">
    //       <label for="riding-style">Riding style</label>
    //       <input type="range" min="1" max="100" value="50" class="slider" id="slider" value={style} onChange={(event) => setStyle(event.target.value)} />
    //     </div>


    //   </form>



    // <Router>
    //   <div>
    //   <div>
    //     <button onClick={()=>setPage(Pages.TIRE)}>Tire</button>
    //     <button onClick={()=>setPage(Pages.FORK)}>Fork</button>
    //     <button onClick={()=>setPage(Pages.SHOCK)}>Shock</button>
    //   </div>
    // </div>
    // </Router>
    // </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App;