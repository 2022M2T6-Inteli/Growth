const Controller = require("./Controller");

class StructuralController {
    static getHome = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Home/Home', {});
    })

    static getBusca = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Busca/Busca', {});
    })

    static getInstitucional = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Institucional/Institucional', {});
    })
}

module.exports = StructuralController;