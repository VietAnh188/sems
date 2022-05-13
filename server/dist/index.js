"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const data_source_1 = require("./data-source");
const authRoute_1 = require("./routes/authRoute");
const roleRoute_1 = require("./routes/roleRoute");
const personRoute_1 = require("./routes/personRoute");
const departmentRoute_1 = require("./routes/departmentRoute");
const ethnicityRoute_1 = require("./routes/ethnicityRoute");
data_source_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    const server = (0, http_1.createServer)(app);
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: 'http://localhost:3000',
            credentials: true,
        },
    });
    app.get('/', (_, res) => {
        res.send('Hello World!');
    });
    app.use('/images', express_1.default.static(path_1.default.join(__dirname, 'default/images')));
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)('dev'));
    app.use('/api/auth', authRoute_1.AuthRouter);
    app.use('/api/role', roleRoute_1.RoleRouter);
    app.use('/api/person', personRoute_1.PersonRouter);
    app.use('/api/department', departmentRoute_1.DepartmentRouter);
    app.use('/api/ethnicity', ethnicityRoute_1.EthnicityRouter);
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
//# sourceMappingURL=index.js.map