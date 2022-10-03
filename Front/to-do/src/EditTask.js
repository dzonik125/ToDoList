import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import useFetch from "./useFetch";

const EditTask = () => {
    const {id} = useParams();
    const {data:task,error,isPending} = useFetch('http://localhost:8000/tasks/'+id);
    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    
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
        
        <div className="edit-task">
            {task &&
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
        }
        </div>
        
     );
}
 
export default EditTask;