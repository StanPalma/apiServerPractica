
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    usuario: {
        type: String,
        required: [true, 'El usuario es obligatorio']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio'],
    },
    edad: {
        type: Number,
        required: [true, 'La edad es obligatoria']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
    },
});



/* UsuarioSchema.methods.toJSON = function() {
    const { __v, usuario, nombre, apellido, edad, correo, ...usuarios  } = this.toObject();
    return usuarios;
} */

module.exports = model( 'Usuario', UsuarioSchema );
