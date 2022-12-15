const Controller = require("../Controller");

const UserBuilderModel = require('../../models/UserModel');

var data = new Object();

class WebCreateUserController {
    static getCadastroEtapa1 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('main/Cadastro/Componentes/RegisterPage', {
            error: {},
            title: 'Etapa 1',
            conteudo: __dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa1'});
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
        if(Object.keys(error).length){
            res.render('main/Cadastro/Componentes/RegisterPage', {
                error: error,
                title: 'Etapa 1',
                conteudo:__dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa1'});
        }else{
            res.redirect('/cadastro/etapa2');
        }
    })

    static getCadastroEtapa2 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('main/Cadastro/Componentes/RegisterPage', {
            error: {},
            title: 'Etapa 2',
            conteudo:__dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa2'});
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
        if(Object.keys(error).length){
            res.render('main/Cadastro/Componentes/RegisterPage', {
                error: error,
                title:'Etapa 2',
                conteudo:__dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa2'});
        }else{
            res.redirect('/cadastro/etapa3')            
        }
    })

    static getCadastroEtapa3 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('main/Cadastro/Componentes/RegisterPage', {
            error: {},
            title: 'Etapa 3',
            conteudo: __dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa3'});
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
        
        if(Object.keys(error).length){
            res.render('main/Cadastro/Componentes/RegisterPage', {
                error: error,
                title: 'Etapa 3',
                conteudo: __dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa3'});
        }else{
            res.redirect('/cadastro/etapa4');
        }
    })

    static getCadastroEtapa4 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('main/Cadastro/Componentes/RegisterPage', {
            error: {},
            title: 'Etapa 4',
            conteudo: __dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa4'});
    })

    static postCadastroEtapa4 = (req, res) => Controller.execute(req, res, async (req, res) => {
        const {nomeDono, cpfDono, telDono, owner_birth_date} = req.body;

        const error = {};

        if( nomeDono.length < 6){
            error.nomeDono = "Digite o nome do dono"
        }

        if(cpfDono.length < 14){
            error.cnpj = "Cpf inválido"
        }

        if(telDono.length < 16 || telDono.length > 16){
            error.telDono = "Telefone inválido"
        }

        if(owner_birth_date.length < 10 || owner_birth_date.length > 10){
            error.owner_birth_date = "Data formatada incorrentamente"
        }

        console.log(error)
        if(Object.keys(error).length){
            res.render('main/Cadastro/Componentes/RegisterPage', {
                error: error,
                title: 'Etapa 4',
                conteudo: __dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa4'});
        }else{
            res.redirect('/cadastro/etapa5');
        }
    })

    static getCadastroEtapa5 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('main/Cadastro/Componentes/RegisterPage', {
            error: {},
            title: 'Etapa 5',
            conteudo: __dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa5'});

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

        if(Object.keys(error).length){
            res.render('main/Cadastro/Componentes/RegisterPage', {
                error: error,
                title: 'Etapa 5',
                conteudo: __dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa5'});
                console.log("oi")
        }else{
            res.redirect('/cadastro/etapa6');
        }
    })

    static getCadastroEtapa6 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('main/Cadastro/Componentes/RegisterPage', {
            error: {},
            title: 'Etapa 6',
            conteudo: __dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa6'});
    })

    static postCadastroEtapa6 = (req, res) => Controller.execute(req, res, async (req, res) => {
        const {img} = req.body;

        const error = {};


        if(Object.keys(error).length){
            res.render('main/Cadastro/Componentes/RegisterPage',{
                error: error,
                title: 'Etapa 6',
                conteudo:__dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa6'});
        }
        else{
            res.redirect('/cadastro/etapa7');

        }
        })

    static getCadastroEtapa7 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('main/Cadastro/Componentes/RegisterPage', {
            error: {},
            title: 'Etapa 7',
            conteudo: __dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa7'});
    })

    static postCadastroEtapa7 = (req, res) => Controller.execute(req, res, async (req, res) => {
        const {password, email, razaoSocial, cnpj, numFuncionarios, telEmpresa, nomeDono, cpfDono, telDono, owner_birth_date, emailContador, telContador, img} = req.body;

        const error = {};

        if(password.length < 8) {
            error.password = 'Senha precisa ter mais de 8 caracteres';
        }

        if(!email.includes('@')){
            error.email = 'Email precisa estar corretamente formatado';
        }

        if(razaoSocial.length === 0){
            error.razaoSocial = "Digite a Razão Social"
        }

        if(cnpj.length < 18){
            error.cnpj = "Cnpj inválido"
        }

        if(numFuncionarios.length === 0){
            error.numFuncionarios = "Digite o número de funcionários"
        }

        if(telEmpresa.length < 16 || telEmpresa.length > 16){
            error.telEmpresa = "Telefone inválido"
        }
        
        if( nomeDono.length < 6){
            error.nomeDono = "Digite o nome do dono"
        }

        if(cpfDono.length < 14){
            error.cnpj = "Cpf inválido"
        }

        if(telDono.length < 16 || telDono.length > 16){
            error.telDono = "Telefone inválido"
        }

        if(owner_birth_date.length < 10 || owner_birth_date.length > 10){
            error.owner_birth_date = "Data formatada incorrentamente"
        }

        if(!emailContador.includes('@')){
            error.emailContador = "Digite um email válido"
        }

        if(telContador.length < 16 || telContador.length > 16){
            error.cnpj = "Telefone inválido"
        }

        if(Object.keys(error).length){
            res.render('main/Cadastro/Componentes/RegisterPage',{
                error: error,
                title: 'Etapa 7',
                conteudo:__dirname + '../../../../Frontend/Main/Cadastro/CadastroEtapa7'});
                console.log("oii")
        }
        else{
            
            const createBuilder = new UserBuilderModel({
                name: req.body.razaoSocial,
                email: req.body.email,
                cellphone: req.body.telEmpresa,
                cnpj: req.body.cnpj,
                employees_number: req.body.numFuncionarios,
                password: req.body.password,
                owner_name: req.body.nomeDono,
                owner_cellphone: req.body.telDono,
                owner_cpf: req.body.cpfDono,
                counter_email: req.body.emailContador,
                counter_cellphone: req.body.telContador,
                owner_birth_date: req.body.owner_birth_date,
            });
            res.redirect('/home');
            await createBuilder.insert()
            console.log(createBuilder)
        }
        })
}

module.exports = WebCreateUserController;