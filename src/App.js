
import { createBrowserRouter } from "react-router-dom"
import Admin from "./pages/Admin"

import Home from './pages/Admin'
import Home from './pages/Home'
import Home from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/admin',
    element: <Admin/>
  },
  {
    path: '/login',
    element: <Login/>
  },

])

export { router };