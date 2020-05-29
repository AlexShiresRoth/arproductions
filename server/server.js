require('dotenv').config();
const fs = require('fs');
const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');
const https = require('https');
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

const server = https.createServer({ key: key, cert: cert }, app);

server.listen(PORT, () => console.log('arproductions api running on port:' + PORT));
