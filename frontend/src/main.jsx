import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import { createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Home from './pages/Home.jsx';
import ErrorPage from './pages/Errorpage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Time from './pages/Time.jsx';
import Resource from './pages/Resource.jsx';
import Financial from './pages/Financial.jsx';
import Recipe from './pages/Recipe.jsx';
import Daily from './pages/Daily.jsx';
import TimeForm from './components/TimeForm.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "login/",
        element: <Login/>,
      },
      {
        path: "signup/",
        element: <Signup/>,
      },
      {
        path: "time/",
        element: <Time/>,
      },
      {
        path: "resource/",
        element: <Resource/>,
      },
      {
        path: "finance/",
        element: <Financial/>,
      },
      {
        path: "recipe/",
        element: <Recipe/>,
      },
      {
        path: "quotes/",
        element: <Daily/>,
      },

    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
