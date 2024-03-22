import {useState,useEffect} from 'react'
import menu_url from './constants'


function useGetData(restId){

 let [ShowMenu,setShowMenu] = useState(null)

 useEffect(() =>{
    fetchData()
  },[])
  let fetchData = async function(){
    let data = await fetch(menu_url+restId)
    let result = await data.json()
    console.log(result)
    setShowMenu(result)
}
return ShowMenu
}
export default useGetData