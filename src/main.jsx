import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Meals from './components/Meals.jsx'
import About from './components/About.jsx'
import MealDetails from './components/MealDetails.jsx'
import Loader from './components/Loader.jsx'
import SearchedFood from './components/SearchedFood.jsx'
import InvalidInput from './components/InvalidInput.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/meals',
        element: <Meals />,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/meal/:id',
        element: <MealDetails />,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      },
      {
        path: '/search/:name',
        element: <SearchedFood />,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
      },
      // {
      //   path: '/search/',
      //   element: <InvalidInput />
      // },
      {
        path: '/loading',
        element: <Loader />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
