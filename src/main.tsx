import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { FavoritesPage } from './FavoritesPage';
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/favorites",
    element: <FavoritesPage></FavoritesPage>
  },
  {
    path:"/search",
    element: <SearchPage></SearchPage>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
