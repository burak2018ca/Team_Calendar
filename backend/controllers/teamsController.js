const asyncHandler = require('express-async-handler')
const axios = require('axios')

// @desc Get teams by search bar
// @route GET /api/teams
// @access Private
const getTeamBySearch = asyncHandler(async (req, res)=>{
   const {search} = req.query;
   
   if(!search){
    res.status(400)
    throw new Error("Please provide a search query")
   }

   const options = {
        method: 'GET',
        url:'https://api-football-v1.p.rapidapi.com/v3/teams',
        params: {search},
        headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
   };

   const response = await axios.request(options);

   const teams = response.data.response.slice(0, 5).map(item =>({
        id: item.team.id,
        name: item.team.name,
        logo: item.team.logo
   }));

   res.status(200).json({results: teams})
})

module.exports = {
    getTeamBySearch,
}
