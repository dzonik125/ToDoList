

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar";
import Home from "./Home";
import EditTask from "./EditTask";

function Index() {
  

  return (
    <Router>
    <div className="index">
      <Navbar/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path = "/editTask/:id"
          element={<EditTask/>}/>
        
        
      </Routes>
      
    </div>
    </Router>
  );
}

export default Index;
