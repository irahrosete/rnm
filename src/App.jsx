import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import Home from './pages/Home'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Episodes from './pages/Episodes'

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
        </Routes>
      </Router>
    </>
  )
}

export default App