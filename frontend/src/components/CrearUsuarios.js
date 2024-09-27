import React, { useEffect } from "react";
import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CrearUsuarios = () => {
  const valorInicial = {
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    correo: "",
  };

  let { id } = useParams();

  const [usuario, setUsuario] = useState(valorInicial);
  const [subId, setSubId] = useState(id ?? "");
  const getDatos = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };
  const saveDatos = async (e) => {
    e.preventDefault();

    //validacion de creacion de usuario
    //console.log(usuario);

    //Logica para la peticion post
    const newUsuario = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo,
    };
    await axios.post("/api/usuarios", newUsuario);

    setUsuario({ ...valorInicial });
  };

  //funcion para actualizar usuario
  const updateUsuario = async (e) => {
    e.preventDefault();
    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo,
    };
    await axios.put("/api/usuarios/" + subId, newUser);
    setUsuario({ ...valorInicial });
    setSubId("");
  };

  //logica para hacer peticion a la api
  const obtUno = async (valorId) => {
    const res = await axios.get("/api/usuarios/" + valorId);
    setUsuario({
      nombre: res.data.nombre,
      apellido: res.data.apellido,
      telefono: res.data.telefono,
      edad: res.data.edad,
      correo: res.data.correo,
    });
  };
  useEffect(() => {
    if (subId !== "") {
      obtUno(subId);
    }
  }, [subId]);

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form className="row g-3" onSubmit={saveDatos}>
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
              name="nombre"
              value={usuario.nombre}
              onChange={getDatos}
            />
          </div>
          <div className="col-md-4 position relative">
            <label className="form-label">Ingrese apellido</label>
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              required
              name="apellido"
              value={usuario.apellido}
              onChange={getDatos}
            />
          </div>
          <div className="col-md-4 position relative">
            <label className="form-label">Ingrese edad</label>
            <input
              type="number"
              className="form-control"
              placeholder="Edad"
              required
              name="edad"
              value={usuario.edad}
              onChange={getDatos}
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
                name="telefono"
                value={usuario.telefono}
                onChange={getDatos}
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
              name="correo"
              value={usuario.correo}
              onChange={getDatos}
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
              <label className="form-check-label" htmlFor="invalidCheck">
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
        <form onSubmit={updateUsuario}>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-danger form-control mt-2">
              Actualizar usuario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearUsuarios;
