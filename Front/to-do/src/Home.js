import TaskList from "./TaskList";
import useFetch from "./useFetch";

const Home = () => {
    const {data:tasks,isPending,error} = useFetch('http://localhost:8000/tasks/allTasks/')

    return (
        <div className="home">
            <div className="middleContent">
            <h2>List of Tasks</h2>
            <input type="search" placeholder="Search tasks" id="srch"/>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {tasks && <TaskList tasks={tasks}/>}
            
        </div>
     );
}
 
export default Home;