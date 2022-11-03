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

const router = express.Router();

router.use(UserAdministratorRouter);
router.use(UserBuilderRouter);
router.use(ConstructionRouter);
router.use(TagRouter);
router.use(BuilderConstructionSummaryRouter);
router.use(CityRouter);
router.use(StateRouter);



module.exports = router;