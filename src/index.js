import React from "react"
import ReactDOM  from "react-dom/client"
import {appRouter} from "./App"
import { RouterProvider } from "react-router-dom"
import App from "./App"
import {store} from "./utils/store"
import { Provider } from "react-redux"

let ele = document.getElementById('root')
let root = ReactDOM.createRoot(ele)
root.render(
<div><Provider store={store}>
   
   <RouterProvider router={appRouter}/>
   </Provider>
</div>
)
