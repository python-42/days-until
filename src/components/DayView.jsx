import { useEffect, useState } from "react";
import "./DayView.css"

function DayView( {date, name, deleteCallback} ) {
    const [now, setNow] = useState(Date.now());

    useEffect(
        () => {
            const interval = setInterval(() => setNow(Date.now),1000)
            return () => { clearInterval(interval); }
        },
        []
    );

    function secondsAway(date) {
        return (date.valueOf() - now.valueOf()) / 1000;    
    }

    function daysAway(date) {
        return (secondsAway(date) / 60 / 60 / 24) | 0;
    }
    
    function hoursAway(date) {
        return (secondsAway(date) / 60 / 60) | 0;
    }
    
    function minutesAway(date) {
        return (secondsAway(date) / 60) | 0;
    }

    return (
        <div className={minutesAway(date) > 0 ? "dayContainer" : "dayContainer past"} >
            <h3>{name}</h3>
            {minutesAway(date) > 0 ? null : <p>Past</p>}
            <p style={{"marginBottom" : "5px"}} >{date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) }</p>
            <p style={{"marginTop" : "0px"}}>{date.toLocaleTimeString("en-us")}</p>
            <hr />
            <p>Days Away: {daysAway(date)}</p>
            <p>Hours Away: {hoursAway(date)}</p>
            <p>Minutes Away: {minutesAway(date)}</p>
            <p>Seconds Away: {secondsAway(date) | 0}</p>
            <button className="deleteBtn" onClick={() => deleteCallback(name)}>Delete</button>
        </div>
    );
}

export default DayView;