import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import Home from './Pages/Home.jsx'

import App from './App.jsx'
import './index.css'
import FeaturedPage from './Pages/FeaturedPage.jsx'
import NewArrivalPage from './Pages/NewArrivalPage.jsx'
import MoviePage from './Pages/MoviePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'featured', element: <FeaturedPage /> },
      { path: 'new-arrival', element: <NewArrivalPage /> },
      { path: 'movie/:id', element: <MoviePage /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
