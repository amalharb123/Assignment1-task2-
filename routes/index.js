const { body, validationResult } = require('express-validator');
var express = require('express');
var multer = require('multer');
var path = require("path");
var postModel=require('../modules/posts')
var router = express.Router();

var post=postModel.find({});

router.use(express.static(__dirname+"./public/"));

var Storage= multer.diskStorage({
  destination:"./public/uploads/",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({
  storage:Storage
}).single('file');



/* GET home page. */
router.post('/upload', upload, function(req, res, next) {
var success =req.file.filename+ "uploaded";
  res.render('upload-file', { title: 'Instagram', success:success});

});




router.get('/upload', function(req, res, next) {

    res.render('upload-file', { title: 'Instagram', success:""});

});



router.get('/', function(req, res, next) {
  post.exec(function(err,data){
    if(err) throw err;
    res.render('index', { title: 'Instagram', records:data});

  });
});


router.get('/create', function(req, res, next) {
  post.exec(function(err,data){
    if(err) throw err;
    res.render('create', { title: 'Instagram', success:""});

  });
});

router.post("/create", upload, function(req, res, next){
  var postDetails = new postModel({
    description: req.body.des,
    post_image: req.file.filename,
    user_name: req.body.uname,
  }); 

  var success =req.file.filename+ "uploaded";
  postDetails.save(function(err, res1){
    post.exec(function(err,data){
      if(err) throw err;
      res.render('index', { title: 'Instagram', success:success});
      res.redirect('/')

    });


  });

});

module.exports = router;
