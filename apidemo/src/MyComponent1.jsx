import {useState } from "react";
import axios from "axios";


function MyComponent1(){
    const[name,setName]=useState("");
    const[predictedAge,SetpredictedAge]=useState(0);

    function handleClick(){
        axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
                SetpredictedAge(res.data);
            })
    }

    function handleChange(event){
            setName(event.target.value);
    }
    return(
        <>
        <input type="text" placeholder="enter your name" onChange={handleChange}/>
        <button onClick={handleClick}>Predict the Age</button>
        <h3>Count: {predictedAge.count}</h3>
        <h3>Age: {predictedAge.age}</h3>
        <h3>Name :{predictedAge.name}</h3>
        </>
    )
}

export default MyComponent1;