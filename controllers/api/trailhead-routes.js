const router = require('express').Router();
const { Trailhead } = require('../../models');
const sequelize = require('../../config/connection');


  

// GET /api/trailhead
router.get('/', (req, res) => {
    console.log('hellollllo')
    Trailhead.findAll({})
    .then(dbTrailheadData => res.json(dbTrailheadData))
    .catch(err => {
        console.log('error', err);
        res.status(500).json(err);
    })
});

// GET /api/trailhead
router.post('/', (req, res) => {
    Trailhead.create({
        trail_name: req.body.trail_name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        dog_friendly: req.body.dog_friendly
    })
    .then(dbTrailheadData => res.json(dbTrailheadData))
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;