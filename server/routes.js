const sgMail = require('@sendgrid/mail');
const secrets = require('./secrets');
sgMail.setApiKey(secrets.EMAIL_KEY);

module.exports = (app) => {
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
