import {Header} from "./Component/Header"
import Body from "./Body"
import RestaurantsMenu from "./Component/RestaurantsMenu"
import { createBrowserRouter,Outlet } from "react-router-dom"
import { Suspense, useEffect, useState } from "react"
import { lazy } from "react"
import { createContext } from "react"
import Cart from "./Component/Cart"


const Offers = lazy(()=> import('./Component/Offers'))
const Help = lazy(()=> import('./Component/Help'))

export let Context = createContext()
let Provider = Context.Provider
let pName = 'Lakshmi'

function App () {
    return(
        <div>
            <Provider value={pName}>
            <Header/>
        <Outlet/>
        </Provider>
        </div>
        
    )
}
export let appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Body />

            },
            {
                path:'/Offers',
                element:<Suspense fallback={<h1>Loading...</h1>}> <Offers/> </Suspense>
            },
            {
                path:'/Help',
                element:<Suspense fallback={<h1>Loading...</h1>}> <Help/> </Suspense>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/restaurants/:restId',
               element:<RestaurantsMenu/>
            }

        ]
    }
])
export default App
