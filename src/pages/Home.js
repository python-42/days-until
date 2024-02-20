import { useState } from "react";
import './Home.css';

function Home( {nameCallback, dayViewCallback} ) {
  const [text, setText] = useState("");

  function handleSubmission(event) {
    event.preventDefault();
    nameCallback(text);
    dayViewCallback(true);
  }
  
  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="Home">
      <h1>Days Until...</h1>
      <h2>Count down the number of days until something at a glance.</h2>

      <form onSubmit={handleSubmission}>
        <label htmlFor="nameBox" >Enter your name</label>
        <input placeholder="Name..." value={text} onChange={handleChange}/>
      </form>
    </div>
  );
}



export default Home;
