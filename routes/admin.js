var express = require('express');
var router = express.Router();

var users = [{ name: 'One', email: 'one@placeholder.com', admin: false },
    { name: 'Two', email: 'two@placeholder.com', admin: false },
    { name: 'Three', email: 'three@placeholder.com', admin: false },
    { name: 'Four', email: 'four@placeholder.com', admin: false },
    { name: 'Five', email: 'five@placeholder.com', admin: true },
    { name: 'Six', email: 'six@placeholder.com', admin: false },
    { name: 'Seven', email: 'seven@placeholder.com', admin: false },
    { name: 'Eight', email: 'eight@placeholder.com', admin: false },
    { name: 'Nine', email: 'nine@placeholder.com', admin: true },
    { name: 'Ten', email: 'ten@placeholder.com', admin: false }];

router.get('/users', function(req, res) {
  res.json(users);
});

router.post('/login', function(req, res) {
    if(req.body.username == 'admin' && req.body.password == '123') res.send('Youre the captain!');
    else res.json('Nice try!');
});

router.delete('/users/:name', function(req,res) {
    console.log(req.params.name);
    var index = -1;
    for(i=0; i<users.length; i++) {
        if(users[i].name == req.params.name) {
            index = i;
            break;
        }
    }
    if(index != -1) {
        users[index].splice(0, 1);
    }

    res.json(users);
});

module.exports = router;
