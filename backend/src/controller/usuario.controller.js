const usuarioCtrl = {};
const Usuario = require("../models/usuario");

usuarioCtrl.getUser = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

//post
usuarioCtrl.createUser = async (req, res) => {
  const { nombre, apellido, edad, telefono, correo } = req.body;
  const newUser = new Usuario({
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    telefono: telefono,
    correo: correo,
  });
  await newUser.save();
  res.json({ message: "Usuario creado" });
};

usuarioCtrl.getUsuario = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
};

usuarioCtrl.deleteUser = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ message: "Usuario eliminado" });
};

//put
usuarioCtrl.updateUser = async (req, res) => {
  const { nombre, apellido, edad, telefono, correo } = req.body;
  await Usuario.findByIdAndUpdate(req.params.id, {
    nombre,
    apellido,
    edad,
    telefono,
    correo,
  });
  res.json({ message: "Usuario actualizado" });
};

module.exports = usuarioCtrl;
