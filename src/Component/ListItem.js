import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {updateCart} from '../utils/store'
import { updateCartData } from '../utils/store'

const ListItem = (props) => {
    //console.log(props.setShowItem)
    let dispatch = useDispatch()
    console.log(dispatch)
    console.log(props.setShowItem)
    let [item,setItem] = useState('')
    let {setShowItem,showItem} = props
    let handelItems = ()=> {
        setShowItem()
    }
    let url1 ='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
    return (
        <div>
            <span>{props?.item?.title}({props?.item?.length})</span>
          <span onClick={()=>{
          handelItems()
        }}>🔽</span>

        {props.showItem && props?.item?.map(function(ele){
            return <div className='d-flex justify-content-between m-3'>
                <div>
                    <h2>{ele?.card?.info?.name}</h2>
                    <p>{(ele?.card?.info?.price)/100}</p>
                    <p>{ele?.card?.info?.description}</p>
                </div>
                <div>
                     <button className='btn btn-danger btn-sm' onClick={()=>{
                        dispatch(updateCartData(ele))
                        dispatch(updateCart())
                     }}>Add</button>
                     {ele?.card?.info?.imageId ? <img src={`${url1}${ele?.card?.info?.imageId}`} style={{height:'140px',width:'140px',borderRadius:'40px'}}/>:''}
                </div>
                </div>
                
        })}
        </div>
        
    )
    }
export default ListItem