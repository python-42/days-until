import DayView from "../components/DayView.js";
import "./Days.css";

function Days({name, dayViewCallback}) {
    return (
        <div>
            <h1>Your Days</h1>
            <p>Name: {name}</p>
            <button onClick={() => dayViewCallback(false)}>Return Home</button>

            <div className="days">
                {
                    getDays()
                }
            </div>
        </div>
    );
}

function getDays() {
    let rtn = [];
    
    for (let i = 0; i < 3; i++) {
        rtn.push(<DayView date={new Date(2024, 1, 30)} name="Duluth" />)
    }

    return rtn;
}

export default Days;