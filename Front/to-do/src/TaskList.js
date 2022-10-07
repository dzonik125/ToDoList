import {Link} from 'react-router-dom';
import useFetch from './useFetch'


const TaskList = (props) => {
    const tasks = props.tasks;
    
    return (
    
    <div className="taskList">
        {tasks.map((task)=>(
            
                <div className="task-preview" key={task.pk}>
                    <Link to={`editTask/${task.pk}`}>
                    <h2>{task.fields.title}</h2>
                    <p>{task.fields.description}</p>
                    </Link>
                    
                </div>
            ))}
    </div>
    
    );
}
 
export default TaskList;