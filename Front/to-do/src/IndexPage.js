import useFetch from "./useFetch";

function Index() {
  useFetch('http://localhost:8000/tasks/allTasks/');

  return (
    <div className="index">
      <nav className="navbar">
        <h1>ToDo</h1>
        <div className="links">
          <a href="/add">Add Task</a>
          <a href="/about">About</a>
        </div>
      </nav>
      <div className="middleContent">
        <h2>List of Tasks</h2>
        <input type="search" placeholder="Search tasks" id="srch"/>
      </div>
    </div>
  );
}

export default Index;
