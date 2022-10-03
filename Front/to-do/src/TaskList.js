import {Link} from 'react-router-dom';
import useFetch from './useFetch'


const TaskList = (props) => {
    const tasks = props.tasks;
    console.log(tasks)
    
    return (
    
    <div className="taskList">
        {tasks.map((task)=>(
                <div className="task-preview" key={task.pk}>
                    
                    <h2>{task.fields.title}</h2>
                    <p>{task.fields.description}</p>
                    <p>{task.fields.finishDate}</p>
                    <p>{task.fields.createdDate}</p>
                    
                </div>
            ))}
    </div>
    
    );
}
 
export default TaskList;