'use strict';

let fs = require('fs'),
    mongojs = require('mongojs'),
    colors = require('colors'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    https = require('https'),
    http = require('http'),
    Twitter = require('twitter'),
    request = require('request'),
    querystring = require('querystring'),
    cookieParser = require('cookie-parser'),
    gulp = require('gulp'),
    Client = require('node-rest-client').Client;



var client = new Client();

var dbConnectionString = '';

var ignitionSwitch = true;

if (ignitionSwitch) {

    dbConnectionString = 'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge';

} else {

    dbConnectionString = 'turner';
}

gulp.task('default', function() {
  // place code for your default task here
});

var db = mongojs(dbConnectionString, ['Titles']);

db.on('error', function (err) {
    console.log('database error', err)
})

db.on('connect', function () {
    console.log('database connected')
})

// db.turner.find().sort({name:1}, function(err, docs) {
//     // docs is now a sorted array
//       console.log(docs)
// });
//
// db.turner.find().forEach(function(err, doc) {
//     if (!doc) {
//         // we visited all docs in the collection
//         console.log(doc)
//         return;
//     }
//     // doc is a document in the collection
// });
// db.stats(function (err, docs) {
//     console.log("ERROR: " + err)
//      console.log(docs)
//     //res.json(docs)
// })
//
// db.getCollectionNames(function (err, docs) {
//     //console.log("ERROR: " + err)
//      console.log(docs)
//     //res.json(docs)
// })
// //db.turner.runCommand()

app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static('public'));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {

    console.log('\n');
    console.log('********************************************'.black.bgWhite);
    console.log("The frontend server is running on port 5000!".black.bgWhite);
    console.log('********************************************'.black.bgWhite);
    console.log('\n');

});

app.get('/', function (req, res) {

    console.log('\n');
    console.log('******* INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');

    var html = fs.readFileSync('public/views/base.html');
    res.end(html);

});

app.get('/outermost', function (req, res) {

    console.log('\n');
    console.log('******* INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');

    db.Titles.find().limit(1).sort({
        _id: -1
    }, function (err, docs) {
        console.log(docs);
        res.json(docs)
    })

});

app.get('/turner', function (req, res) {

    console.log('\n');
    console.log('******* HUGE - INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');


    db.Titles.find(function (err, docs) {

        //console.log(Object.keys(docs));
        //console.log(docs)

        res.json(docs)
    })

});

app.post('/query', function (req, res) {


    console.log('\n');
    console.log('******* turner - INCOMING GET REQUEST - Load Template *******'.black.bgWhite);
    console.log('\n');

    console.log('req.body.q: ' + req.body.q)

    var regex = new RegExp(".*" + req.body.q + ".*", "i");

    console.log(regex); // Hello this is !! some !! stuff.

    db.Titles.find({
        TitleName: regex
    }, function (err, docs) {

      //console.log(Object.keys(docs));
      //console.log(docs)

      res.json(docs)
    });
});
