const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static(__dirname + './../build'));
app.use(cors());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

require('./routes')(app);

var port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log('Now listening to port number:', port);
});
