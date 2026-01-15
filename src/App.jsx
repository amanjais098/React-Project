// import Counter from "./Counter"

// function App(){
//     return(
//         <>
//         <Counter/>
//         </>
//     )
// }
// export default App 


// import Colorchange from "./Colorchange";

// function App(){
//     return(
//         <>
//         <Colorchange/>
//         </>
//     )
// }
// export default App;


import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Counter2 from './pages/Counter2';
import Random2 from './pages/Random2';
import { jsx } from "react/jsx-runtime";

const App =()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="Counter2" element={<Counter2/>}/>
            <Route path="Random2" element={<Random2/>}/>
        </Routes>
        </>
    )
}
export default App