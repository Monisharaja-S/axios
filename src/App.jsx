import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


//export const API_URL ="https://jsonplaceholder.typicode.com/users"
//export const API_URL =  "https://659935c9a20d3dc41cef6114.mockapi.io/Axios_Task_json";
export const API_URL = "https://6650a5d3ec9b4a4a6032dd9d.mockapi.io/axios"

function App() {

  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router}/>
  </>
}

export default App