import React from "react";
const CrearUsuarios = () => {
  return (
    <form className="row g-3">
      <div className="col-md-4">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          required
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Apellido</label>
        <input
          type="text"
          className="form-control"
          placeholder="Apellido"
          required
        />
      </div>
      <div className="col-md-4">
        <label className="form-label">Edad</label>
        <input
          type="number"
          className="form-control"
          placeholder="Edad"
          required
        />
      </div>
      <div class="col-md-4">
        <label class="form-label">Telefono</label>
        <div class="input-group">
          <span class="input-group-text" id="inputGroupPrepend3">
            +
          </span>
          <input
            type="number"
            class="form-control"
            placeholder="Telefono"
            required
          />
        </div>
      </div>

      <div className="col-md-4 flex-grow-1">
        <label className="form-label">Correo</label>
        <input
          type="text"
          className="form-control"
          placeholder="Correo"
          required
        />
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
