const UserBuilderModel = require('../models/UserBuilderModel')
const AuthService = require('../services/AuthService')
const APIError = require('../services/ErrorService')
const ViewService = require('../services/ViewService')
const Controller = require('./Controller')

class UserBuilderController extends Controller {
    // CREATE
    static getCreateUserBuilder = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.send("pagina")
    })

    static postCreateUserBuilder = (req, res) => Controller.execute(req, res, async (req, res) => {
        const user = new UserBuilderModel({
            'name': req.body.name,
            'email': req.body.email,
            'cellphone': req.body.cellphone,
            'cnpj': req.body.cnpj,
            'employees_number': req.body.employees_number,
            'password': req.body.password,
            'owner_name': req.body.owner_name,
            'owner_cellphone': req.body.owner_cellphone,
            'owner_cpf': req.body.owner_cpf,
            'owner_birth_date': req.body.owner_birth_date
        });

        await user.insert()

        res.json({
            token: AuthService.makeToken(user.id)
        })
    })

    // READ
    static getUserBuilder = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id
        const user = await UserBuilderModel.getByColumns({ id: id })
        res.json(user.getObject())
    })

    static getAllUserBuilder = (req, res) => Controller.execute(req, res, async (req, res) => {
        const users = await UserBuilderModel.allByColumns()
        res.json(users)
    })

    static postLogin = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const user = await UserBuilderModel.getByColumns({email: req.body.email});

            user.validatePassword(req.body.password);
    
            res.json({token: AuthService.makeToken(user.id)});
        } catch (error) {
            if(error instanceof APIError){
                throw new APIError("Credenciais incorretas", 403)
            }else{
                throw error;
            }
        }
    })


    // UPDATE
    static getUpdateUserBuilder = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("oi")
    })

    static postUpdateUserBuilder = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;

        const user = await UserBuilderModel.getByColumns({ id: id });

        user.setName(req.body.name);
        user.setEmail(req.body.email);
        user.setCellphone(req.body.cellphone);
        user.setCnpj(req.body.cnpj);
        user.setEmployeesNumber(req.body.employees_number);
        user.setOwnerName(req.body.owner_name);
        user.setOwnerCellphone(req.body.owner_cellphone);
        user.setOwnerCpf(req.body.owner_cpf);
        user.setOwnerBirthDate(req.body.owner_birth_date);

        user.update()

        res.json(user.getObject())
    })

    // DELETE
    static getDeleteUserBuilder = (req, res) => Controller.execute(req, res, async (req, res) => {
        
    })

    static postDeleteUserBuilder = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        
        const user = await UserBuilderModel.getByColumns({id: id});

        await user.delete();

        res.json({"message": `Usuário de ID ${id} deletado`})
    })


    // Site
    static getLogin = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Login/Login', {});
    })

    static getCadastroEtapa1 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa1/CadastroEtapa1', {error: {}});
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
            res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa1/CadastroEtapa1', {error: error});
        }else{
            res.redirect('/cadastro/etapa2');
        }
    })

    static getCadastroEtapa2 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa2/CadastroEtapa2', {error: {}});
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
            res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa2/CadastroEtapa2', {error: error});
        }else{
            res.redirect('/cadastro/etapa3');
        }
    })

    static getCadastroEtapa3 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa3/CadastroEtapa3', {error: {}});
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
        if(Object.keys(error).length){
            res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa3/CadastroEtapa3', {error: error});
        }else{
            res.redirect('/cadastro/etapa4');
        }
    })

    static getCadastroEtapa4 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa4/CadastroEtapa4', {error: {}});
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
        if(Object.keys(error).length){
            res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa4/CadastroEtapa4', {error: error});
        }else{
            res.redirect('/cadastro/etapa5');
        }
    })

    static getCadastroEtapa5 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa5/CadastroEtapa5', {error: {}});
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
        if(Object.keys(error).length){
            res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa4/CadastroEtapa4', {error: error});
        }else{
            res.redirect('/cadastro/etapa5');
        }
    })

    static getCadastroEtapa6 = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa6/CadastroEtapa6', {error: {}});
    })

    static postCadastroEtapa6 = (req, res) => Controller.execute(req, res, async (req, res) => {
        if(req.body.foto){
            res.redirect('/home')
        }else{
            res.render(__dirname + '/../../Frontend/Main/Cadastro/Etapa6/CadastroEtapa6')
        }
    })

    static getEdicaoUsuarioEmpresa = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/EdicaoUsuario/Edicao/EdicaoEmpresa');
    })

    static getEdicaoUsuarioDono = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/EdicaoUsuario/Edicao/EdicaoDono');
    })

    static getEdicaoUsuarioContador = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render(__dirname + '/../../Frontend/Main/EdicaoUsuario/Edicao/EdicaoContador'   );
    })
}

module.exports = UserBuilderController;