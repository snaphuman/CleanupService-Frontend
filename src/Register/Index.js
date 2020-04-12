import React from 'react';
import DateTime from '../DateTime/Index';

class RegisterIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isWorking: true};

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState( state => ({
            isWorking: !state.isWorking
        }))
    }

    render() {
        return (
            <div className="pure-g">
              <div className="pure-u-1">
                <h2>Registrar</h2>
                <div className="date-time">
                  <h3>Fecha y hora</h3>
                  <DateTime />
                </div>
                <div className="work-controls">
                  <h3>Día de trabajo</h3>
                  <button id="check_in" className="pure-button button-success" onClick={this.toggle} disabled={this.state.isWorking}>Iniciar</button>
                  <button id="check_out" className="pure-button button-error" onClick={this.toggle} disabled={!this.state.isWorking}>Terminar</button>
                </div>
                <div className="work-controls">
                  <button className="pure-button pure-button-primary">Ver registros</button>
                </div>
              </div>
            </div>
        );
    }
}

export default RegisterIndex;
