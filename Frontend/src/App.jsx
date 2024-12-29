import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
import Dashboard from './Components/Dashboard'
import Feedback from './Components/Feedback'

function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<Main child={<Dashboard/>}/>}></Route>
  <Route path='/addfeedback' element={<Main child={<Feedback/>}/>}></Route>

</Routes>
    </>
  )
}

export default App
