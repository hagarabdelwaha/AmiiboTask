var express = require('express');
var router = express.Router();
var Amiibo = require('../models/amiibo');
var Data = require('../Data')


/*to insert all data in collection  */
router.get('/load',function(req,res,next)
{
     Data.map((dt)=>{
          console.log(dt);
        Amiibo(dt).save(function(err)
          {  if(err) throw err 
            console.log('1 saved ');
        });
     });

    res.status(200).json({'data':'loaded'});
});


/* GET list of amiibo cards . */
router.get('/', function(req, res, next) {
    var perpage =1;
        if (req.query.page !== undefined )
        {
          perpage=req.query.page;
        }
    Amiibo.paginate({"type":"Card"},{page:perpage,limit:10},function(err,data){
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
    var perpage =1;
    if (req.query.page !== undefined )
    {
      perpage=req.query.page;
    }
    Amiibo.paginate({$text: {$search: req.query.search}},{page:perpage,limit:10},function(err,data){
        if(!err)
        {  
            res.status(200).json({'data':data});
        }else{
            res.status(400).json(err);
        }
    });
    
  });



module.exports = router;
