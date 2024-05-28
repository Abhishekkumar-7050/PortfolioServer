const router = require('express').Router();
const resumeCntrl = require('../controller/resumeCntrl');
router.get('/download',resumeCntrl.download);
router.post('/' ,resumeCntrl.sendEmail);

module.exports = router
