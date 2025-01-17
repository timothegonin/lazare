import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage'
import Menu from './pages/Menu'
import Formules from './pages/Formules'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/lazare/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="menu" element={<Menu />} />
      <Route path="formules" element={<Formules />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
