import "/src/App.css"

export default function Smoothbore() {
    return (
        <>
            <div className="values_panel">
                <label htmlFor="elevation_angle">Elevation Angle</label>
                <input id="elevation_angle" type="number" min={0.} max={15} step={0.1} defaultValue={0}/>
                <label htmlFor="powder_charge">Powder Charge</label>
                <select id="powder_charge">
                    <option value="fullCharge">Full Charge(6lb)</option>
                    <option value="halfCharge">Half Charge(3lb)</option>
                    <option value="quarterCharge">Quarter Charge(1.5lb)</option>
                </select>
                <label htmlFor="projectile_weight">Projectile weight</label>
                <select id="projectile_weight">
                    <option value="6lb">6lb</option>
                    <option value="9lb">9lb</option>
                    <option value="12lb">12lb</option>
                </select>
                <label htmlFor="muzzle_velocity">Muzzle Velocity</label>
                <input type="text" value="80 km/h" readOnly/>
                <label htmlFor="crew_experience">Crew Experience</label>
                <select id="crew_experience">
                    <option value="child">Child</option>
                    <option value="recruit">Recruit</option>
                    <option value="gunner">Gunner</option>
                    <option value="veteran">Veteran</option>
                    <option value="elite">Elite</option>
                </select>
            </div>
        </>
    )
}