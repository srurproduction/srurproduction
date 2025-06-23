import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './HomePage';
import ServiceDetail from './ServiceDetail';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path ="/" element={<HomePage />} />
    <Route path ="/service/:id" element={<ServiceDetail />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
