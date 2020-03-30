import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import RegisterIndex from './Register/Index';
import ContractIndex from './Contract/Index';
import PaymentIndex from './Payment/Index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Servicio doméstico</h1>
      </header>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/register">Registro</Link>
          </li>
          <li>
            <Link to="/contract">Contrato</Link>
          </li>
          <li>
            <Link to="/payment">Pagos</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/register">
            <RegisterIndex />
          </Route>
          <Route path="/contract">
            <ContractIndex />
          </Route>
          <Route path="/payment">
            <PaymentIndex />
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
