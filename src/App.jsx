import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AddClients from './Pages/AddClients'
import Saidbar from './Components/Saidbar'
import AllClients from './Pages/AllClients'

function App() {
  const [count, setCount] = useState(0)
  let [editID,seteditId]=useState('')
  let [torf,setTorf]=useState(false)

  return (
    <BrowserRouter>

     {
      torf?  
      <Routes>
      <Route path='/' element={<AllClients editID={editID} seteditId={seteditId} />}/>
      <Route path='/add' element={<AddClients/>}/>
    </Routes>:<Login torf={torf} setTorf={setTorf}/>
    // <Routes><Route path='/login' element={<Login setTorf={setTorf}/>}/></Routes>
     }

     
    </BrowserRouter>
  )
}

export default App
