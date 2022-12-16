const Controller = require("../Controller");

const UserBuilderModel = require('../../models/UserBuilderModel');
const APIError = require("../../services/ErrorService");
const AuthService = require("../../services/AuthService");

class WebUpdateUserController {

    static getEdicaoUsuarioEmpresa = (req, res) => Controller.execute(req, res, async (req, res) => {
        let logado = true;
        try {
            AuthService.verifyToken(req.cookies.AuthToken)
        } catch (err) {
            logado = false;
        }
        try {
            const id = AuthService.getIdFromToken(req.cookies['AuthToken']);

            const usuario = await UserBuilderModel.getByColumns({id: id});

            res.render('main/Componentes/page', {
                title: usuario.name,
                css: '/main/EdicaoUsuario/EdicaoUsuario.css',
                conteudo: __dirname + '/../../../Frontend/Main/EdicaoUsuario/EdicaoEmpresa',
                usuario: usuario,
                search: '',
                logado: logado

            });
        }catch (error) {
            console.log(error);
            res.redirect("/home")
        }
        
    })

    static postEdicaoUsuarioEmpresa = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const id = AuthService.getIdFromToken(req.cookies['AuthToken']);

            const usuario = await UserBuilderModel.getByColumns({id: id});

            
            usuario.setName(req.body.name);
            usuario.setCnpj(req.body.cnpj);
            usuario.setEmployeesNumber(req.body.employees_number);
            usuario.setCellphone(req.body.cellphone);
            usuario.setEmail(req.body.email);
            usuario.setName(req.body.name);
            usuario.setName(req.body.name);
            usuario.setName(req.body.name);

            await usuario.update();
        }catch (error) {
            console.log(error);
        }

        res.redirect("/usuario/empresa")
    })

    static getEdicaoUsuarioDono = (req, res) => Controller.execute(req, res, async (req, res) => {
        let logado = true;
        try {
            AuthService.verifyToken(req.cookies.AuthToken)
        } catch (err) {
            logado = false;
        }
        try {
            const id = AuthService.getIdFromToken(req.cookies['AuthToken']);

            const usuario = await UserBuilderModel.getByColumns({id: id});

            res.render('main/Componentes/page', {
                title: usuario.name,
                css: '/main/EdicaoUsuario/EdicaoUsuario.css',
                conteudo: __dirname + '/../../../Frontend/Main/EdicaoUsuario/EdicaoDono',
                usuario: usuario,
                search: '',
                logado: logado

            });
        }catch (error) {
            console.log(error);
            res.redirect("/home")
        }
    })

    static postEdicaoUsuarioDono = (req, res) => Controller.execute(req, res, async (req, res) => {
        console.log('OI');
        try {
            const id = AuthService.getIdFromToken(req.cookies['AuthToken']);

            const usuario = await UserBuilderModel.getByColumns({id: id});

            
            usuario.setCounterEmail(req.body.counter_email);
            usuario.setCellphone(req.body.counter_cellphone);

            await usuario.update();
        }catch (error) {
            console.log(error);
        }

        res.redirect("/usuario/dono")
    })

    static getEdicaoUsuarioContador = (req, res) => Controller.execute(req, res, async (req, res) => {
        let logado = true;
        try {
            AuthService.verifyToken(req.cookies.AuthToken)
        } catch (err) {
            logado = false;
        }
        try {
            const id = AuthService.getIdFromToken(req.cookies['AuthToken']);

            const usuario = await UserBuilderModel.getByColumns({id: id});

            res.render('main/Componentes/page', {
                title: usuario.name,
                css: '/main/EdicaoUsuario/EdicaoUsuario.css',
                conteudo: __dirname + '/../../../Frontend/Main/EdicaoUsuario/EdicaoContador',
                usuario: usuario,
                search: '',
                logado: logado
            });
        }catch (error) {
            console.log(error);
            res.redirect("/home")
        }
    })

    static postEdicaoUsuarioContador = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const id = AuthService.getIdFromToken(req.cookies['AuthToken']);

            const usuario = await UserBuilderModel.getByColumns({id: id});

            console.log(req.body)
            
            usuario.setCounterEmail(req.body.counter_email);
            usuario.setCounterCellphone(req.body.counter_cellphone);

            await usuario.update();
        }catch (error) {
            console.log(error);
        }

        res.redirect("/usuario/contador")
    })
    
}

module.exports = WebUpdateUserController;