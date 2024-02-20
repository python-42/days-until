import { useEffect, useState } from "react";
import "./DayView.css"

function DayView( {date} ) {
    const [now, setNow] = useState(Date.now());

    useEffect(
        () => {
            const interval = setInterval(
                () => setNow(Date.now),
                1000
            )
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
        <div className="dayContainer">
            <p>{date.toLocaleString()}</p>
            <p>Days Away: {daysAway(date)}</p>
            <p>Hours Away: {hoursAway(date)}</p>
            <p>Minutes Away: {minutesAway(date)}</p>
            <p>Seconds Away: {secondsAway(date) | 0}</p>
        </div>
    );
}

export default DayView;