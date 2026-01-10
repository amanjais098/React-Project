

import {useState, useEffect} from "react";
function Colorchange(){
    const[color, setColor] = useState("white");
    useEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color]);

    return(
        <>
            <div id="main">
                <button onClick={()=> setColor("red")}>Red</button>
                <button onClick={()=> setColor("green")}>Green</button>
                <button onClick={()=> setColor("blue")}>Blue</button>
                <button onClick={()=> setColor("white")}>Reset</button>
            </div>
        </>
    )

}
export default Colorchange;