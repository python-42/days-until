import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import Days from "./pages/Days";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Home />} />
                <Route path= "/days" element={<Days />} />

                <Route path = "*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;