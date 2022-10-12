import { useState } from "react";
import DateFnsUtils from '@date-io/date-fns'
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const AddTask = () => {
    const [selectedDate, handleDateChange] = useState(new Date());

    return ( 
        <div className="addTask">
            <h2>Add task</h2>
            <form action="" className="addForm">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" required/>
                <label htmlFor="bod">Body</label>
                <textarea name="body" id="bod" cols="90" rows="10"></textarea>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DateTimePicker value={selectedDate} onChange={handleDateChange}></DateTimePicker>
                </MuiPickersUtilsProvider>
                <input type="submit" value={'Add task'}/>
            </form>
        </div>
     );
}
 
export default AddTask;