const Controller = require("../Controller");

const ConstrucitonModel = require('../../models/ConstructionModel');

class WebCreateUserController {
    static getCadastroEtapa1 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa1/CadastroEtapa1', {error: {}});
    })

    static postCadastroEtapa1 = (req, res) => Controller.execute(req, res, async (req, res) => {
        const {password, email} = req.body;

        const error = {};

        if(password.length < 8) {
            error.password = 'Senha precisa ter mais de 8 caracteres';
        }

        if(!email.includes('@')){
            error.email = 'Email precisa estar corretamente formatado';
        }
        console.log('erro:', error)
        if(Object.keys(error)){
            res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa1/CadastroEtapa1', {error: error});
        }else{
            res.redirect('/cadastro/etapa2');
        }
    })

    static getCadastroEtapa2 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa2/CadastroEtapa2', {error: {}});
    })
    
    static postCadastroEtapa2 = (req, res) => Controller.execute(req, res, async (req, res) => {
        const {razaoSocial, cnpj} = req.body;

        const error = {};

        if(razaoSocial.length === 0){
            error.razaoSocial = "Digite a Razão Social"
        }

        if(cnpj.length < 18){
            error.cnpj = "Cnpj inválido"
        }
        console.log(error)
        if(Object.keys(error)){
            res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa2/CadastroEtapa2', {error: error});
        }else{
            res.redirect('/cadastro/etapa3');
        }
    })

    static getCadastroEtapa3 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa3/CadastroEtapa3', {error: {}});
    })

    static postCadastroEtapa3 = (req, res) => Controller.execute(req, res, async (req, res) => {
        const {numFuncionarios, telEmpresa} = req.body;

        const error = {};

        if(numFuncionarios.length === 0){
            error.numFuncionarios = "Digite o número de funcionários"
        }

        if(telEmpresa.length < 16 || telEmpresa.length > 16){
            error.telEmpresa = "Telefone inválido"
        }
        console.log(error)
        if(Object.keys(error)){
            res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa3/CadastroEtapa3', {error: error});
        }else{
            res.redirect('/cadastro/etapa4');
        }
    })

    static getCadastroEtapa4 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa4/CadastroEtapa4', {error: {}});
    })

    static postCadastroEtapa4 = (req, res) => Controller.execute(req, res, async (req, res) => {
        const {nomeDono, cpfDono, telDono} = req.body;

        const error = {};

        if(nomeDono.typeof != 'string' || nomeDono.length < 6){
            error.nomeDono = "Digite o nome do dono"
        }

        if(cpfDono.length < 14){
            error.cnpj = "Cpf inválido"
        }

        if(telDono.length < 16 || telDono.length > 16){
            error.telDono = "Telefone inválido"
        }

        console.log(error)
        if(Object.keys(error)){
            res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa4/CadastroEtapa4', {error: error});
        }else{
            res.redirect('/cadastro/etapa5');
        }
    })

    static getCadastroEtapa5 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa5/CadastroEtapa5', {error: {}});
    })

    static postCadastroEtapa5 = (req, res) => Controller.execute(req, res, async (req, res) => {
        const {emailContador, telContador} = req.body;

        const error = {};

        if(!emailContador.includes('@')){
            error.emailContador = "Digite um email válido"
        }

        if(telContador.length < 16 || telContador.length > 16){
            error.cnpj = "Telefone inválido"
        }

        console.log(error)
        if(Object.keys(error)){
            res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa4/CadastroEtapa4', {error: error});
        }else{
            res.redirect('/cadastro/etapa5');
        }
    })

    static getCadastroEtapa6 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa6/CadastroEtapa6', {error: {}});
    })

    static postCadastroEtapa6 = (req, res) => Controller.execute(req, res, async (req, res) => {
        if(req.body.foto){
            res.redirect('/home')
        }else{
            res.render(__dirname + '/../../../Frontend/Main/Cadastro/Etapa6/CadastroEtapa6')
        }
    })
}

module.exports = WebCreateUserController;