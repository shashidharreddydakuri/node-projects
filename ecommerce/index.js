const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');


dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DBconnection successfully'))
	.catch((err) => {
		console.log(err);
	});

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log(`server running 5000`);
});
