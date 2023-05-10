import './App.css';
import Connect from './Components/LandingPage/Connect';
import Footer from './Components/LandingPage/Footer';
import Footersection from './Components/LandingPage/Footersection';
import Jobs from './Components/LandingPage/Jobs';
import Join from './Components/LandingPage/Join';
import NavPanel from './Components/LandingPage/NavPanel';
import Post from './Components/LandingPage/Post';
import Testimonals from './Components/LandingPage/Testimonals';
import Topics from './Components/LandingPage/Topics';
import Welcome from './Components/LandingPage/Welcome';
// import {BrowserRouter ,  Routes , Route} from "react-router-dom"
import Maincontent from './Components/Main Page/Maincontent';
import Login from './Components/LoginPage/Login';
import Profile from './Components/Main Page/Profile';
import JobsPage from './Components/Main Page/JobsPage';




function App() {
  return(
    <div className="App">
{/*    
         <NavPanel />
      <Welcome />
      <Topics />
      <Jobs />
      <Post />
      <Testimonals />
      <Connect /> 
      <Join /> */}
       {/* <Footer />
      <Footersection />  */}
    
      <Maincontent /> 
      {/* <JobsPage/> */}
    {/* <Profile/> */}
      {/* <Login /> */}
      
      
   </div>
     
  );
}

export default App;
// npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material

