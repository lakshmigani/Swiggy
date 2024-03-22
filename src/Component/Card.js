import './Card.css'
import { useContext } from 'react'
import {  Context } from '../App'


const Card = (props) => {
  let product =props.item
  let name = useContext(Context)

    let url="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"  

  return (
    
    <div style = {{padding:'16px', textAlign:'center'}}>
       <img style = {{borderRadius:'30px'}} className='image' src={url+product?.info?.cloudinaryImageId} alt="food" />
        <h4 className='fs-20'>{product?.info?.name}</h4>
        <b style={{paddingRight:'10px'}}>{product?.info?.avgRating}</b>
        <b>{product?.info?.sla?.slaString}</b>
        <p>{product?.info?.cuisines[0]}</p>
        <p>{product?.info?.areaName}</p>
        
    </div>
  )
}

export default Card

export function restaurantVeg(Card){
  return(props)=>{

    return <div>
      <label className='text-white bg-success' style={{width:'50px', height:'30px',borderRadius:'5px',paddingLeft:'5px'}}>Veg</label>
      <Card {...props}/>
    </div>
  }
}