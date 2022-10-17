const { response, request } = require("express");
const sms = require("../database/sms");

const Usuario = require("../models/usuario");

const usuariosGet = async (req = request, res = response) => {
  const { limite = 20, desde = 0 } = req.query;

  // const [total, usuarios] = await Promise.all([
  //   Usuario.countDocuments(),
  //   Usuario.find().skip(Number(desde)).limit(Number(limite)),
  // ]);
  const usuarios = await Promise.all([Usuario.find()]);

  res.json({
    // total,
    usuarios,
  });
};

const usuariosPost = async (req, res = response) => {
  const { usuario, nombre, apellido, edad, correo } = req.body;
  const usuarios = new Usuario({ usuario, nombre, apellido, edad, correo });

  // Guardar en BD
  await usuarios.save();
  sms.sendSMS(usuarios.usuario); // Envia el mensaje que se registró

  res.json({
    usuarios,
  });
};

const usuariosPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, usuario, ...resto } = req.body; // solo se coloca usuario antes de ...resto para que busque por el usuario

  const usuarios = await Usuario.findByIdAndUpdate(id, resto);

  res.json(usuarios);
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - usuariosPatch",
  });
};

const usuariosDelete = async (req, res = response) => {
  const { id } = req.params;

  // Fisicamente lo borramos
  // const usuario = await Usuario.findByIdAndDelete( id );

  // const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.json(usuario);
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
