import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import Home from './pages/Home'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Episodes from './pages/Episodes'
import Locations from './pages/Locations'
import CardDetails from './components/card/CardDetails'

const App = () => {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/:id' element={<CardDetails />} />
          <Route path='/episodes/:id' element={<CardDetails />} />
          <Route path='/locations/:id' element={<CardDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
