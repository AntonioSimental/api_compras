const express = require('express');
const app = express();
const router = require('./src/views/routes.js');

app.use(express.json());
app.use('/api/compras', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});