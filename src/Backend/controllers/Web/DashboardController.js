const Controller = require("../Controller");

const ConstrucitonModel = require('../../models/ConstructionModel');
const UserBuilderModel = require("../../models/UserModel");
const UserAdministratorModel = require("../../models/AdministratorModel");

class WebDashboardController {
    static getHome = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('dashboard/Componentes/page', {
            title: 'Home', 
            css: '/dashboard/Home/Home.css',
            conteudo:  __dirname + '/../../../Frontend/Dashboard/Home/Home',
            secondAside: null,
            currentPage: req.url
        });
    })

    static getConstructions = (req, res) => Controller.execute(req, res, async (req, res) => {
        const constructions = await ConstrucitonModel.allByColumns();

        res.render('dashboard/Componentes/page', {
            title: 'Obras', 
            css: '/dashboard/Obras/Obras.css',
            conteudo:  __dirname + '/../../../Frontend/Dashboard/Obras/Obras',
            secondAside: __dirname + '/../../../Frontend/Dashboard/Componentes/FilterAside',
            currentPage: req.url,
            constructions: constructions
        });
    })

    static getUsers = (req, res) => Controller.execute(req, res, async (req, res) => {
        const users = await UserBuilderModel.allByColumns();

        res.render('dashboard/Componentes/page', {
            title: 'Usuários', 
            css: '/dashboard/Usuarios/Usuarios.css',
            conteudo:  __dirname + '/../../../Frontend/Dashboard/Usuarios/Usuarios',
            secondAside: __dirname + '/../../../Frontend/Dashboard/Componentes/FilterAside',
            currentPage: req.url,
            users: users
        });
    })

    static getAdministrators = (req, res) => Controller.execute(req, res, async (req, res) => {
        const administrators = await UserAdministratorModel.allByColumns();

        res.render('dashboard/Componentes/page', {
            title: 'Usuários', 
            css: '/dashboard/Administradores/Administradores.css',
            conteudo:  __dirname + '/../../../Frontend/Dashboard/Administradores/Administradores',
            secondAside: __dirname + '/../../../Frontend/Dashboard/Componentes/FilterAside',
            currentPage: req.url,
            administrators: administrators
        });
    })
}

module.exports = WebDashboardController;