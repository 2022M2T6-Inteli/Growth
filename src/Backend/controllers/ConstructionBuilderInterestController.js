const ConstructionBuilderInterestModel = require("../models/ConstructionBuilderInterestModel");
const Controller = require("./Controller");

class ConstructionBuilderInterestController extends Controller {
    // CREATE
    static getCreateConstructionBuilderInterest = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("aqui vai uma página")
    })

    static postCreateConstructionBuilderInterest = (req, res) => Controller.execute(req, res, async (req, res) => {
        const constructionBuilderInterest = new ConstructionBuilderInterestModel({
            construction_id: req.body.construction_id,
            builder_id: req.body.builder_id
        });

        await constructionBuilderInterest.insert()

        res.json(constructionBuilderInterest.getObject())
    })

    // READ
    static getAllConstructionBuilderInterestByConstruction = (req, res) => Controller.execute(req, res, async (req, res) => {
        const constructionId = req.params.constructionId;
        const constructionBuilderInterests = await ConstructionBuilderInterestModel.allByColumns({construction_id: constructionId});
        res.json(constructionBuilderInterests);
    })

    static getAllConstructionBuilderInterestByBuilder = (req, res) => Controller.execute(req, res, async (req, res) => {
        const builderId = req.params.builderId;
        const constructionBuilderInterests = await ConstructionBuilderInterestModel.allByColumns({builder_id: builderId});
        res.json(constructionBuilderInterests);
    })

    static getConstructionBuilderInterest = (req, res) => Controller.execute(req, res, async (req, res) => {
        const constructionId = req.params.constructionId;
        const builderId = req.params.builderId
        const constructionBuilderInterest = await ConstructionBuilderInterestModel.getByColumns({builder_id: builderId, construction_id: constructionId}, {builder: true, construction: true});
        res.json(constructionBuilderInterest.getObject());
    })

    // UPDATE

    // DELETE
    static getDeleteConstructionBuilderInterest = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("Página a construir")
    })

    static postDeleteConstructionBuilderInterest = (req, res) => Controller.execute(req, res, async (req, res) => {
        const constructionId = req.params.constructionId;
        const builderId = req.params.builderId;

        const constructionBuilderInterest = await ConstructionBuilderInterestModel.getByColumns({construction_id: constructionId, builder_id: builderId})

        constructionBuilderInterest.delete();

        res.json(`Interesse de Contrução pelo Empreiteiro deletado com sucesso`)
    })

}

module.exports = ConstructionBuilderInterestController