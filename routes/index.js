var express = require('express');
var router = express.Router();
const firebase = require('firebase');

var config = {
	apiKey: "AIzaSyCMJrzQxRfst6O6trYAyUi3RWfoCPR7FU8",
	authDomain: "vue-blog-5890d.firebaseapp.com",
	databaseURL: "https://vue-blog-5890d.firebaseio.com",
	projectId: "vue-blog-5890d",
	storageBucket: "vue-blog-5890d.appspot.com",
	messagingSenderId: "200547588660"
};

firebase.initializeApp(config);
const dbRefObject = firebase.database().ref().child('object')
let returnedObject = ''
dbRefObject.on('value' , snap => {
  returnedObject =  snap.val();
  console.log(returnedObject)
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: returnedObject.title , state: returnedObject.state  });
});

module.exports = router;
