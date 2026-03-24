import { useState } from "react"

export default function Batsman() {

    const [runs, setruns] = useState(0)

    const [sixes, setSixes] = useState(0);

    const handleSingle=()=>{
        const updatedRun = runs+1;
        setruns(updatedRun);

    }

    const handleFour=()=>{
        const updatedRun = runs+4;
        setruns(updatedRun);
    }

    const handleSix=()=>{
        const updatedRun=runs+6;
        const updatedSix = sixes+1;
        setSixes(updatedSix);
        setruns(updatedRun);
    }

    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            <h4>Six Count: {sixes}</h4>
            <div className="scorebtn">
                <button onClick={handleSingle} className="btn">Singles</button>
                <button onClick={handleFour} className="btn">Four</button>
                <button onClick={handleSix} className="btn">Six</button>
            </div>

        </div>
    )
}