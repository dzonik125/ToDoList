import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <nav className="navbar">
    <h1>ToDo</h1>
    <div className="links">
      <Link to="/add">Add task</Link>
      <a href="/about">About</a>
      <Link to="/">Home</Link>
    </div>
  </nav> );
}
 
export default Navbar;