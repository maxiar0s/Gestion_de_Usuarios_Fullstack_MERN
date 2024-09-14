import React from "react";
import "./styles.css";
const CrearUsuarios = () => {
  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form className="row g-3">
          <div className="text-center">
            <h4>Ingrese sus datos personales</h4>
          </div>
          <div className="col-md-4 position relative">
            <label className="form-label">Ingrese nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="col-md-4 position relative">
            <label className="form-label">Ingrese apellido</label>
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              required
            />
          </div>
          <div className="col-md-4 position relative">
            <label className="form-label">Ingrese edad</label>
            <input
              type="number"
              className="form-control"
              placeholder="Edad"
              required
            />
          </div>
          <div className="col-md-4 position relative">
            <label className="form-label">Ingrese telefono</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend3">
                +
              </span>
              <input
                type="number"
                className="form-control no-spinner"
                placeholder="Telefono"
                required
              />
            </div>
          </div>
          <div className="col-md-4 position relative flex-grow-1">
            <label className="form-label">Ingrese correo</label>
            <input
              type="email"
              className="form-control"
              placeholder="Correo"
              required
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                Aceptar terminos y condiciones
              </label>
              <div className="invalid-feedback">
                Debes aceptar los terminos y condiciones
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="submit">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearUsuarios;
