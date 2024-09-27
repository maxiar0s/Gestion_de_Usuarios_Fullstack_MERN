import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";

const ListaUsuarios = () => {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    const getUsuarios = async () => {
      const res = await axios.get("/api/usuarios");
      setLista(res.data);
    };
    getUsuarios();
  }, [lista]);
  const deleteUsuario = async (id) => {
    await axios.delete("/api/usuarios/" + id);
  };

  return (
    <div className="row">
      {lista.map((list) => (
        <div className="col-md-4 p-2">
          <div className="card">
            <div className="card-header">
              <h5 className="text-capitalize">{list.nombre}</h5>
            </div>
            <div className="card-body">
              <p className="text-capitalize">Apellido: {list.apellido}</p>
              <p>Edad: {list.edad}</p>
              <p>Telefono: +{list.telefono}</p>
              <p>Correo: {list.correo}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={() => deleteUsuario(list._id)}
              >
                Eliminar
              </button>
              <Link className="btn btn-primary m-1" to={"/edit/" + list._id}>
                Editar
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaUsuarios;
