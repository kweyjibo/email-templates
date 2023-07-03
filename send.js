'use strict';
const nodemailer = require('nodemailer');
const fs = require('fs');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: '',
		pass: ''
	}
});

const html = fs.readFileSync('public/output.html');

const mails = [
	'',
	''
];

let mailOptions = {
	from: '',
	to: mails.join(', '),
	subject: 'Test email',
	html: html // html body
};

transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		return console.log(error);
	}
	console.log('Message %s sent: %s', info.messageId, info.response);
});