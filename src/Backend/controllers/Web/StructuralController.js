const Controller = require("../Controller");

const ConstrucitonModel = require('../../models/ConstructionModel');

class WebStructuralController {
    static getHome = (req, res) => Controller.execute(req, res, async (req, res) => {
        const obras = await ConstrucitonModel.allByColumns();
        
        res.render('Main/Componentes/page', {
            title: 'Conexão MRV', 
            css: '/main/Home/Home.css',
            conteudo:  __dirname + '/../../../Frontend/Main/Home/Home',
            obras: obras
        });
    })

    static getBusca = (req, res) => Controller.execute(req, res, async (req, res) => {
        const obras = await ConstrucitonModel.allByColumns({});
        
        res.render('main/Componentes/page', {
            title: 'Busca | Conexão MRV', 
            css: 'main/Busca/Busca.css',
            conteudo: __dirname + '/../../../Frontend/Main/Busca/Busca',
            obras: obras
        });
    })

    static getInstitucional = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('Main/Componentes/page', {
            title: 'Institucional | Conexão MRV', 
            css: '/main/Institucional/Institucional.css',
            conteudo: __dirname + '/../../../Frontend/Main/Institucional/Institucional'
        });
    })

    static getObra = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const obra = await ConstrucitonModel.getByColumns({id: req.params.id});
            
            res.render('Main/Componentes/page', {
                title: `${obra.name} | Conexão MRV`, 
                css: '/main/Obra/Obra.css',
                conteudo: __dirname + '/../../../Frontend/Main/Obra/Obra',
                obra: obra
            });   
        } catch (error) {
            res.redirect("/busca");
        }
    })
    
    static getLogin = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('Main/Login/Login', {error: {}});
    })

    static postLogin = (req, res) => Controller.execute(req, res, async (req, res) => {
        const {password, email} = req.body;

        const error = {};

        if(password.length < 8) {
            error.password = 'Senha precisa ter mais de 8 caracteres';
        }

        if(!email.includes('@')){
            error.email = 'Email precisa estar corretamente formatado';
        }

        res.render('Main/Login/Login', {error: error});
    })
}

module.exports = WebStructuralController;