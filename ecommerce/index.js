const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DBconnection successfully'))
	.catch((err) => {
		console.log(err);
	});

app.get('/api/test', () => {
	console.log('test is success');
});

app.listen(process.env.PORT || 5000, () => {
	console.log(`server running 5000`);
});
