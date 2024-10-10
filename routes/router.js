const express = require ('express');
const router  = express.Router ();
const hp = require('../controller/HpController');
router.get ('/', hp.nom );
router.get('/about', hp.about)
router.get('/contact', hp.contact)
router.get('/home', hp.home)
router.get('/viewall', hp.viewall)
module.exports = router;