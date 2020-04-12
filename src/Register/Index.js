import React from 'react';
import DateTime from '../DateTime/Index';

class RegisterIndex extends React.Component {
    render() {
        return (
            <div className="pure-g">
              <div className="pure-u-1">
                <h2>Registrar</h2>
                <div className="date-time">
                  <p>
                    Fecha y hora:
                    <DateTime />
                  </p>
                </div>
              </div>
            </div>
        );
    }
}

export default RegisterIndex;
