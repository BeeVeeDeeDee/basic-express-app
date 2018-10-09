// load the things we need
var express = require('express'),
    http = require('http'),
    mysql = require('mysql'),
    app = express(),
    port = yourport;

// connect to database
var connection = mysql.createConnection({
    host     : 'xxx',
    user     : 'xxx',
    password : 'xxx',
    socketPath: 'xxx', // unix socket is needed
    database : 'animal_db'
});

// Connect
connection.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
	res.render('pages/index', {
	title: 'Dynamic title'
	});
});

// about page
app.get('/about', function(req, res) {
	res.render('pages/about', {
		title: 'About stuff'
	});
});

// get all animals
app.get('/animals', (req, res) => {
    let sql = 'SELECT * FROM whatever';
    let query = connection.query(sql, (err, results) => {
        if(err) throw err;
        // console.log(results);
        res.render('pages/animals', {
					title: 'Animals',
					result: results
				});
    });
});

app.listen(port);
console.log(port + ' is the magic port');
