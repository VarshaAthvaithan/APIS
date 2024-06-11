import { useEffect, useState } from "react";
import axios from "axios";

function MyComponent(){
    const[catfact,setCatFact]=useState("");
    
    function handleClick(){
        axios.get("https://catfact.ninja/fact").then((res)=>{
            setCatFact(res.data.fact);
        })
    }

    useEffect(()=>{
        handleClick();
    },[]);

    return(
        <>
            <button onClick={handleClick}>GENERATE CAT FACT</button>
            <p>
                {catfact}
            </p>
        </>
    )
}

export default MyComponent;