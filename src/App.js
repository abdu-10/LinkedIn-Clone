import './App.css';
import {BrowserRouter as Router,  Routes , Route} from "react-router-dom"
import Maincontent from './Components/Main Page/Maincontent';
import Login from './Components/LoginPage/Login';





function App() {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Maincontent/>}/>
          <Route path='/profile' element={<Login/>}/>
        </Routes>
      </Router>
   </div>
     
  );
}

export default App;
// npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material

