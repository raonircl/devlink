
import { createBrowserRouter } from "react-router-dom"

import Admin from './pages/Admin'
import Home from './pages/Home'
import Login from './pages/Login'

import Error from './pages/Error'
import Private from "./routes/Private"
import Networks from "./pages/Networks"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/admin',
    element: <Private> <Admin/> </Private>
  },
  {
    path: '/admin/social',
    element: <Networks/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '*',
    element: <Error/>
  }
])

export { router };