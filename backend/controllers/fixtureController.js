const asyncHandler = require('express-async-handler');
const axios = require('axios');

// @desc Get upcoming fixtures for a team
// @route GET /api/fixtures/:teamId
// @access Public
const getTeamFixtures = asyncHandler(async (req, res) =>{
    const {teamId} = req.params;

    if(!teamId || isNaN(Number(teamId))){
        return res.status(400).json({
            message: 'Please select a team before fetching a fixture'
        });
    }

    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params:{
            team: teamId,
            season: new Date().getFullYear(),
            status: 'NS',
        },
        headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY,
        },
    };
    
    const response = await axios.request(options);
    res.json({ fixtures: response.data.response });
})

module.exports = {
    getTeamFixtures,
}
