import express from 'express';
import bodyParser from 'body-parser';

import parishionersRoutes from './Routes/parishioners.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/parishioners', parishionersRoutes);

app.get('/', (req, res) => res.send('Parishioners Management Systems Home Page.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

