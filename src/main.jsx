import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoticesPage from './components/Dashboard.jsx'
import CulturalEventsSection from './components/Cultural.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/info' element={<NoticesPage/>}></Route>
      <Route path='/cultural' element={<CulturalEventsSection/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
