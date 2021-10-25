import express, { Request, Response } from 'express';
import router from './aplication/routes/index';

const app = express();
app.use(express.json());

app.use('/api', router);

app.listen(8080, function () {
    console.log('Servers running on port 8080');
});