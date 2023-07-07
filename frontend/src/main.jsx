import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route, } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from './context/AuthProvider'
import Home from './pages/Home.jsx';
import ErrorPage from './pages/Errorpage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Time from './pages/Time.jsx';
import Resource from './pages/Resource.jsx';
import Financial from './pages/Financial.jsx';
import Recipe from './pages/Recipe.jsx';
import Daily from './pages/Daily.jsx';
import './css/index.css'
import RequireAuth from './components/RequireAuth.jsx'




const queryClient = new QueryClient()

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
    <Route element={<RequireAuth/>} >
      <Route path="time" element={<Time />} />
      <Route path="resource" element={<Resource />} />
      <Route path="financial" element={<Financial />} />
      <Route path="health" element={<Recipe />} />
      <Route path="quotes" element={<Daily />} />
    </Route>
  </Route>
));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
)
