
import { createBrowserRouter } from "react-router-dom"
import Admin from "./pages/Admin"

import Home from './pages/Admin'
import Home from './pages/Home'
import Home from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Admin/>
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/',
    element: <Login/>
  },

])

export { router };