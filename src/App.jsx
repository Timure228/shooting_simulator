import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Smoothbore from "./components/Smoothbore.jsx";
import Nine_Pounder from "./components/Nine_Pounder.jsx"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Smoothbore" element={<Smoothbore/>}/>
                <Route path="/British_9_pounder" element={<Nine_Pounder/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;