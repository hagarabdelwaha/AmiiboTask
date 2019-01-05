var express = require('express');
var router = express.Router();
var Amiibo = require('../models/amiibo');



/* GET list of amiibo cards . */
router.get('/', function(req, res, next) {
    Amiibo.find({"type":"Card"},function(err,data){
        if(!err)
        {
            res.status(200).json({'data':data});
        }else{
            res.status(400).json(err);
        }
    });
});


/* GET list of searched amiibos  . */
router.get('/search', function(req, res, next) {
    
    var reg='/.*'+req.query.q+'.*/';
    console.log(reg);
Amiibo.find({$text: {$search: req.query.q}},function(err,data){
        if(!err)
        {
            res.status(200).json({'data':data});
        }else{
            res.status(400).json(err);
        }
    });
    
  });
  

module.exports = router;
