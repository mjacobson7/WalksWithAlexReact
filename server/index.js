require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
// mongoose.connect('mongodb://localhost:27017/mydb');

mongoose.connect(
	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.95ya7.mongodb.net/${process.env.DB_NAME}`
);

app.use(express.static(__dirname + './../build'));

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

require('./routes')(app);

app.get('*', (req, res) => {
	res.sendFile(path.resolve('./build', 'index.html'));
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log('Now listening to port number:', port);
});
