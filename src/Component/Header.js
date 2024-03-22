import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react'
import Context from '../App'
import {useSelector} from 'react-redux'

export const Header = ()=> {
   let name = useContext(Context)
   let [count,setCount] = useState(null)

  let value =  useSelector((state)=> {
    return state.user.cartCount
   })

    let [log,setLog] = useState('Login')
    return (
        
            <div id='div'>
                <img id='image' src='https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA' alt='swiggy'/>

                <ul>
                 <img src='https://cdn-icons-png.freepik.com/256/1946/1946488.png' alt='home' height='20px' width='30px' style={{marginTop:'20px',paddingRight:'5px'}}/>
                <li><Link className="link" to='/'>Home</Link></li>
                <img src='https://icon-library.com/images/offer-icon/offer-icon-15.jpg' alt='offer' height='25px' width='40px' style={{marginTop:'20px',paddingLeft:'6px'}}/>
                <li><Link className="link" to='/offers'>Offers <sup style={{color:'orange'}}>New</sup></Link></li>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgw-rAR2BIWnHimGhGfGZ-5rc0oi0Odtia86DwypvLLQ&s'alt='help' height='25px' width='40px' style={{marginTop:'20px',paddingLeft:'6px'}}/>
                <li><Link className="link"  to='/help'>Help</Link></li>
                <span>{value}</span>
                <img src='https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png' alt='cart' height='20px' width='50px' style={{marginTop:'20px',paddingLeft:'6px'}}/>
                <li><Link className="link"  to='/cart'>Cart</Link></li>
               
                <button className='btn btn-secondary btn-sm mt-2' onClick={()=>{log==='LogIn'?setLog('LogOut'):setLog('LogIn')}}>{log}</button>
                </ul>
            </div>
            
        
    )
} 
