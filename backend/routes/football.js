const express = require('express')
const router = express.Router()
const {getTeamBySearch} = require('../controllers/teamsController')
const { getTeamFixtures } = require('../controllers/fixtureController');

router.route('/teams').get(getTeamBySearch)
router.get('/fixtures/:teamId', getTeamFixtures);

module.exports = router