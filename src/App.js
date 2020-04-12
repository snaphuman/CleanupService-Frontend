import React from 'react';
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
        <Router>
          <div className="pure-menu pure-menu-horizontal">
            <a className="pure-menu-heading" href="">
              Servicio doméstico
            </a>
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <Link to="/register" className="pure-menu-link">Registro</Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/contract" className="pure-menu-link">Contrato</Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/payment" className="pure-menu-link">Pagos</Link>
              </li>
            </ul>
          </div>
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
        </Router>
  );
}

export default App;
