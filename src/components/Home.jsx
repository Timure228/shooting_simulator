import { Link } from "react-router-dom";
import "/src/App.css"

function Home() {
    return (
        <div>
            <span id="main_title">Artillery Shooting Simulator</span>
            <nav>
                <div className="cannon_panel">
                    <Link to="/Smoothbore">
                        <img id="menu_cannon" src="/cannons/smoothbore_field_cannon.jpg" width={230} />
                    </Link>
                    <Link to="/British_9_pounder">
                        <img id="menu_cannon" src="/cannons/british_9_pounder.png" width={210} />
                    </Link>
                    <Link to="/Feldhaubitze">
                        <img id="menu_cannon" src="/cannons/10.5_cm_Feldhaubitze.png" width={230} />
                    </Link>
                    <Link to="/sFH">
                        <img id="menu_cannon" src="/cannons/15_cm_sFH_13.png" width={230} />
                    </Link>
                    <Link to="/sFH18">
                        <img id="menu_cannon" src="/cannons/sFH18.png" width={230} />
                    </Link>
                    <Link to="/M777">
                        <img id="menu_cannon" src="/cannons/M777.jpg" width={230} />
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Home;