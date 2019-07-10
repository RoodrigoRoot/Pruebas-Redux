import React  from 'react'
import Menu from './Menu'
import Usuarios from "./Usuarios"
import {BrowserRouter, Route} from 'react-router-dom'
const Tareas = () => <div>Tareas</div>

const App = ()=>(
  <BrowserRouter>
  <Menu/>
    <div className="margen">
    <Route exact path="/" component={Usuarios}/>
    <Route exact path="/tareas" component={Tareas}/>
    </div>
  </BrowserRouter>

)
export default App
