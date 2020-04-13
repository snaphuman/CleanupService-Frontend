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

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="custom-menu-wrapper">
          <div className="pure-menu custom-menu custom-menu-top">
            <a className="pure-menu-heading custom-menu-brand" href="#">
              Servicio doméstico
            </a>
            <a href="#" className="custom-menu-toggle" id="toggle">
              <s className="bar"></s><s className="bar">
              </s>
            </a>
          </div>
          <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked">
            <div className="custom-menu-screen"></div>
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
        </div>
        <div className="l-content">
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
    );
  }
}

export default App;
