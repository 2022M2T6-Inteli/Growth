const ConstructionModel = require("../models/ConstructionModel");
const Controller = require("./Controller");

class ConstructionController extends Controller {
    // CREATE
    static getCreateConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("aqui vai uma página")
    })

    static postCreateConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        const construction = new ConstructionModel({
            name: req.body.name,
            description: req.body.description,
            city_id: req.body.city_id
        });

        await construction.insert()

        res.json(construction.getObject())
    })

    // READ
    static getConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const construction = await ConstructionModel.getByColumns({id: id})
        res.json(construction.getObject())
    })

    static getAllConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        const constructions = await ConstructionModel.allByColumns()
        res.json(constructions)
    })

    // UPDATE
    static getUpdateConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("Página a construir")
    })

    static postUpdateConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const construction = await ConstructionModel.getByColumns({id: id})

        construction.setName(req.body.name);
        construction.setDescription(req.body.description);
        construction.setCityId(req.body.city_id);

        construction.update();

        res.json(construction.getObject());
    })

    // DELETE
    static getDeleteConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("Página a construir")
    })

    static postDeleteConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const construction = await ConstructionModel.getByColumns({id: id})

        construction.delete();

        res.json(`Obra de ID ${id} deletada com sucesso`)
    })

}

module.exports = ConstructionController