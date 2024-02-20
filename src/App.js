import { useState } from "react";
import './App.css';

function App() {
  const [text, setText] = useState("");

  function handleSubmission(event) {
    event.preventDefault();
    console.log(text);
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



export default App;
