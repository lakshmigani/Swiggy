import { useState,useEffect} from "react";

export const Counter = () => {
    let [count,setCount] = useState(0)
    let [count1,setCount1] = useState(0)
        useEffect(function(){
            fetchData()
        },[])

    let fetchData = async function(){
        let data = await fetch('https://fakestoreapi.com/products')
        let result = await data.json()
        console.log(result)
    }
        return (
        <div> 
        <button onClick={() =>setCount(count+1)}>increment</button>
        <button onClick={() =>setCount1(count1-1)}>decreament</button>
        <h1>{count}</h1>
        <h1>{count1}</h1>
        </div>
        )
        }