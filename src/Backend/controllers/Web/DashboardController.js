const Controller = require("../Controller");

const ConstrucitonModel = require('../../models/ConstructionModel');
const UserBuilderModel = require("../../models/UserModel");
const UserAdministratorModel = require("../../models/AdministratorModel");
const APIError = require("../../services/ErrorService");

class WebDashboardController {
    static getHome = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('dashboard/Componentes/page', {
            title: 'Home',
            css: '/dashboard/Home/Home.css',
            conteudo: __dirname + '/../../../Frontend/Dashboard/Home/Home',
            secondAside: null,
            currentPage: req.url
        });
    })

    static getConstructions = (req, res) => Controller.execute(req, res, async (req, res) => {
        const constructions = await ConstrucitonModel.allByColumns();

        res.render('dashboard/Componentes/page', {
            title: 'Obras',
            css: '/dashboard/Obras/Obras.css',
            conteudo: __dirname + '/../../../Frontend/Dashboard/Obras/Obras',
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
            conteudo: __dirname + '/../../../Frontend/Dashboard/Usuarios/Usuarios',
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
            conteudo: __dirname + '/../../../Frontend/Dashboard/Administradores/Administradores',
            secondAside: __dirname + '/../../../Frontend/Dashboard/Componentes/FilterAside',
            currentPage: req.url,
            administrators: administrators
        });
    })

    static getAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const administrator = await UserAdministratorModel.getByColumns({
                id: req.params.id
            });


            res.render('dashboard/Componentes/page', {
                title: administrator.name,
                css: '/dashboard/Administrador/Administrador.css',
                conteudo: __dirname + '/../../../Frontend/Dashboard/Administrador/Administrador',
                secondAside: '',
                currentPage: req.url,
                administrator: administrator
            });
        } catch (error) {
            if (error instanceof APIError && error.status == 404) {
                res.redirect("/dashboard/administradores")
            }else {
                throw error;
            }
        }
    })

    static getUser = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const user = await UserBuilderModel.getByColumns({
                id: req.params.id
            });

            res.render('dashboard/Componentes/page', {
                title: user.name,
                css: '/dashboard/Usuario/Usuario.css',
                conteudo: __dirname + '/../../../Frontend/Dashboard/Usuario/Usuario',
                secondAside: '',
                currentPage: 's',
                user: user
            });

        } catch (error) {
            if (error instanceof APIError && error.status == 404) {
                res.redirect("/dashboard/usuarios")
            } else {
                throw error;
            }
        }
    })

    static getConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const construction = await ConstrucitonModel.getByColumns({id: req.params.id});

            res.render('dashboard/Componentes/page', {
                title: 'Usuários',
                css: '/dashboard/Obra/Obra.css',
                conteudo: __dirname + '/../../../Frontend/Dashboard/Obra/Obra',
                secondAside: '',
                currentPage: req.url,
                construction: construction
            });
        } catch (error) {
            if (error instanceof APIError && error.status == 404) {
                res.redirect("/dashboard/obras")
            }else {
                throw error;
            }
        }
    })
}

module.exports = WebDashboardController;