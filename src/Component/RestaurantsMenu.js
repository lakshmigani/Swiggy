import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListItem from './ListItem'
import useGetData from '../utils/useGetData'

const RestaurantsMenu = () => {
  let {restId} = useParams()
  let [showIndex,setShowIndex] = useState(null)
  
  let getData = useGetData(restId)
    
    let value = getData?.data?.cards[0]?.card?.card?.info
    console.log(value)
    
  let cardsData = getData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(function(ele){
      return ele?.card?.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  })
   console.log(cardsData)

  let itemsCard = cardsData?.map(function(ele){
    return ele?.card?.card?.itemCards
  })
  console.log(itemsCard)

  // let cardsDatainfo = cardsData[0]?.card?.card?.itemCards
  // let url1 ='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
  // // console.log(cardsDataInfo)
  return (
    <div>
     
     <h3>{value?.name}</h3>
      <p>{value?.costForTowMessage}</p>
      <p>{value?.avgRating}</p>
      <p>{value?.cuisines.join('')}</p>

      <div className='d-flex justify-content-between m-3 cursor-pointer'></div>

     {itemsCard?.map(function(ele,index){

      const hanleData =()=> showIndex===index ?
      setShowIndex(null):setShowIndex(index)

      return <div>
           <ListItem item={ele}
           showItem = {index === showIndex ? true:false}
           setShowItem = {hanleData}
           />
           </div>
     })}
        </div> 
 )
    }

export default RestaurantsMenu