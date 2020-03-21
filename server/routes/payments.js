const express = require('express');
const stripe = require('stripe')(process.env.SEC_KEY);

const router = express();

router.post('/', async (req, res) => {
	const { price, item, email, source } = req.body;
	console.log(price, item, email, source);
	res.json({ msg: 'Order received' });
});

module.exports = router;
