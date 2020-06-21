import React from 'react';
import DateTime from '../DateTime/Index';
import ProfilePicture from '../ProfilePicture/Index';

class PaymentIndex extends React.Component {
    render() {
        return (
          <div className="pure-g container">
            <div className="pure-u-1">
              <h2>Pagar</h2>
              <div className="date-time">
                <h3>Fecha y hora</h3>
                <DateTime />
              </div>
              <div className="payment-controls">
                <h3>Dia de pago</h3>
                <div className="pure-g">
                  <div className="pure-u-1-4">
                    <ProfilePicture />
                  </div>
                  <div className="pure-u-3-4">
                    <form className="pure-form pure-g pure-form-stacked">
                      <div className="pure-u-1-2">
                        <label for="worked-days">Días trabajados</label>
                        <input id="worked-days" className="pure-input-1" type="number" disabled="true" />
                      </div>
                      <div className="pure-u-1-2">
                        <label for="remaining-payments">Pagos restantes</label>
                        <input id="remaining-payments" className="pure-input-1" type="number" disabled="true" />
                      </div>
                      <div className="pure-u-1-2">
                        <label for="daily-salary">Salario diario</label>
                        <input id="daily-salary" className="pure-input-1" type="number" disabled="true" />
                      </div>
                      <div className="pure-u-1-2">
                        <label for="total-payment">Pago total</label>
                        <input id="total-payment" className="pure-input-1" type="number" disabled="true" />
                      </div>
                      <div className="pure-u-1 pure-u-md-1-2 l-box">
                        <button id="pay" className="pure-button button-error button-xlarge button-fluid">
                          Pagar
                        </button>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default PaymentIndex;
