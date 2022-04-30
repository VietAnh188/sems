import 'reflect-metadata';
require('dotenv').config();
import express from 'express';
import cors from 'cors';
import path from 'path';
import { AppDataSource } from './data-source';
import { RegisterRouter } from './routes/create_new_account';
import { LoginRouter } from './routes/login';

AppDataSource.initialize()
    .then(() => {
        const app = express();

        app.get('/', (_, res) => {
            res.send('Hello World!');
        });

        app.use(
            '/images',
            express.static(path.join(__dirname, 'default/images'))
        );

        app.use(express.json());
        app.use(cors());

        app.use(RegisterRouter);
        app.use(LoginRouter);

        const port = process.env.PORT || 1808;

        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch(error => {
        console.log('Error during DataSource initialization: ', error);
    });
