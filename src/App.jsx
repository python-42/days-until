import { useState } from "react";

import Home from './pages/Home.jsx';
import Days from "./pages/Days.jsx";

function App() {
    const [name, setName] = useState("");
    const [viewDay, setViewDay] = useState(false);

    return (
        <div>
            {viewDay ?
                <Days name={name} dayViewCallback={setViewDay} />
                :
                <Home nameCallback={setName} dayViewCallback={setViewDay} />            
            }
            
        </div>
    );
}

export default App;
