import { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

//handy hook to be able to use timer in different components 

function useTimer(deadline: string, interval: number) {

    const[months, setMonths] = useState(0);
    const[days, setDays] = useState(0);
    const[hours, setHours] = useState(0);
    const[minutes, setMinutes] = useState(0);
    const[seconds, setSeconds] = useState(0);
    const[mileseconds, setMileseconds] = useState(0);    

    const parsedDeadline = Date.parse(deadline)
    const[timeSpan, setTimeSpan] = useState(parsedDeadline - Date.now())

    useEffect(() => {
        // setInterval will call setTimeSpan with defined interval
        const intervalId = setInterval(() => {
            setTimeSpan(parsedDeadline - Date.now());
        }, interval);

        setDays(Math.floor(timeSpan/DAY));
    setHours(Math.floor(timeSpan/HOUR));
    setMinutes(Math.floor(timeSpan/MINUTE));
    setSeconds(Math.floor(timeSpan/SECOND));
        return () => {
            //clear interval to repeat functionality after every rendering 
            clearInterval(intervalId);
        }
    });

    

    return(
        [days, hours, minutes, seconds]
    );
}

export default useTimer;