import { createBrowserRouter } from 'react-router-dom'
import About from '../views/about'
import Home from '../views/home'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
])

export default routes
