import './App.css';
import {BrowserRouter as Router,  Routes , Route} from "react-router-dom"
import Maincontent from './Components/Main Page/Maincontent';
import Login from './Components/LoginPage/Login';
import Profile from './Components/Main Page/Profile';

import Landing from './Components/Main Page/Landing';

=======
import JobsPage from './Components/Main Page/JobsPage';





function App() {
  return(
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Maincontent/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>  

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

