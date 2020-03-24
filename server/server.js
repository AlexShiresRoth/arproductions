require('dotenv').config();
const express = require('express');
const paymentRouter = require('./routes/payments');
const app = express();

app.use(express.json({ extended: true }));
app.use((_, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', (req, res) => res.send('The api is running'));
app.use('/api/payments', paymentRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('arproductions api running on port:' + PORT));
