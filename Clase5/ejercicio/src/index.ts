import Config from './config';
import { DbService } from './services/db';
import { MongoDb } from './models/libro/DAO/mongo';
import express, { ErrorRequestHandler } from 'express';
import router from './routes/index';
import path from 'path';


const app = express();
app.use(express.json());

app.use('/api', router);

const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));



//https://stackoverflow.com/questions/50218878/typescript-express-error-function
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const statusCode = err.code || 500;
    const message = err.message || 'Internal Server Error';
    console.log(`HUBO UN ERROR ${err.message}`);
    res.status(statusCode).json({
        statusCode,
        message,
    });
};

app.use(errorHandler);

app.listen(Config.PORT, function () {
    DbService.initDb();
    MongoDb.init();
    console.log('Servers running on port 8080');
    console.log(`Enviroment [${Config.MYSQL_ENV}]`)
});

export default app;