import { useEffect, useState } from "react";
import DayView from "../components/DayView.jsx";
import "./Days.css";
import Modal from "react-modal";

Modal.setAppElement("#root")

const SERVER_IP = "https://python-42.xyz:8080";

function Days({name, dayViewCallback}) {
    const [days, setDays] = useState(<p>Loading...</p>);
    const [modalVisible, setModalVisibility] = useState(false);

    const [dayName, setDayName] = useState("");
    const [date, setDate] = useState(new Date());

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

    function requestDaysWithDelay(delay) {
        setDays(<p>Loading...</p>)
        setTimeout(() => {
            writeRequestToDOM();    
        }, delay);
    }

    function handleCreateButton() {
        setModalVisibility(true);
    } 

    function deleteCallback(name, dayName) {
        deleteDay(name, dayName);
        requestDaysWithDelay(100);
    }

    function handleSubmission(event) {
        event.preventDefault();

        setDayName(dayName.trim());
        if (dayName === "") {
            alert("Day name may not be empty.")
        }else {    
            insert(name, dayName, Date.parse(date).valueOf());
            setModalVisibility(false);
            requestDaysWithDelay(100);
            setDate("")
            setDayName("")
        }
    }

    function handleNameChange(event) {
        setDayName(event.target.value);
    }

    function handleDateChange(event) {
        setDate(event.target.value);
    }

    return (
        <div>
            <h1>Your Days</h1>
            <p>Name: {name}</p>
            <div className="buttonContainer">
                <button onClick={() => dayViewCallback(false)}>Return Home</button>
                <button onClick={() => handleCreateButton()} className="createBtn">Create</button>
            </div>

            <Modal isOpen={modalVisible} className="modal">
                <div className="modalBody" >
                    <h1>Create New Day</h1>
                    <form className="modalForm" onSubmit={handleSubmission}>
                        <label htmlFor="dayName">Day Name</label>
                        <input className="formInput" name="dayName" value={dayName} onChange={handleNameChange} />

                        <label htmlFor="dayDate">Date</label>
                        <input className="formInput" name="dayName" type="datetime-local" value={date} onChange={handleDateChange} />

                        <input className="formInput" type="submit" value="Create Day" />
                    </form>
                    <button onClick={() => setModalVisibility(false)}>Cancel</button>
                </div>
            </Modal>

            <div className="days">
                {
                    days
                }
            </div>
        </div>
    );
}

async function request(name) {
    const response = await fetch(SERVER_IP + "/api/get?name=" + name)
    return await response.json();
}

async function insert(username, dayName, date) {
    const response = await fetch(SERVER_IP +"/api/add", {
        method: "POST",
        body: JSON.stringify({
            username: username,
            dayName: dayName,
            date: date
        }),
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })

    return await response.json();
}


async function deleteDay(username, dayName) {
    const response = await fetch(SERVER_IP + "/api/delete", {
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
