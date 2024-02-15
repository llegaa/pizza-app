import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, defer, RouterProvider} from "react-router-dom";
import {Card} from "./pages/Card/Card.tsx";
import {Error} from "./pages/Error/Error.tsx";
import {Layout} from "./layout/Layout.tsx";
import {Product} from "./pages/Product/Product.tsx";
import axios from "axios";
import {PREFIX} from "./helpers/API.ts";
const Menu = lazy(()=>import('./pages/Menu/Menu.tsx'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<>Загрузка</>}><Menu/></Suspense>
            },
            {
               path: '/card',
               element: <Card/>
            },
            {
                path: '/product/:id',
                element: <Product/>,
                errorElement: <>Ошибка</>,
                loader: async ({params})=>{
                    return defer({
                       data: await axios.get(`${PREFIX}/products/${params.id}`).then(data=>data)
                    })
                    // return defer({
                    //     data: new Promise((resolve,reject)=>{
                    //         setTimeout(()=>{
                    //             axios.get(`${PREFIX}/products/${params.id}`).then(data=>resolve(data)).catch(e=> reject(e))
                    //         }, 2000)
                    //     })
                    // })
                }
            }
        ]
    },
    {
        path: '/auth',
        element: <></>,
        children:[
            {
                path: '/login',
                element: <></>
            },
            {
                path: '/register',
                element: <></>
            }
        ]
    },
    {
        path: '*',
        element: <Error/>
    }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
