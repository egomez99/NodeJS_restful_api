//File: api-routes.js
//Initialize express router
let router = require('express').Router();

//API default response
router.get('/', function (req, res){
    res.json({
        status: 'API its working',
        message: 'Welcome to RESTHub lalo crafted wth love'
    });
});

// Import contact controller
var contactController = require('./contactController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
    
//Export API routes
module.exports = router;
