import useFetch from "./useFetch";
import TaskList from "./TaskList";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./Navbar";
import Home from "./Home";

function Index() {
  

  return (
    <Router>
    <div className="index">
      <Navbar/>
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        
      </Switch>
      
    </div>
    </Router>
  );
}

export default Index;
