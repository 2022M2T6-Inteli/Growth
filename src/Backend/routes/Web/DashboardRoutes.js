const express = require('express')

const Controller = require('../../controllers/Web/DashboardController')

const Router = express.Router()

Router.get("/", Controller.getHome);
Router.get("/home", Controller.getHome);

Router.get("/login", Controller.getHome);
Router.post("/login", Controller.getHome);

Router.get("/obras", Controller.getConstructions);
Router.get("/obras/:id", Controller.getHome);

Router.post("/obras", Controller.getHome);
Router.post("/obras/:id", Controller.getHome);
Router.post("/obras/:id/delete", Controller.getHome);

Router.get("/usuarios", Controller.getUsers);
Router.get("/usuarios/:id", Controller.getHome);

Router.post("/usuarios", Controller.getHome);
Router.post("/usuarios/:id", Controller.getHome);
Router.post("/usuarios/:id/delete", Controller.getHome);

Router.get("/administradores", Controller.getAdministrators);
Router.get("/administradores/:id", Controller.getHome);

Router.post("/administradores", Controller.getAdministrators);
Router.post("/administradores/:id", Controller.getHome);
Router.post("/administradores/:id/delete", Controller.getHome);

module.exports = Router;