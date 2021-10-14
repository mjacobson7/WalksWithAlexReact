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

app.get('/contact-us', (req, res) => {
	console.log(req.body);
	res.status(200).json(req.body);
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log('Now listening to port number:', port);
});
