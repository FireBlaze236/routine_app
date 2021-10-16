import { useState } from "react";
import "./RoutineCell.css";


const RoutineCell = ({data})=>
{
    const [cellState, setCellState] = useState(data.status);

    const cellStateToggleListener = (e)=>{
        setCellState(!cellState);
    }

    return(
        
        <td>
            <div className= "routine_cell">
            <input type="text" />
            <input type="text" />
            <input type="text" />
                <div id="status_buttons">
                {  
                (cellState && <p style={{"color": "red" }}> Cancelled </p>) ||
                (!cellState && <p> Active </p>)
                }
                <button onClick={cellStateToggleListener}> X </button>
                </div>
            </div>
        </td>
    );
}

export default RoutineCell;