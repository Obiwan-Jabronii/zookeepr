const express = require('express');
const router = express.Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeepersRoutes = require('../apiRoutes/zookeeperRoutes');

router.use(zookeepersRoutes);
router.use(animalRoutes);

module.exports = router;