const express = require('express')
const router = express.Router()
const {getTeamBySearch} = require('../controllers/teamsController')

router.route('/teams').get(getTeamBySearch)

module.exports = router