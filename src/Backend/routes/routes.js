// Requires
const express = require('express');

// Routes
const UserAdministratorRouter = require('./UserAdministratorRoutes');
const UserBuilderRouter = require('./UserBuilderRoutes');
const ConstructionRouter = require('./ConstructionRoutes');
const TagRouter = require('./TagRoutes');
const BuilderConstructionSummaryRouter = require('./BuilderConstructionSummaryRoutes');
const CityRouter = require('./CityRoutes');
const StateRouter = require('./StateRoutes');
const ConstructionBuilderInterestRouter = require('./ConstructionBuilderInterestrRoutes');
const StructuralRouter = require('./StructuralRoutes');
const Controller = require('../controllers/Controller');
const APIError = require('../services/ErrorService');

const router = express.Router();

router.use(UserAdministratorRouter);
router.use(UserBuilderRouter);
router.use(ConstructionRouter);
router.use(TagRouter);
router.use(BuilderConstructionSummaryRouter);
router.use(CityRouter);
router.use(StateRouter);
router.use(ConstructionBuilderInterestRouter);
router.use(StructuralRouter);


router.all('*', (req, res) => Controller.execute(req, res, (req, res) => {
    throw new APIError('Page not Found', 404);
}))

module.exports = router;