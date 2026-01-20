import "../src/Styles/Counter.css";
import {useState} from "react";
function Counter(){
    const[count, setCount] = useState(0);
    return(
        <>
        <div id="main">
            <div id="innerdiv">
                <div id="heading">
                    <h1>count:{count}</h1>
                </div>
                <div id="increase">
                    <button id="ibtn"onClick={()=>setCount(count+1)}>Increase</button>
                </div>
                <div id="reset">
                    <button id="rbtn" onClick={()=>setCount(0)}>Reset</button>
                </div>
                <div id="decrease">
                    <button id="dbtn"onClick={()=>setCount(count-1)}>Decrease</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Counter;