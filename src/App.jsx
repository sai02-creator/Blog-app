import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div style={{ height: "100vh" }}>
     <Navbar/>
     <Routes>
      <Route path='/' />
      <Route path='/create-post' />
      <Route path='/edit-post:id' />
     </Routes>
    </div>
  )
}

export default App
