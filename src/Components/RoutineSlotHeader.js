import { useState } from "react";

const RoutineSlotHeader = ({slotData}) => {

    return(
        <div className = "routine_slot_header">
            {slotData.startTime} to {slotData.endTime}
            
        </div>
    );
}

export default RoutineSlotHeader;