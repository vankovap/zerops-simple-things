const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// Get the global environment object.
const env = process.env;

app.get('/', async (req, res) => {
	res.send(`... root access from Node.js`);
});

const server = app.listen(port, () => {
	console.log(`... listening on port ${port}, the web server started.`);
});

const handleShutdownGracefully = () => {
	console.info('... closing the server gracefully.');
	server.close(() => {
		console.log('... the server closed.');
		process.exit(0);
	});
}

process.on('SIGINT', handleShutdownGracefully);

process.on('SIGTERM', handleShutdownGracefully);

process.on('SIGHUP', handleShutdownGracefully);
