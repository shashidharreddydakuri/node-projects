const dotenv = require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;

function sendMail() {
	return new Promise((response, reject) => {
		let transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_ID,
				pass: process.env.PASSWORD,
			},
		});
		const mail_configs = {
			from: process.env.EMAIL_ID,
			to: process.env.TO_EMAIL,
			subject: 'testing shashidhar email',
			text: 'just checking if the mail is sent or not',
		};
		transporter.sendMail(mail_configs, (err, info) => {
			if (err) {
				console.log(err);
				return reject({ message: 'an error has occurred' });
			}
			return response({ message: 'Email sent Successfully' });
		});
	});
}

app.get('/', (req, res) => {
	sendMail()
		.then((response) => res.send(response.message))
		.catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
	console.log(`nodemailer is listening to ${port}`);
});
