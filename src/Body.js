import React, { useEffect, useState } from 'react'
import './Component/Body.css'
import Card from './Component/Card'
import { Link } from 'react-router-dom'
import {restaurantVeg} from './Component/Card'
import { useContext } from 'react'
import { Context } from './App'


const Body = (props)=> {
    let name = useContext(Context)
    let pName = (props.pName)

   let [searchItem,setSearchItem] = useState('')
   let [filteredData,setFilteredData] = useState([])
//    let [topRatedItems,setTopRatedItems] = useState([])
    let [listOfCards, setListOfCards] = useState(
        [
        // {
        //     image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cbkdr4keht4zovtwgx2r',
        //     title:'Mehfil',
        //     rating:'4.1',
        //     time:'20-25 mins',
        //     cuisiness:'Biryani,North India',
        //     areaName:'Himayath Nagar'

        // },
        // {
        //     image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jyq3caes7wmvwdxco07a',
        //     title:'Imperial',
        //     rating:'4.2',
        //     time:'30-55 mins',
        //     cuisiness:'Biryani,Chinese India',
        //     areaName:'RedHills'

        // },
        // {
        //     image:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4d44eb7d20c7ccfe83a68b056ceed4ef',
        //     title:'Lucky',
        //     rating:'4',
        //     time:'20-25 mins',
        //     cuisiness:'Biryani,North India',
        //     areaName:'Masab Tank'

        // }

      

    ])

    let RestaurantVegItem =  restaurantVeg(Card)

    useEffect(()=>{
        fetchData()
    },[])
    let fetchData = async function(){
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        let result = await data.json()
        let restaurantsData = result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setListOfCards(restaurantsData)
      
       setFilteredData(restaurantsData)
      
    }
    console.log(listOfCards)

  return (
//     <div style={{display:'flex', flexWrap:'wrap'}}>
//         {listOfCards.map(function(ele){
// return <Card  item={ele}/>
// }


// ) }
        
//     </div>
<div>

    <input type='text' onChange={function(event){
        setSearchItem(event.target.value)
    }}/>
        
        <button onClick ={function(){
            let filteredItems = listOfCards.filter(function(ele){
                return ele.info.name.toUpperCase().includes(searchItem.toUpperCase())    
            
            })
            setFilteredData(filteredItems)
            
        }}className='btn btn-secondary btn-sm m-2 mt-0'>search</button>
        <button onClick ={function(){
            fetchData()
        }}className='btn btn-primary btn-sm m-2 mt-0'>All</button>
    
    <button onClick={function(){
        let ratedItems =filteredData.filter(function(ele){
            return ele?.info?.avgRating >= 4.2
        })
        setFilteredData(ratedItems)
        // setFilteredData(topRatedItems)
    }}className='btn btn-warning btn-sm m-2 mt-0'>topRatedItems</button>
 <h3>{name}, Whats on your Mind?</h3>
    <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around'}}>
       
    {filteredData.map(function(ele){
        return <Link to={'/restaurants/'+ele?.info?.id} className='link'>{ele?.info?.veg ?<RestaurantVegItem item={ele}/>:<Card item={ele}/>}</Link>
    })}
      </div>
      </div>
  )
}
export default Body