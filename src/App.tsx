import { RouterProvider } from 'react-router-dom'
import routes from './router/index'

export default function App() {
  return <RouterProvider router={routes} />
}
