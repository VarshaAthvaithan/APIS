import { useState } from "react";
import axios from "axios";


function MovieApi(){
    const[excuse,setExcuse]=useState("")

    function handleClick(exuses){
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${exuses}`).then((res)=>{
            console.log(res.data);
        })
    }

    return(
        <>
           <button onClick={()=>handleClick("family")}>FAMILY</button>
           <button onClick={()=>handleClick("office")}>OFFICE</button>
           <button onClick={()=>handleClick("children")}>CHILDREN</button>

           <p>{excuse}</p>
        </>
    )
}
export default MovieApi;