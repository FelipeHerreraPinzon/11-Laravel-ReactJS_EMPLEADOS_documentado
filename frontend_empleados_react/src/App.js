
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//se importa el componente
import MostrarEmpleados from './components/MostrarEmpleados';
import CrearEmpleado from './components/CrearEmpleado';
import EditarEmpleado from './components/EditarEmpleado';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <nav className="navbar navbar-expand navbar-light bg-warning">
            <div className="nav navbar-nav">
                <Link className="nav-item nav-link active fs-3" to={"/"}>Empleados </Link>
                <Link className="nav-item nav-link fs-3" to={"/crear"}>CrearEmpleado </Link>
            </div>
        </nav>
       
        <Routes>
          <Route path='/' element={ <MostrarEmpleados/>} />
          <Route path='/crear' element={ <CrearEmpleado/>} />
          <Route path='/editar/:id' element={ <EditarEmpleado/>} />
        </Routes>
     

         
    </div>
    </BrowserRouter>
  );
}

export default App;
