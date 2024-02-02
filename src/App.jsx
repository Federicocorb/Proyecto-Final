
import { useState } from 'react'
import './App.css'
import PrivateRoute from './Routes/PrivateRoute'
import { BrowserRouter } from 'react-router-dom'
import PublicRouter  from './Routes/PublicRouter'
import CardPlan from './components/CardPlan/CardPlan'

function App() {

  const [user , setUser] = useState({ token:null,userInfo:null, isLogged:false})

  return (
    <>
    {
      !user.isLogged ?
      <PublicRouter/>
      :
      <BrowserRouter>
       <PrivateRoute/>
      </BrowserRouter>
    }
</>
  )
}

export default App
