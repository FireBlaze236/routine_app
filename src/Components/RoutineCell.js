import "./RoutineCell.css";



const RoutineCell = ({data})=>
{
    return(
        <td>
            <div className= "routine_cell">
            

            <input type="text" placeHolder="Course Name"/>
            <input type="text" placeHolder="Course Code"/>
            <input type="text" placeHolder="Course Teacher"/>
                <div id="status_buttons">
                {  
                data.status && <p> Cancelled </p> ||
                !data.status && <p> Active </p>
                }
                <button> X </button>
                </div>
            </div>
        </td>
    );
}

export default RoutineCell;