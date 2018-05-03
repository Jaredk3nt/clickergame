'use strict';

module.exports = function(app){
    const gameController = require('../controllers/gameController');
    
    app.route('/')
        .get(gameController.getBase)
}