import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Smoothbore from "./components/Smoothbore.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Smoothbore" element={<Smoothbore/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;