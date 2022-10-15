const router = require('express').Router();

router.get('/usertest', (req, res) => {
	RTCRtpSender.res('user test success');
});

module.exports = router;
