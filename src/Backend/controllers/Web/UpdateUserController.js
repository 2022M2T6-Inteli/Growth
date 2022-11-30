const Controller = require("../Controller");

const ConstrucitonModel = require('../../models/ConstructionModel');

class WebUpdateUserController {

    static getEdicaoUsuarioEmpresa = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/EdicaoUsuario/Edicao/EdicaoEmpresa');
    })

    static postEdicaoUsuarioEmpresa = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/EdicaoUsuario/Edicao/EdicaoEmpresa');
    })

    static getEdicaoUsuarioDono = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/EdicaoUsuario/Edicao/EdicaoDono');
    })

    static postEdicaoUsuarioDono = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/EdicaoUsuario/Edicao/EdicaoDono');
    })

    static getEdicaoUsuarioContador = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/EdicaoUsuario/Edicao/EdicaoContador'   );
    })

    static postEdicaoUsuarioContador = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/EdicaoUsuario/Edicao/EdicaoContador'   );
    })
    
}

module.exports = WebUpdateUserController;