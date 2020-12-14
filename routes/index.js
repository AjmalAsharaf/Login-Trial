var express = require('express');
var router = express.Router();

let data = { username: 'ajmal', password: '123' }

/* GET home page. */
router.get('/', function (req, res) {
  let ses = req.session.user;
  
  if (ses) {
    res.render('login')
  } else {

    res.render('index');
  }

});

router.post('/login', function (req, res) {
  

  let typedUser = req.body.username;
  let typedPassword = req.body.password;
  
  if (data.username === typedUser && data.password === typedPassword) {
    req.session.user=typedUser
    res.json({user:true})
    res.render('login');

  } else { 
    res.json({user:false});
  }

});

router.get('/login',function(req,res){
  let ses=req.session.user;
  
  if(ses){
    res.redirect('login');
  }else{
    res.redirect('/')
  }
})

router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/');
})



module.exports = router;
