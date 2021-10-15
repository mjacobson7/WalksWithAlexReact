const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(express.static(__dirname + './../build'));
app.use(cors());
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
