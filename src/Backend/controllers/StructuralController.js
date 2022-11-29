const Controller = require("./Controller");

const ConstrucitonModel = require('../models/ConstructionModel');
const APIError = require("../services/ErrorService");

class StructuralController {
    static getHome = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Componentes/page', {
            title: 'Conexão MRV', 
            css: '/frontend/Main/Home/Home.css',
            conteudo: __dirname + '/../../Frontend/Main/Home/Home'
        });
    })

    static getBusca = (req, res) => Controller.execute(req, res, async (req, res) => {
        const obras = await ConstrucitonModel.allByColumns({});
        
        res.render(__dirname + '/../../Frontend/Main/Componentes/page', {
            title: 'Busca | Conexão MRV', 
            css: '/frontend/Main/Busca/Busca.css',
            conteudo: __dirname + '/../../Frontend/Main/Busca/Busca',
            obras: obras
        });
    })

    static getInstitucional = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Componentes/page', {
            title: 'Institucional | Conexão MRV', 
            css: '/frontend/Main/Institucional/Institucional.css',
            conteudo: __dirname + '/../../Frontend/Main/Institucional/Institucional'
        });
    })

    static getObra = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const obra = await ConstrucitonModel.getByColumns({id: req.params.id});
            
            res.render(__dirname + '/../../Frontend/Main/Componentes/page', {
                title: `${obra.name} | Conexão MRV`, 
                css: '/frontend/Main/Obra/Obra.css',
                conteudo: __dirname + '/../../Frontend/Main/Obra/Obra',
                obra: obra
            });   
        } catch (error) {
            res.redirect("/busca");
        }
    })
    
}

module.exports = StructuralController;