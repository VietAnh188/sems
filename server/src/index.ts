import 'reflect-metadata';
require('dotenv').config();
import express, { Express } from 'express';
import cors from 'cors';
import path from 'path';
import { AppDataSource } from './data-source';
import { AuthRouter } from './routes/authRoute';
import { RoleRouter } from './routes/roleRoute';
import { PersonRouter } from './routes/personRoute';
import { DepartmentRouter } from './routes/departmentRoute';
import { EthnicityRouter } from './routes/ethnicityRoute';

AppDataSource.initialize()
    .then(() => {
        const app: Express = express();

        app.get('/', (_, res) => {
            res.send('Hello World!');
        });

        app.use(
            '/images',
            express.static(path.join(__dirname, 'default/images'))
        );

        app.use(express.json());
        app.use(cors());

        app.use('/api/auth', AuthRouter);
        app.use('/api/role', RoleRouter);
        app.use('/api/person', PersonRouter);
        app.use('/api/department', DepartmentRouter);
        app.use('/api/ethnicity', EthnicityRouter);

        const port = process.env.PORT || 1808;

        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch(error => {
        console.log('Error during DataSource initialization: ', error);
    });
