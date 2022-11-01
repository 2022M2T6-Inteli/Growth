const BuilderModel = require('../models/UserBuilderModel')

class BuilderController {
    static getBuilder = async (req, res) => {
        const id = req.params.id
        const user = await BuilderModel.getByColumns({ id: id })

        res.json(user.getRealModelObject())
    }

    static getCreateBuilder = (req, res) => {
        res.send("pagina")
    }

    static postCreateBuilder = async (req, res) => {
        const user = new BuilderModel({
            'name': req.body.name,
            'email': req.body.email,
            'cellphone': req.body.cellphone,
            'cnpj': req.body.cnpj,
            'employees_number': req.body.employees_number,
            'password': req.body.password,
            'owner_name': req.body.owner_name,
            'owner_cellphone': req.body.owner_cellphone,
            'owner_cpf': req.body.owner_cpf,
            'owner_birth_date': req.body.owner_birth_date,
            'creation_date': req.body.creation_date,
            'update_date': req.body.update_date,
            'avatar_image_id': req.body.avatar_image_id
        });

        await user.insert()

        res.json(user.getRealModelObject())
    }

    static getUpdateBuilder = (req, res) => {
        res.json("oi")
    }

    static postUpdateBuilder = async (req, res) => {
        const id = req.params.id;

        const user = await BuilderModel.getByColumns({ id: id });

        user.setAttributesByBuilderInfo({
            'name': req.body.name,
            'email': req.body.email,
            'cellphone': req.body.cellphone,
            'cnpj': req.body.cnpj,
            'employees_number': req.body.employees_number,
            'owner_name': req.body.owner_name,
            'owner_cellphone': req.body.owner_cellphone,
            'owner_cpf': req.body.owner_cpf,
            'owner_birth_date': req.body.owner_birth_date
        });

        user.update()

        res.json(user.getRealModelObject())
    }
}

module.exports = BuilderController;