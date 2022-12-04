const BuilderConstructionSummaryModel = require("../models/BuilderConstructionSummaryModel");
const Controller = require("./Controller");

class BuilderConstructionSummaryController extends Controller {
    // CREATE
    static getCreateBuilderConstructionSummary = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("aqui vai uma página")
    })

    static postCreateBuilderConstructionSummary = (req, res) => Controller.execute(req, res, async (req, res) => {
        const builderConstructionSummary = new BuilderConstructionSummaryModel({
            name: req.body.name,
            description: req.body.description,
            is_with_mrv: req.body.is_with_mrv,
            user_builder_id: req.body.user_builder_id
        });

        await builderConstructionSummary.insert()

        res.json(builderConstructionSummary.getObject())
    })

    // READ
    static getBuilderConstructionSummary = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const builderConstructionSummary = await BuilderConstructionSummaryModel.getByColumns({id: id})
        res.json(builderConstructionSummary.getObject())
    })

    static getAllBuilderConstructionSummary = (req, res) => Controller.execute(req, res, async (req, res) => {
        const builderConstructionSummary = await BuilderConstructionSummaryModel.allByColumns()
        res.json(builderConstructionSummary)
    })

    // UPDATE
    static getUpdateBuilderConstructionSummary = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("Página a construir")
    })

    static postUpdateBuilderConstructionSummary = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const builderConstructionSummary = await BuilderConstructionSummaryModel.getByColumns({id: id})

        builderConstructionSummary.setName(req.body.name);
        builderConstructionSummary.setDescription(req.body.description);
        builderConstructionSummary.setIsWithMrv(req.body.is_with_mrv);
        builderConstructionSummary.setUserBuilderId(req.body.user_builder_id);

        builderConstructionSummary.update();

        res.json(builderConstructionSummary.getObject());
    })

    // DELETE
    static getDeleteBuilderConstructionSummary = (req, res) => Controller.execute(req, res, async (req, res) => {
        res.json("Página a construir")
    })

    static postDeleteBuilderConstructionSummary = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const builderConstructionSummary = await BuilderConstructionSummaryModel.getByColumns({id: id})

        builderConstructionSummary.delete();

        res.json(`Obra de ID ${id} deletada com sucesso`)
    })

}

module.exports = BuilderConstructionSummaryController