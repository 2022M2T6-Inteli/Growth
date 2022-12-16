const Controller = require("../Controller");

const ConstrucitonModel = require('../../models/ConstructionModel');
const UserBuilderModel = require("../../models/UserModel");
const UserAdministratorModel = require("../../models/AdministratorModel");
const APIError = require("../../services/ErrorService");
const TagModel = require("../../models/TagModel");
const AuthService = require("../../services/AuthService");
const axios = require('axios').default


class WebDashboardController {
    static getHome = (req, res) => Controller.execute(req, res, async (req, res) => {
        const obras = await ConstrucitonModel.pegarId();
        const users = await UserBuilderModel.pegarId();
        res.render('dashboard/Componentes/page', {
            title: 'Home',
            css: '/dashboard/Home/Home.css',
            conteudo: __dirname + '/../../../Frontend/Dashboard/Home/Home',
            secondAside: null,
            currentPage: req.url,
            obras: obras,
            users: users
        });
    })

    static getConstructions = (req, res) => Controller.execute(req, res, async (req, res) => {
        const constructions =  await ConstrucitonModel.allSQL(`
            SELECT cmrv_construction.*,
                ibge_city.name AS city_name,
                ibge_state.name AS state_name
            FROM cmrv_construction
                INNER JOIN ibge_city ON ibge_city.id = cmrv_construction.city_id
                INNER JOIN ibge_state ON ibge_state.id = ibge_city.state_id
            WHERE 
                cmrv_construction.name LIKE '%${req.query.search || ''}%'
                ${req.query.state ? `AND ibge_state.uf = '${req.query.state}'` : ''}
                ${req.query.city ? `AND ibge_city.id = '${req.query.city}'` : ''}
        `)

        res.render('dashboard/Componentes/page', {
            title: 'Obras',
            css: '/dashboard/Obras/Obras.css',
            conteudo: __dirname + '/../../../Frontend/Dashboard/Obras/Obras',
            secondAside: __dirname + '/../../../Frontend/Dashboard/Componentes/FilterAside',
            currentPage: req.url,
            constructions: constructions
        });
    })

