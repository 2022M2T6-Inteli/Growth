const UserAdministratorModel = require('../models/UserAdministratorModel')
const APIError = require('../services/ErrorService')
const Controller = require('./Controller')

class UserAdministratorController extends Controller {
    // CREATE
    static getCreateUserAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.send("pagina")
    })

    static postCreateUserAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        const user = new UserAdministratorModel({
            'name': req.body.name,
            'email': req.body.email,
            'password': req.body.password
        });

        await user.insert()

        res.json(user.getObject())
    })

    // READ
    static getUserAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id
        const user = await UserAdministratorModel.getByColumns({ id: id })
        res.json(user.getObject())
    })

    static getAllUserAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        const users = await UserAdministratorModel.allByColumns()
        res.json(users.map(user => user.getObject()))
    })

    static getLogin = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("Pagina em construção")
    })

    static postLogin = (req, res) => Controller.execute(req, res, async (req, res) => {
        try {
            const user = await UserAdministratorModel.getByColumns({email: req.body.email});

            user.validatePassword(req.body.password);
    
            res.json({token: "Em breve token aqui"})
        } catch (error) {
            if(error instanceof APIError){
                throw new APIError("Credenciais incorretas", 403)
            }else{
                throw error;
            }
        }
    })


    // UPDATE
    static getUpdateUserAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("Em breve página HTML aqui")
    })

    static postUpdateUserAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;

        const user = await UserAdministratorModel.getByColumns({ id: id });

        user.setName(req.body.name);
        user.setEmail(req.body.email);

        user.update()

        res.json(user.getObject())
    })

    // DELETE
    static getDeleteUserAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("Em breve página HTML aqui")
    })

    static postDeleteUserAdministrator = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        
        const user = await UserAdministratorModel.getByColumns({id: id});

        await user.delete();

        res.json({"message": `Usuário Administrador de ID ${id} deletado`})
    })
}

module.exports = UserAdministratorController;