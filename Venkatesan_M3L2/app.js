//Student Name: Devi Subadra Venkatesan
//Student id: 1228251806
//Date: 02/18/2024

const express = require('express');
const app = express();
const port = 4000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
Changed file 