    static getCreateObras = (req, res) => Controller.execute(req, res, async (req, res) => {
        const estados = (await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")).data.map(element => {
            element.selected = req.query.state == element.sigla
            return element;
        });

        res.render('dashboard/Cadastro/pages', {
            erro: {},
            title: 'Criação de obra',
            conteudo: __dirname + '/../../../Frontend/Dashboard/Obra/CriarObra',
            css: '/dashboard/Obra/Obra.css',
            secondAside: {},
            estados: estados,
            estadoUF: req.body.state,
            city: req.body.city,
            currentPage: req.url
        });
    })

    static postCreateObras = (req, res) => Controller.execute(req, res, async (req, res) => {
        const { name, description } = req.body;

        const error = {};

        if (name.length < 5) {
            error.name = "Nome muito pequeno"
        }

        if (description.length < 10) {
            error.description = "Descrição muito pequena"
        }

        //if(cidade.length > 1){
        //    error.cidade = "Coloque o id da cidade"
        //}
        const estados = (await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")).data.map(element => {
            element.selected = req.query.state == element.sigla
            return element;
        });

        if (Object.keys(error).lenght) {
            res.render('dashboard/Cadastro/pages', {
                error: error,
                title: 'Criação de obra',
                conteudo: __dirname + '/../../../Frontend/Dashboard/Obra/Obra',
                css: '/dashboard/Obra/Obra.css',
                secondAside: {},
                estados: estados,
                currentPage: req.url
            });
            console.log(error)
        } else {

            const createObras = new ConstrucitonModel({
                name: req.body.name,
                description: req.body.description,
                city_id: req.body.city
            });
            await createObras.insert()
            res.redirect('/dashboard/obras')

        }
    })

    static getCriarUsuario = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('dashboard/Cadastro/pages', {
            error: {},
            title: 'Criar Usuário',
            css: '/dashboard/Cadastro/Usuario/Usuario.css',
            conteudo: __dirname + '/../../../Frontend/Dashboard/Cadastro/Usuario/Usuario',
            currentPage: req.url,
            secondAside: {},
        });
    })

    static postCriarUsuario = (req, res) => Controller.execute(req, res, async (req, res) => {
        const { password, email, razaoSocial, cnpj, numFuncionarios, telEmpresa, nomeDono, cpfDono, telDono, emailContador, telContador } = req.body;

        const error = {};

        if (password.length < 8) {
            error.password = 'Senha precisa ter mais de 8 caracteres';
        }

        if (!email.includes('@')) {
            error.email = 'Email precisa estar corretamente formatado';
        }

        if (razaoSocial.length === 0) {
            error.razaoSocial = "Digite a Razão Social"
        }

        if (cnpj.length < 18) {
            error.cnpj = "Cnpj inválido"
        }

        if (numFuncionarios.length === 0) {
            error.numFuncionarios = "Digite o número de funcionários"
        }

        if (telEmpresa.length < 16 || telEmpresa.length > 16) {
            error.telEmpresa = "Telefone inválido"
        }

        if (nomeDono.length < 6) {
            error.nomeDono = "Digite o nome do dono"
        }

        if (cpfDono.length < 14) {
            error.cnpj = "Cpf inválido"
        }

        if (telDono.length < 16 || telDono.length > 16) {
            error.telDono = "Telefone inválido"
        }


        if (!emailContador.includes('@')) {
            error.emailContador = "Digite um email válido"
        }

        if (telContador.length < 16 || telContador.length > 16) {
            error.cnpj = "Telefone inválido"
        }


        if (Object.keys(error).length) {
            res.render('dashboard/Cadastro/pages', {
                error: error,
                title: 'Criar Usuário',
                conteudo: __dirname + '../../../../Frontend/Dashboard/Cadastro/Usuario/Usuario',
                css: '/dashboard/Cadastro/Usuario/Usuario.css',
                currentPage: req.url,
                secondAside: {},
            });
        } else {
            const createBuilder = new UserBuilderModel({
                name: req.body.razaoSocial,
                email: req.body.email,
                password: req.body.password,
                cellphone: req.body.telEmpresa,
                cnpj: req.body.cnpj,
                employees_number: req.body.numFuncionarios,
                owner_name: req.body.nomeDono,
                owner_cellphone: req.body.telDono,
                owner_cpf: req.body.cpfDono,
                owner_birth_date: req.body.owner_birth_date,
                counter_email: req.body.emailContador,
                counter_cellphone: req.body.telContador
            });
            await createBuilder.insert()
            res.redirect('/dashboard/usuarios');
        }
    })

    static getUsers = (req, res) => Controller.execute(req, res, async (req, res) => {
        const users = await UserBuilderModel.allByColumns();

        res.render('dashboard/Componentes/page', {
            title: 'Usuários',
            css: '/dashboard/Usuarios/Usuarios.css',
            conteudo: __dirname + '/../../../Frontend/Dashboard/Usuarios/Usuarios',
            secondAside: __dirname + '/../../../Frontend/Dashboard/Componentes/FilterAside',
            currentPage: req.url,
            users: users
        });
    })


    static deleteUser = (req, res) => Controller.execute(req, res, async (req, res) => {
        const user = await UserBuilderModel.getByColumns({ id: req.params.id })

        await user.delete();

        res.redirect("/dashboard/usuarios");
    })

    static getCriarAdm = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('dashboard/Cadastro/pages', {
            error: {},
            title: 'Criar Administrador',
            css: '/dashboard/Cadastro/Administrador/Administrador.css',
            conteudo: __dirname + '/../../../Frontend/Dashboard/Cadastro/Administrador/Administrador',
            currentPage: req.url,
        });
    })

    static postCriarAdm = (req, res) => Controller.execute(req, res, async (req, res) => {
        const { email, name } = req.body;

        const error = {};

        if (!email.includes('@')) {
            error.email = "Digite um email válido"
        }

        if (name.length <= 5) {
            error.name = "Nome inválido"
        }

        if (Object.keys(error).length) {
            res.render('dashboard/Cadastro/pages', {
                error: error,
                title: 'Criar Administrador',
                css: '/dashboard/Cadastro/Administrador/Administrador.css',
                conteudo: __dirname + '/../../../Frontend/Dashboard/Cadastro/Administrador/Administrador',
                currentPage: req.url
            });
        } else {
            const createBuilder = new UserAdministratorModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            await createBuilder.insert()
            res.redirect('/dashboard/administradores/');
        }
    })

    static getAdministrators = (req, res) => Controller.execute(req, res, async (req, res) => {
        const administrators = await UserAdministratorModel.allByColumns();

        res.render('dashboard/Componentes/page', {
            title: 'Usuários',
            css: '/dashboard/Administradores/Administradores.css',
            conteudo: __dirname + '/../../../Frontend/Dashboard/Administradores/Administradores',
            secondAside: __dirname + '/../../../Frontend/Dashboard/Componentes/FilterAside',
            currentPage: req.url,
            administrators: administrators
        });
    })



    static deleteAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        const user = await UserAdministratorModel.getByColumns({ id: req.params.id })

        await user.delete();

        res.redirect("/dashboard/administradores");
    })

    static getAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const administrator = await UserAdministratorModel.getByColumns({
                id: req.params.id
            });


            res.render('dashboard/Componentes/page', {
                title: administrator.name,
                css: '/dashboard/Administrador/Administrador.css',
                conteudo: __dirname + '/../../../Frontend/Dashboard/Administrador/Administrador',
                secondAside: '',
                currentPage: req.url,
                administrator: administrator
            });
        } catch (error) {
            if (error instanceof APIError && error.status == 404) {
                res.redirect("/dashboard/administradores")
            } else {
                throw error;
            }
        }
    })

    static getUpdateAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const administrator = await UserAdministratorModel.getByColumns({
                id: req.params.id
            });


            res.render('dashboard/Componentes/page', {
                title: administrator.name,
                css: '/dashboard/Administrador/Administrador.css',
                conteudo: __dirname + '/../../../Frontend/Dashboard/Administrador/Administrador',
                secondAside: '',
                currentPage: req.url,
                administrator: administrator
            });
        } catch (error) {
            if (error instanceof APIError && error.status == 404) {
                res.redirect("/dashboard/administradores")
            } else {
                throw error;
            }
        }
    })

    static postUpdateAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const administrator = await UserAdministratorModel.getByColumns({ id: id })

        administrator.setName(req.body.name);
        administrator.setEmail(req.body.email);

        administrator.update();

        res.redirect('/dashboard/administradores')
    })

    static getUser = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const user = await UserBuilderModel.getByColumns({
                id: req.params.id
            });

            res.render('dashboard/Componentes/page', {
                title: user.name,
                css: '/dashboard/Usuario/Usuario.css',
                conteudo: __dirname + '/../../../Frontend/Dashboard/Usuario/Usuario',
                secondAside: '',
                currentPage: 's',
                user: user

            });


        } catch (error) {
            if (error instanceof APIError && error.status == 404) {
                res.redirect("/dashboard/usuarios")
            } else {
                throw error;
            }
        }
    })

    static getUpdateUser = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const user = await UserBuilderModel.getByColumns({
                id: req.params.id
            });

            res.render('dashboard/Componentes/page', {
                title: user.name,
                css: '/dashboard/Usuario/Usuario.css',
                conteudo: __dirname + '/../../../Frontend/Dashboard/Usuario/Usuario',
                secondAside: '',
                currentPage: req.url,
                user: user

            });
        } catch (error) {
            if (error instanceof APIError && error.status == 404) {
                res.redirect("/dashboard/usuarios")
            } else {
                throw error;
            }
        }
    })


    static postUpdateUser = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const user = await UserBuilderModel.getByColumns({ id: id })

        user.setName(req.body.razaoSocial);
        user.setEmail(req.body.email);
        user.setCellphone(req.body.telEmpresa);
        user.setCnpj(req.body.cnpj);
        user.setEmployeesNumber(req.body.numFuncionarios);
        user.setOwnerName(req.body.nomeDono);
        user.setOwnerCellphone(req.body.telDono);
        user.setOwnerCpf(req.body.cpfDono);
        user.setCounterEmail(req.body.emailContador);
        user.setCounterCellphone(req.body.telContador);

        user.update();

        res.redirect('/dashboard/usuarios')

    })

    static getConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const obra = await ConstrucitonModel.getSQL(`
            SELECT cmrv_construction.*,
                ibge_city.name AS city_name,
                ibge_city.id AS city_id,
                ibge_state.name AS state_name,
                ibge_state.uf AS state_uf
            FROM cmrv_construction
                LEFT JOIN ibge_city ON ibge_city.id = cmrv_construction.city_id
                LEFT JOIN ibge_state ON ibge_state.id = ibge_city.state_id
            WHERE 
                cmrv_construction.id = ${req.params.id}
        `)

        if(!obra) {
            return res.redirect("/dashboard/obras")
        }
            const estados = (await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")).data.map(element => {
                element.selected = obra.state_uf == element.sigla
                return element;
            });

            const usuariosQueRegistraramInteresse = await UserBuilderModel.allSQL(`
                SELECT cmrv_user_builder.* 
                FROM cmrv_user_builder
                    INNER JOIN cmrv_construction_builder_interest ON cmrv_construction_builder_interest.builder_id = cmrv_user_builder.id
                WHERE cmrv_construction_builder_interest.construction_id = ${obra.id}
            `)


            res.render('dashboard/Componentes/page', {
                title: 'Usuários',
                css: '/dashboard/Obra/Obra.css',
                conteudo: __dirname + '/../../../Frontend/Dashboard/Obra/Obra',
                secondAside: '',
                currentPage: req.url,
                construction: obra,
                city: obra.city_id,
                estadoUF: obra.state_uf,
                estados: estados,
                usersInteressados: usuariosQueRegistraramInteresse
            });
        } catch (error) {
            if (error instanceof APIError && error.status == 404) {
                res.redirect("/dashboard/obras")
            } else {
                throw error;
            }
        }
    })

    static postUpdateConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const construciton = await ConstrucitonModel.getByColumns({ id: id })

        construciton.setName(req.body.name);
        construciton.setCityId(req.body.city);
        construciton.setDescription(req.body.description);

        construciton.update();

        res.redirect('/dashboard/obras')

    })

    static deleteConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        const construciton = await ConstrucitonModel.getByColumns({ id: req.params.id })

        await construciton.delete();

        res.redirect("/dashboard/obras");
    })

    static postCreateTag = (req, res) =>  Controller.execute(req, res, async (req, res) => {
        const tag = new TagModel({name: req.body.name});
        await tag.insert();

        res.redirect("/dashboard/tags");
    })

    static getListAllTags = (req, res) =>  Controller.execute(req, res, async (req, res) => {
        let tags = [];
        try {
            tags = await TagModel.allByColumns();
        } catch (error) {
            if(error instanceof APIError && error.status == 404){
                tags = [];
            }else {
                console.log(error);
                return res.redirect("/dashboard")
            }
        }

        res.render('dashboard/Componentes/page', {
            title: 'Tags',
            css: '/dashboard/Tags/Tags.css',
            conteudo: __dirname + '/../../../Frontend/Dashboard/Tags/Tags',
            secondAside: '',
            currentPage: req.url,
            tags: tags
        });
    })

    static getDeleteTag = (req, res) =>  Controller.execute(req, res, async (req, res) => {
        const tag = await TagModel.getByColumns({id: req.params.id});
        tag.delete();
        res.redirect("/dashboard/tags");
    })

    static postUpdateTag = (req, res) =>  Controller.execute(req, res, async (req, res) => {
        const tag = await TagModel.getByColumns({id: req.params.id});
        tag.setName(req.body.name);
        tag.update();

        res.redirect("/dashboard/tags");
    })

    static getLogin = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.render('dashboard/Login/Login', {error: {}});
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
            res.render('dashboard/Login/Login', {error: error});
        }else{
            try {
                const user = await UserAdministratorModel.getByColumns({email: email})
                if(user.validatePassword(password)){
                    res.cookie('AuthToken',AuthService.makeToken(user.id, 'adm'));
                    res.redirect("/dashboard/")
                }else{
                    console.log(error)

                    res.render('dashboard/Login/Login', {error: error});
                }
            } catch (error) {
                if(error instanceof APIError) {
                    res.render('dashboard/Login/Login',{error: {password: 'credenciais incorretadas'}})                    
                }else {
                    throw error;
                }
            }
        }
    })
}

module.exports = WebDashboardController;