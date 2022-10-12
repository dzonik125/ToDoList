import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar";
import Home from "./Home";
import AddTask from './AddTask';
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
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/add" element={<AddTask />}/>

      </Routes>
      
    </div>
    </Router>
  );
}

export default Index;
