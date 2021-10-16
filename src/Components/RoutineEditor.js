import { useState } from "react";
import RoutineSlotHeader from "./RoutineSlotHeader";
import RoutineCell from "./RoutineCell";
import "./RoutineEditor.css";

const weekDays = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
];

const slotDataObject = {
    "slotID": null, 
    "startTime": null, 
    "endTime": null,
    "status:": false
};

const initialSlotData = [];

const RoutineEditor = () => {
    const [startTime, setStart] = useState("");
    const [endTime, setEnd] = useState("");
    const [lastEnd, setLastEnd] = useState("");
    const [slotData, setSlotData] = useState(initialSlotData);
    
    const addSlotListener = (event) =>
    {
        event.preventDefault();
        if(startTime <= endTime && (startTime > lastEnd))
        {
            setSlotData( (data) => {
                let newSlotData = JSON.parse(JSON.stringify(slotDataObject));

                // THE DATA 
                newSlotData.startTime = startTime;
                newSlotData.endTime = endTime;
                newSlotData.slotID = data.length;
                newSlotData.status = false;


                var res = [...data, newSlotData];
                setLastEnd(res[res.length-1].endTime);
                return res;
            });
        }
        
    }

    const removeSlotListener = (event) =>
    {
        event.preventDefault();
        
        setSlotData( (data) => {
            const res = data.filter((s) =>
            {
                return (s.slotID !== event.target.value)
            });
            if(res.length !== 0)
                setLastEnd(res[res.length-1].endTime);
            else
                setLastEnd("");
            return res;
        });
    }

    

    return(
        <div className="routine_editor" >
            <h1> Edit routine slots</h1>
            <form className = "slot_maker" onSubmit = {addSlotListener}>
                <label htmlFor="startTime" > Start Time</label>
                <input id="startTime" type="time" onChange = {(e) => setStart(e.target.value)} required/>
                <label htmlFor="endTime"> End Time</label>
                <input id="endTime" type="time" onChange = {(e) => setEnd(e.target.value)} min={startTime} required/>
                
                <button type="submit"> Add </button>
                <button onClick={removeSlotListener} value={slotData.length-1}> Pop </button>
            </form>
            
            <table className="routine_table">
                <tr> 
                    <th>Days</th> 
                    {slotData.map((s)=> (<th>
                        <RoutineSlotHeader slotData={s}/>
                    </th>))} 
                </tr>
                {weekDays.map( (day) => {
                    return(
                        <tr>
                            <td> {day} </td>
                            {slotData.map((s) => (<RoutineCell data={s}/>) )}
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}


export default RoutineEditor;