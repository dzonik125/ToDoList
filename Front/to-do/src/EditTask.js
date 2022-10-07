
import {useParams} from 'react-router-dom';
import useFetch from "./useFetch";
import EditForm from "./EditForm";

const EditTask = () => {
    const {id} = useParams();
    const {data:task,error,isPending} = useFetch('http://localhost:8000/tasks/'+id);

    return (
        <div className="edit-task">
            {task && <EditForm task = {task} />}
        </div>
        
        
     );
}
 
export default EditTask;