
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './pages/header/Header'
import Dashboard from './pages/dashboard/Dashboard'
import NoMatch from './pages/noMatch/NoMatch'
import AddStudent from './pages/student/AddStudent'
import UpdateStudent from './pages/student/UpdateStudent'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/student' element={<AddStudent/>}></Route>
        <Route path='/student/:id' element={<UpdateStudent/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
