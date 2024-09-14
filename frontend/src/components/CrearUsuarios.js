import React from "react";
import "./styles.css";
const CrearUsuarios = () => {
  return (
    <form className="row g-3">
      <div className="col-md-4 position relative">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          required
        />
      </div>
      <div className="col-md-4 position relative">
        <label className="form-label">Apellido</label>
        <input
          type="text"
          className="form-control"
          placeholder="Apellido"
          required
        />
      </div>
      <div className="col-md-4 position relative">
        <label className="form-label">Edad</label>
        <input
          type="number"
          className="form-control"
          placeholder="Edad"
          required
        />
      </div>
      <div class="col-md-4 position relative">
        <label class="form-label">Telefono</label>
        <div class="input-group">
          <span class="input-group-text" id="inputGroupPrepend3">
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
        <label className="form-label">Correo</label>
        <input
          type="email"
          className="form-control"
          placeholder="Correo"
          required
        />
      </div>
      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label class="form-check-label" for="invalidCheck">
            Aceptar terminos y condiciones
          </label>
          <div class="invalid-feedback">
            Debes aceptar los terminos y condiciones
          </div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
    /*<div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <div className="col mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="col mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Apellido"
            required
          />
          <div className="col mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Edad"
              required
            />
          </div>
        </div>
      </div>
    </div>*/
  );
};

export default CrearUsuarios;
