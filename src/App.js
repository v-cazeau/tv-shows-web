import { useState } from "react"; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./scenes/Home.jsx"
import Login from "./scenes/Login.jsx"
import SignUp from "./scenes/SignUp.jsx"
import AddShow from "./scenes/AddShow.jsx"
import '../src/styles/App.css';


function App() {
  const [shows, setShows] = useState(); 
  const [user, setUser] = useState();
  
  return (
    <>
    <ul>
       <li>

       </li>
    </ul>
    <BrowserRouter>
        <Routes>
          <Route path="/" element= { <Home shows={shows} setShows={setShows} /> } />
          <Route path= "/login" element= { <Login setUser={setUser}/> } />
          <Route path="/addshow" element= {<AddShow setShows={setShows} /> }/>
          <Route path="/signup" element= { <SignUp setUser={setUser}/> }/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
