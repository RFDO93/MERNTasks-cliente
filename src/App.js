import React,{useEffect,useContext} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//Components
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Proyectos from './components/proyectos/Proyectos'

//Context
import ProyectoState from './context/proyectos/ProyectoState'
import AuthState from './context/auth/AuthState'
import TareaState from './context/tareas/TareaState'

//Routes
import RutaPrivada from './routes/RutaPrivada'



function App() {

  return (
    <AuthState>
      <ProyectoState>
        <TareaState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              <RutaPrivada exact path="/proyectos" component={Proyectos} />
            </Switch>
          </Router>
        </TareaState>
      </ProyectoState>
    </AuthState>
  );
}

export default App;
