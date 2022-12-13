const Controller = require("../Controller");

const UserBuilderModel = require('../../models/UserBuilderModel');
const APIError = require("../../services/ErrorService");

class WebUpdateUserController {

    static getEdicaoUsuarioEmpresa = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const usuario = await UserBuilderModel.getByColumns({
                id: req.params.id
            });

            res.render('main/Componentes/page', {
                title: usuario.name,
                css: '/main/EdicaoUsuario/EdicaoUsuario.css',
                conteudo: __dirname + '/../../../Frontend/Main/EdicaoUsuario/EdicaoEmpresa'
            });
        }catch (error) {
            if (error instanceof APIError && error.status == 404) {
                res.redirect("/home")
            } else{
                throw error;
            }
        }
        
    })

    static postEdicaoUsuarioEmpresa = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('Main/EdicaoUsuario/EdicaoEmpresa');
    })

    static getEdicaoUsuarioDono = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('Main/EdicaoUsuario/EdicaoDono');
    })

    static postEdicaoUsuarioDono = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('Main/EdicaoUsuario/EdicaoDono');
    })

    static getEdicaoUsuarioContador = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('Main/EdicaoUsuario/EdicaoContador'   );
    })

    static postEdicaoUsuarioContador = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('Main/EdicaoUsuario/EdicaoContador'   );
    })
    
}

module.exports = WebUpdateUserController;