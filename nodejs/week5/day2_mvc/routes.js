const express = require('express')

const router = express()
const contactController = require('./controllers/contact_controller');


//root path shows contact form
router.get('/', contactController.newResource)
// get contacts route
router.get('/contacts', contactController.index)
// //post contacts route
router.post('/contacts', contactController.create)

module.exports = router;