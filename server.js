const express = require('express');
const cors = require('cors');
const handler = require('./BOMBING_API/main.js');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/bomb', handler);
app.use(express.static(__dirname)); // index.html সার্ভ হবে

app.listen(3000, () => console.log('Local server at http://localhost:3000'));
