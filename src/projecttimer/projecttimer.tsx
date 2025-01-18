import useTimer from "../hooks/useTimer";
import "./projecttimer.scss";

function ProjectTimer() {

    const[days, hours, minutes, seconds] = useTimer("2025-12-31T23:59:59", 1000);

    return(
        <div className="project_timer">
            <div className="time-wrapper">
                <span className="digit">{days}</span>
            </div>
            <div className="time-wrapper">
                {/* padStart will add 0 if length of number < 2*/}
                <span className="digit">{hours.toString().padStart(2, "0")}</span>
            </div>
            <div className="time-wrapper">
                <span className="digit">{minutes.toString().padStart(2, "0")}</span>
            </div>
            <div className="time-wrapper">
                <span className="digit">{seconds.toString().padStart(2, "0")}</span>
            </div>
        </div>
    )
}

export default ProjectTimer;