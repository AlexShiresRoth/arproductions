const express = require('express');
const stripe = require('stripe')(process.env.SEC_KEY);

const router = express();

router.post('/', async (req, res) => {
	const { price, title, email, source, cardElement } = req.body;

	try {
		await stripe.charges.create(
			{
				amount: price,
				currency: 'usd',
				source: 'tok_mastercard',
				description: title,
				receipt_email: email,
			},
			(err, charge) => {
				// asynchronously called
				if (err) {
					console.log(err);
					return res.status(400).json({ msg: err });
				}
				console.log(charge, 'charge was successful');
				return res.json(charge);
			}
		);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Internal Server Error' });
	}
});

module.exports = router;
