function Days({name, dayViewCallback}) {
    return (
        <div className="days">
            <h1>Days page fr fr</h1>
            <p>Name: {name}</p>
            <button onClick={() => dayViewCallback(false)}>Return Home</button>
        </div>
    );
}

export default Days;