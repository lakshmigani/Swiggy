 import {useState,useEffect} from "react"
 export function Footer(){
    let fetchData = async function(){
        let data = await fetch('https://fakestoreapi.com/products')
        let result = await data.json()
        console.log(result)
        setCount(result)
        
    }
    useEffect(()=>{
        fetchData()
    })
    let[count,setCount] = useState([

        {
            name :'Lakshmi',
            age : '24'

        },
        {
            name :'Linitha',
            age : '25'
        }

    ])
    return (
        <div>
            {count.map(function(ele){
                return<div>
                    <h4>{ele.title}</h4>
                    {/* <p>{ele.age}</p> */}

                    </div>
                 
            })}
        </div>
    )
    
}
