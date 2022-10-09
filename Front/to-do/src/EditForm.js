import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const EditForm = (props) => {
    const task = props.task[0]
    const id = task.pk
    const [title,setTitle] = useState(task.fields.title)
    const [description, setDescription] = useState(task.fields.description)

    const navigate = useNavigate();
    

    const handleEdit = (e) => {
        e.preventDefault();
        const task = {title, description}
        
        fetch('http://localhost:8000/tasks/editTask/'+id+'/',{
            method:'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(task)
        }).then(()=>{
            
            navigate('/');
        })
        
    }
    return ( 

        <div className="edit-form">
            
           <form onSubmit={handleEdit}>
                <label>Task title:</label>
                <input type="text" required value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Description</label>
                <input type="text" required value={description}
                onChange={(e)=>setDescription(e.target.value)}
                />
                <button>Edit</button>
                
                
            </form>
        
        </div>

     );
}
 
export default EditForm;