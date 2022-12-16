const Controller = require("../Controller");

const ConstrucitonModel = require('../../models/ConstructionModel');
const UserModel = require('../../models/UserModel');
const AuthService = require('../../services/AuthService');
const APIError = require("../../services/ErrorService");
const WebController = require("./WebController");

class WebStructuralController extends WebController {
    static getHome = (req, res) => Controller.execute(req, res, async (req, res) => {
        const obras = await ConstrucitonModel.allByColumns();
        
        return this.renderWithPage(req, res, {
            title: 'Conexão MRV', 
            css: '/main/Home/Home.css',
            conteudo: 'Home/Home',
            obras: obras
        });
    })

    static getBusca = (req, res) => Controller.execute(req, res, async (req, res) => {
        const obras = await ConstrucitonModel.allByColumns({});
        
        return this.renderWithPage(req, res, {
            title: 'Busca | Conexão MRV', 
            css: '/main/Busca/Busca.css',
            conteudo: 'Busca/Busca',
            obras: obras
        });
    })

    static getInstitucional = (req, res) => Controller.execute(req, res, async (req, res) => {
        return this.renderWithPage(req, res, {
            title: 'Institucional | Conexão MRV', 
            css: '/main/Institucional/Institucional.css',
            conteudo: 'Institucional/Institucional'
        });
    })

    static getObra = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const obra = await ConstrucitonModel.getByColumns({id: req.params.id});
            
            return this.renderWithPage(req, res, {
                title: `${obra.name} | Conexão MRV`, 
                css: '/main/Obra/Obra.css',
                conteudo: 'Obra/Obra',
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

        if(!password || password.length < 8) {
            error.password = 'Senha precisa ter mais de 8 caracteres';
        }

        if(!email || !email.includes('@')){
            error.email = 'Email precisa estar corretamente formatado';
        }

        if(Object.keys(error).length){
            res.render('Main/Login/Login', {error: error});
        }else{
            try {
                const user = await UserModel.getByColumns({email: email})
                if(user.validatePassword(password)){
                    res.cookie('AuthToken',AuthService.makeToken(user.id));
                    res.redirect("/")
                }else{
                    res.render('Main/Login/Login', {error: error});
                }
            } catch (error) {
                if(error instanceof APIError) {
                    res.render('Main/Login/Login',{error: {password: 'credenciais incorretadas', email: 'credenciais incorretadas'}})                    
                }else {
                    throw error;
                }
            }
        }
    })

    static getLogout = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.clearCookie("AuthToken");
        res.redirect('/');
    })

}

module.exports = WebStructuralController;