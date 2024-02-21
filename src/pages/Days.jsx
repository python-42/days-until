import { useEffect, useState } from "react";
import DayView from "../components/DayView.jsx";
import "./Days.css";

function Days({name, dayViewCallback}) {
    const [days, setDays] = useState(<p>Loading...</p>);

    useEffect(() => {writeRequestToDOM(); }, []);

    function writeRequestToDOM() {
        request(name).then((rtn) => {
            if (rtn.length == 0) {
                setDays(<p>No days found.</p>)
            }else {
                let arr = [];
                for (let i = 0; i < rtn.length; i++) {
                    arr.push(<DayView key={i} name={rtn[i].name} date={new Date(rtn[i].epochTime)} deleteCallback={(dayName) => deleteCallback(name, dayName)}/>)
                }
                setDays(arr);
            }
        }
        )
    }

    function handleCreateButton() {
        insert(name);
        writeRequestToDOM();
    } 

    function deleteCallback(name, dayName) {
        deleteDay(name, dayName);
        writeRequestToDOM();
    }

    return (
        <div>
            <h1>Your Days</h1>
            <p>Name: {name}</p>
            <div className="buttonContainer">
                <button onClick={() => dayViewCallback(false)}>Return Home</button>
                <button onClick={() => handleCreateButton()} className="createBtn">Create</button>
            </div>

            <div className="days">
                {
                    days
                }
            </div>
        </div>
    );
}

async function request(name) {
    const response = await fetch("http://127.0.0.1:8080/api/get?name=" + name)
    return await response.json();
}

async function insert(username) {
    const response = await fetch("http://127.0.0.1:8080/api/add", {
        method: "POST",
        body: JSON.stringify({
            username: username,
            dayName: "New Day",
            date: Date.now()
        }),
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })

    return await response.json();
}


async function deleteDay(username, dayName) {
    const response = await fetch("http://127.0.0.1:8080/api/delete", {
        method: "POST",
        body: JSON.stringify({
            username: username,
            dayName: dayName
        }),
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
}

export default Days;
