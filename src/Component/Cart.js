import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteCartData } from "../utils/store"

const Cart = ()=>{
    let data = useSelector((state)=>{
    return state?.user?.cartData
}
)
     let dispatch = useDispatch()
     
    let displayItem = data.map(function(ele){
        return ele?.card?.info
    })
    let url1 = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'

    console.log(displayItem)

    return (
        <div>
            {displayItem.map(function(ele){
                return <div className='d-flex justify-content-between m-3'>
                    <div>
                      <h4>{ele?.name}</h4>
                      <p>{(ele?.price/100)}</p>
                      <p>{ele?.description}</p>
                    </div>
                    {ele?.imageId ? <img src={`${url1}${ele?.imageId}`} alt='food' style={{width:'100px',height:'100px',borderRadius:'20px'}}/>:''}

                    <button className='btn btn-danger btn-sm-2 mt-3' onClick={()=>{

                        dispatch(deleteCartData(ele))
                        console.log('removed')
                     }}>Remove</button>
                    </div>
            })}
        </div>
    )

}
export default Cart