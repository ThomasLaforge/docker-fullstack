import { useEffect, useState } from "react";

export default function Time() {
    const [time, _] = useState(new Date());
    const [serverTime, setServerTime] = useState<Date | null>(null);

    useEffect(() => {
        const fetchTime = async () => {
            const response = await fetch("https://api-date-pwa.onrender.com/server/time");
            const data = await response.json();
            console.log(data);
            setServerTime(new Date(data.time));
        }

        setTimeout(() => {
            fetchTime();
        }, 4000)
    }, []);
    
    return <div>
        <div>Heure client : {time.toLocaleTimeString()}</div>
        {serverTime && <div>Heure serveur : {serverTime.toLocaleTimeString()}</div>}
    </div>
}