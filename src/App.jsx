
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokeDexPage from './pages/PokeDexPage'
import PokeInfoPage from './pages/PokeInfoPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
 
  return (
   <div>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      
      <Route element={<ProtectedRoutes/>}>
      
      <Route path='/pokedex' element={<PokeDexPage/>}/>
      <Route path='/pokemon/:name' element={<PokeInfoPage/>}/>
      
      </Route>
    </Routes>
    
   </div>
  )
}

export default App
