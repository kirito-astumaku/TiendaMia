const PayOut = () => {
  return (
   
    <div className=" col-md-7 col-lg-8 ">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation " noValidate="">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    defaultValue=""
                    required=""
                  />
                  <div className="invalid-feedback">
                     EL Nombre tiene que ser valido
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    defaultValue=""
                    required=""
                  />
                  <div className="invalid-feedback">
                  EL Apellido tiene que ser valido
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Usuario
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required=""
                    />
                    <div className="invalid-feedback">
                    EL Usuario tiene que ser valido
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-body-secondary">(Opcional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                  Ingrese una dirección de correo electrónico válida
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                   Dirección
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                  />
                  <div className="invalid-feedback">
                  Ingrese una dirección  válida
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                  Dirección  2{" "}
                    <span className="text-body-secondary">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Continente
                  </label>
                  <select className="form-select" id="country" required="">
                    <option value="">Selecciona...</option>
                    <option>America</option>
                    <option>Europa</option>
                    <option>Asia</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    País
                  </label>
                  <select className="form-select" id="state" required="">
                    <option value="">Selecciona...</option>
                    <option>Estados unidos</option>
                    <option>Mexico</option>
                    <option>Costa rica</option>
                    <option>Colombia</option>
                    <option>España</option>
                    <option>Francia</option>
                    <option>Alemania</option>
                    <option>Portugal</option>
                    <option>China</option>
                    <option>Rusia</option>
                    <option>Japon</option>
                    <option>Corea del sur</option>
                    

                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              {/* <hr className="my-4" /> */}
              <div className="form-check">
                {/* <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address" 
                /> */}
                {/*  <label className="form-check-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label> */}
              </div>
              <div className="form-check">
                {/* <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info" 
                />*/}
                {/* <label className="form-check-label" htmlFor="save-info">
                  Save this information for next time
                </label> */} 
               </div>
              {/* <hr className="my-4" /> */}
              <h3 >Metodo de Pago</h3>

              <h4 className="mb-3">Payment</h4>
              <div className="my-3">
                <div className="form-check"> 
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    defaultChecked=""
                    required=""
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Trajeta de Credito
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Trajeta de Debito
                  </label>
                </div>

              </div>
              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name de la trajeta
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                  />
                  <small className="text-body-secondary">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">Name on card is required</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                   Numero de la trajeta
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Codigo de seguridad
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Expiration date required</div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                   Fecha de Vencimiento 
                  </label>
                  <input
                    type="month"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Procesando Pago⭐
              </button>
            </form>
          </div>
  )
}

export default PayOut
