import "/src/App.css"
import { useState } from "react";


export default function Smoothbore() {
    let width = document.body.getBoundingClientRect().width
    let height = document.body.getBoundingClientRect().height

    const [fire_button_src, setFire_button_src] = useState("src/assets/fire_button_cannon.png")
    const [cannon_src, setCannon_src] = useState("/src/assets/cannons/cannon_old.png")

    const [muzzle_velocity, setMuzzle_velocity] = useState(0)
    const [range, setRange] = useState(0)
    const [flight_time, setFlight_time] = useState(0)

    function calculate_coordinates() {
        // Get the Crew Experience
        let crew_exp = document.querySelector("#crew_experience").value
        if (crew_exp === "child") {
            crew_exp = Math.random() * (1.2 - 0.8) + 0.8
        }
        else if (crew_exp === "recruit") {
            crew_exp = Math.random() * (1.1 - 0.9) + 0.9
        }
        else if (crew_exp === "gunner") {
            crew_exp = Math.random() * (1.05 - 0.95) + 0.95
        }
        else if (crew_exp === "veteran") {
            crew_exp = Math.random() * (1.02 - 0.98) + 0.98
        } else {
            crew_exp = Math.random() * (1.01 - 0.99) + 0.99
        }

        // Calculate the Elevation Angle
        let elevation_angle = document.querySelector("#elevation_angle").value
        elevation_angle = elevation_angle * crew_exp

        // Convert the Elevation Angle to Radians
        let elevation_angle_rad = elevation_angle * Math.PI / 180;

        // Get the Powder Charge
        let powder_charge = document.querySelector("#powder_charge").value
        if (powder_charge === "fullCharge") {
            powder_charge = 2.7
        }
        else if (powder_charge === "halfCharge") {
            powder_charge = 1.4
        } else {
            powder_charge = 0.7
        }
        // Get the Projectile Weight
        let projectile_weight = document.querySelector("#projectile_weight").value
        if (projectile_weight === "2.7kg") {
            projectile_weight = 2.7
        }
        else if (projectile_weight === "4kg") {
            projectile_weight = 4
        } else {
            projectile_weight = 5.4
        }

        // Set The Cnstant Barrel Efficiency
        let CONSTANT_BARREL_EFFICIENCY = 130.

        // Calculate Muzzle Velocity
        let muzzle_velocity = Math.floor((CONSTANT_BARREL_EFFICIENCY * (Math.sqrt(powder_charge / projectile_weight))) * crew_exp)
        alert("Muzzle velocity: " + muzzle_velocity + "m/s")
        setMuzzle_velocity(muzzle_velocity)

        // Calculate the range
        let range = Math.abs(Math.floor(Math.pow(muzzle_velocity, 2) / 10 * Math.sin(2 * elevation_angle_rad)))
        setRange(range)
        alert("Range: " + range + "m")

        // Calculate the Time of Flight
        let flight_time = ((2 * muzzle_velocity) * Math.sin(elevation_angle_rad)) / 10
        setFlight_time(flight_time)
        alert("Estimated flight time " + flight_time + "seconds")

        return { range, flight_time }
    }

    function fire(e) {
        e.preventDefault()
        alert("FIRE!!!")
        setFire_button_src("src/assets/fired_button_cannon.png")
        const { range, flight_time } = calculate_coordinates();
        const fuse_burning = new Audio("/src/assets/sounds/fuse_burning.mp3");
        fuse_burning.play();
        setTimeout(() => {
            setFire_button_src("src/assets/fire_button_cannon.png")
            setCannon_src("src/assets/cannons/cannon_old_fire.png")

            let shell = document.querySelector("#art_shell")
            shell.style.opacity = 1
            shell.style.transition = "transform " + flight_time + "s" + " linear"
            shell.style.transform = "translateX(" + range + "px)"

            const shot = new Audio("/src/assets/sounds/cannon_fire.mp3");
            shot.play();

            setTimeout(() => {
                fuse_burning.pause();

                setCannon_src("src/assets/cannons/cannon_old.png");
                setFire_button_src("src/assets/fire_button_cannon.png");

                shell.style.transition = "transform 0s linear"
                shell.style.transform = "translate(0px)"
                shell.style.opacity = 0
            }, parseInt((flight_time * 1000) + 2000));
        }, 2000)
    }
    return (
        <>
            <div className="values_panel">
                <label htmlFor="elevation_angle">Elevation Angle</label>
                <input id="elevation_angle" type="number" min={0.} max={15} step={0.1} defaultValue={0}/>
                <label htmlFor="powder_charge">Powder Charge</label>
                <select id="powder_charge">
                    <option value="fullCharge">Full Charge(2.7kg)</option>
                    <option value="halfCharge">Half Charge(1.4kg)</option>
                    <option value="quarterCharge">Quarter Charge(0.7kg)</option>
                </select>
                <label htmlFor="projectile_weight">Projectile weight</label>
                <select id="projectile_weight">
                    <option value="2.7kg">2.7kg</option>
                    <option value="4kg">4kg</option>
                    <option value="5.4kg">12kg</option>
                </select>
                <label htmlFor="muzzle_velocity">Muzzle Velocity</label>
                <input type="text" value={muzzle_velocity + "m/s"} readOnly/>
                <label htmlFor="crew_experience">Crew Experience</label>
                <select id="crew_experience">
                    <option value="child">Child</option>
                    <option value="recruit">Recruit</option>
                    <option value="gunner">Gunner</option>
                    <option value="veteran">Veteran</option>
                    <option value="elite">Elite</option>
                </select>
            </div>
            <img src={fire_button_src} onClick={(e) => fire(e)} width={300}/>
            <img id="old_cannon_model" src={cannon_src} width={30}/>
            <div id="art_shell"
                 style={{
                     position: 'absolute',
                     width: '5px',
                     height: '5px',
                     top: '343px',
                     left: '36px',
                     backgroundColor: 'black',
                     borderRadius: '50%',
                     margin: '20px auto',
                     opacity: '0',
                     transform: 'translateX(0px)',
                     transition: 'left 0s linear'
                }}
            />
        </>
    )
}