import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
// import About from '../views/about'
// import Home from '../views/home'

const News = React.lazy(() => import('@/views/news'))

export const routes = createBrowserRouter([
  {
    path: '/',
    // element: (
    //   <React.Suspense fallback={<>111</>}>
    //     <Home />
    //   </React.Suspense>
    // )
    lazy: () => import('../views/home')
  },
  {
    path: '/about',
    lazy: async () => ({
      Component: (await import('@/views/about')).default
    })
  },
  {
    path: 'news',
    element: (
      <React.Suspense fallback={<>111</>}>
        <News />
      </React.Suspense>
    )
  }
])

export default routes
