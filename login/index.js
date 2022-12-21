const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = require('./users.json');
const cars = require('./cars.json');
const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
	const user = users.find((usr) => usr.username === req.body.username);
	if (user) {
		if (user.password === req.body.password) {
			const token = jwt.sign({ userID: user.id }, 'bigSecret', {
				expiresIn: '30m',
			});
			res.status(200).json({ token });
		} else {
			res.status(401).json({ message: 'Access denied' });
		}
	} else {
		res.status(401).json({ message: 'Access denied' });
	}
});

function checkToken(req, res, next) {
	const token = req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, 'bigSecret', (err, decoded) => {
			if (err) {
				res.status(401).json({ message: 'Access denied' });
				return;
			} else {
				req.userID = decoded.userID;
				next();
			}
		});
	} else {
		res.status(401).json({ message: 'Access denied' });
	}
}

app.get('/data', checkToken, (req, res) => {
	const filtered = cars.filter((car) => car.userID === req.userID);
	res.status(200).json({ data: filtered });
});

app.listen(port, () => console.log(`server is running on ${port}`));
