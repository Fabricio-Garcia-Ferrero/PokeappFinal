import { BrowserRouter,Route,Routes } from "react-router-dom"
import './App.css'
import { Home } from './pages/Home'
import { Pokedex } from "./pages/Pokedex"
import { Favoritos } from "./pages/Favoritos"
import { TeamBuilder } from "./pages/TeamBuilder"
import { Entrenadores } from "./pages/Entrenadores"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/favoritos' element={<Favoritos />} />
          <Route path='/teambuilder' element={<TeamBuilder />} />
          <Route path='/trainers' element={<Entrenadores />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App