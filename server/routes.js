const sgMail = require('@sendgrid/mail');
const secrets = require('./secrets');
sgMail.setApiKey(secrets.EMAIL_KEY);
const User = require('./models/User.js');
const isProduction = process.env.NODE_ENV === 'production';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
	app.post('/create-user', async (req, res) => {
		try {
			if (!isProduction) {
				const { firstName, lastName, email, password } = req.body;
				const salt = bcrypt.genSaltSync();
				const hashedPassword = bcrypt.hashSync(password, salt);
				const user = await User.create({
					firstName,
					lastName,
					email,
					password: hashedPassword,
				});
				res.status(200).json(user);
			} else {
				res.status(400).send('You are not authorized to perform this action');
			}
		} catch (err) {
			res.status(500).json(err.stack);
		}
	});
	app.post('/login', async (req, res) => {
		try {
			const { email, password } = req.body;

			const user = await User.findOne({ email: email });
			if (user && bcrypt.compareSync(password, user.password)) {
				let token = jwt.sign(
					{
						email: user.email,
						firstName: user.firstName,
						lastName: user.lastName,
					},
					process.env.TOKEN_SECRET,
					{
						expiresIn: '24h',
					}
				);

				return res.status(200).json({
					token,
					user: {
						email: user.email,
						firstName: user.firstName,
						lastName: user.lastName,
					},
				});
			} else {
				return res.status(403).json();
			}
		} catch (err) {
			res.status(500).json(err.stack);
		}
	});

	app.get('/users/me', async (req, res) => {
		const token = req.headers.authorization;
		try {
			let payload = jwt.verify(token, process.env.TOKEN_SECRET);
			if (payload) {
				res.status(200).json({
					email: payload.email,
					firstName: payload.firstName,
					lastName: payload.lastName,
				});
			}
		} catch (err) {
			res.status(403).send();
		}
	});

	app.post('/contact-us', (req, res) => {
		const msg = {
			to: secrets.EMAIL,
			from: secrets.EMAIL,
			subject: `New Message from ${req.body.name}!`,
			html: `<strong>***This is an automated message***</strong>
				<dl>
					<dt>FROM: </dt>
					<dd>${req.body.name}</dd>
					<dt>EMAIL: </dt>
					<dd>${req.body.email}</dd>
					<dt>Message: </dt>
					<dd>${req.body.message}</dd>
				</dl>
				`,
		};
		sgMail.send(msg);

		res.sendStatus(200);
	});
};
