import { useState } from "react";
import './Home.css';

function Home( {nameCallback, dayViewCallback} ) {
  const [text, setText] = useState("");

  function handleSubmission(event) {
    event.preventDefault();
    console.log(nameCallback);
    console.log(text);
    nameCallback(text);
    dayViewCallback(true);
  }
  
  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <h1>Days Until...</h1>
      <h2>Count down the number of days until something at a glance.</h2>

      <form onSubmit={handleSubmission}>
        <label htmlFor="nameBox" >Enter your name</label>
        <br/>
        <input placeholder="Name..." value={text} onChange={handleChange}/>
      </form>
    </div>
  );
}



export default Home;
