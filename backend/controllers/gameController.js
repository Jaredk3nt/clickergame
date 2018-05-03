'use strict';

exports.getBase = (req, res) => {
    res.status(200).json( { 'message': 'Hey buddy.'} );
}