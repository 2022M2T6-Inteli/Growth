const e = require("express");
const CityModel = require("../../models/CityModel");
const ConstructionModel = require("../../models/ConstructionModel");
const StateModel = require("../../models/StateModel");
const CSVService = require("../../services/CSVService");
const Controller = require("../Controller");
const axios = require('axios').default;


class ConstructionController extends Controller {
    // CREATE
    static create = (req, res) => Controller.execute(req, res, async (req, res) => {
        const construction = new ConstructionModel({
            name: req.body.name,
            description: req.body.description,
            city_id: req.body.city_id
        });

        await construction.insert()

        res.json(construction.getObject())
    })

    // READ
    static get = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const construction = await ConstructionModel.getByColumns({id: id})
        res.json(construction.getObject())
    })

    static all = (req, res) => Controller.execute(req, res, async (req, res) => {
        const constructions = await ConstructionModel.allByColumns()
        res.json(constructions)
    })
    
    static AllConstructionsCSV = (req, res) => Controller.execute(req, res, async (req, res) => {
        const constructions = await ConstructionModel.allByColumns({});
        const csv = new CSVService(constructions);

        res.setHeader('Content-Type', 'text/csv')
        res.send(csv.getCSVString());
    })

    // UPDATE
    static update = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const construction = await ConstructionModel.getByColumns({id: id})

        construction.setName(req.body.name);
        construction.setDescription(req.body.description);
        construction.setCityId(req.body.city_id);

        construction.update();

        res.json(construction.getObject());
    })

    // DELETE
    static delete = (req, res) => Controller.execute(req, res, async (req, res) => {
        const id = req.params.id;
        const construction = await ConstructionModel.getByColumns({id: id})

        construction.delete();

        res.json(`Obra de ID ${id} deletada com sucesso`)
    })

}

module.exports = ConstructionController