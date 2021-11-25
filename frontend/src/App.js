import {BrowserRouter as Router, Route} from 'react-router-dom'
import Barra from './components/Barra.component';
import CrearSolicitud from './components/CrearSolicitud'
import VerSolicitudes from './components/VerSolicitudes.component';
import CrearAdmin from './components/CrearAdmin.component';
import Login from './components/Login.component'
import Index from './components/index'

function App() {
  return (
    <Router>
        <Barra/>
        <Route path='/login'exact component={Login}/>
        <Route path='/index'exact component={Index}/>
        <Route path='/crearSolicitud'exact component={CrearSolicitud}/>
        <Route path='/verSolicitudes'exact component={VerSolicitudes}/>
        <Route path='/crearAdmin'exact component={CrearAdmin}/>
    </Router>
    
  );
}

export default App;
