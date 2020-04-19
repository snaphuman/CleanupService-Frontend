import React from 'react';

class ContractIndex extends React.Component {
    render() {
        return (
            <div className="pure-g container">
              <div className="pure-u-1">
                <h2>Contrato</h2>
                <div className="pure-g">
                  <div className="pure-u-1-4">
                    <div className="file-field-wrapper">
                      <div className="file-field">
                        <span>Subir fotografía</span>
                        <input type="file" />
                      </div>
                    </div>
                  </div>
                  <div className="pure-u-3-4">
                    <form className="pure-form pure-g pure-form-stacked">
                      <div className="pure-u-1">
                        <label for="fullname">Nombres y apellidos</label>
                        <input id="fullname" className="pure-input-1" type="text" placeholder="Ingrese su nombre completo" />
                        <span className="pure-form-message">Este campo es obligatorio</span>
                      </div>
                      <div className="pure-u-1-2">
                        <label for="id-number">Número de identificación</label>
                        <input id="id-number" className="pure-input-1" type="text" placeholder="Ingrese su número de identificación" />
                        <span className="pure-form-message">Este campo es obligatorio</span>
                      </div>
                      <div className="pure-u-1-2">
                        <label for="contract-date">Fecha de contrato</label>
                        <input id="contract-date" className="pure-input-1" type="text" placeholder="Ingrese fecha de inicio de contrato" />
                        <span className="pure-form-message">Este campo es obligatorio</span>
                      </div>
                      <div className="pure-u-1-2">
                        <div className="pure-g">
                          <div className="pure-u-1-2">
                            <label for="contract-duration">Duración</label>
                            <input id="contract-duration" className="pure-input-1" type="number" placeholder="Meses duración del contrato" />
                            <span className="pure-form-message-inline">meses</span>
                          </div>
                          <div className="pure-u-1-2">
                            <label for="contract-payments">Pagos</label>
                            <input id="contract-payments" className="pure-input-1" type="text" disabled />
                          </div>
                        </div>
                      </div>
                      <div className="pure-u-1-2">
                        <label for="contract-date">Fecha de contrato</label>
                        <input id="contract-date" className="pure-input-1" type="text" placeholder="Seleccione una fecha" />
                        <span className="pure-form-message">Este campo es obligatorio</span>
                      </div>
                      <div className="pure-u-1">
                        <label for="contract-id">Dirección contrato</label>
                        <input id="contrat-id" className="pure-input-1" type="text" />
                      </div>
                      <div className="pure-u-1-2">
                        <label for="patron-wallet">Billetera patrón</label>
                        <input id="patron-wallet" className="pure-input-1" type="text" placeholder="Ingrese llave publica beneficiario" />
                        <span className="pure-form-message">Este campo es obligatorio</span>
                      </div>
                      <div className="pure-u-1-2">
                        <label for="beneficiary-wallet">Billetera beneficiario</label>
                        <input id="benefifiary-wallet" className="pure-input-1" type="text" placeholder="Ingrese llave publica beneficiario" />
                        <span className="pure-form-message">Este campo es obligatorio</span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default ContractIndex;
