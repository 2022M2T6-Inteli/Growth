// Requires
const express = require('express');

// Web Routes
const StructuralRouter = require('./StructuralRoutes');
const CadastroRouter = require('./CreateUserRoutes');
const EdicaoUsuarioRouter = require('./UpdateUserRoutes');

const Router = express.Router();

Router.use(StructuralRouter);
Router.use('/cadastro', CadastroRouter);
Router.use('/usuario', EdicaoUsuarioRouter);

module.exports = Router;