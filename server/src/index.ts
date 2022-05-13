require('dotenv').config();
import 'reflect-metadata';
import { createServer } from 'http';
import { Server } from 'socket.io';
import morgan from 'morgan';
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
        const server = createServer(app);
        const io = new Server(server, {
            cors: {
                origin: 'http://localhost:3000',
                credentials: true,
            },
        });

        app.get('/', (_, res) => {
            res.send('Hello World!');
        });

        app.use(
            '/images',
            express.static(path.join(__dirname, 'default/images'))
        );

        app.use(express.json());
        app.use(cors());
        app.use(morgan('dev'));

        app.use('/api/auth', AuthRouter);
        app.use('/api/role', RoleRouter);
        app.use('/api/person', PersonRouter);
        app.use('/api/department', DepartmentRouter);
        app.use('/api/ethnicity', EthnicityRouter);

        io.on('connection', socket => {
            console.log('Socket ID: ' + socket.id);
        });

        const port = process.env.PORT || 1808;

        server.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch(error => {
        console.log('Error during DataSource initialization: ', error);
    });
