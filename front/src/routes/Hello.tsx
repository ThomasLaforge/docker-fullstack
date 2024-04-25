import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hello() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    async function askName(){
        const response = await fetch(`http://localhost:2023/hello/${name}`);
        const data = await response.json();
        setMessage(data.message);
    }

    return <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={askName}>Ask name</button>
        <div>Message : {message}</div>
        
        <Link to="/time">Voir l'heure</Link>
    </div>
}