"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const data_source_1 = require("./data-source");
const create_new_account_1 = require("./routes/create_new_account");
const login_1 = require("./routes/login");
data_source_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.get('/', (_, res) => {
        res.send('Hello World!');
    });
    app.use('/images', express_1.default.static(path_1.default.join(__dirname, 'default/images')));
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use(create_new_account_1.RegisterRouter);
    app.use(login_1.LoginRouter);
    const port = process.env.PORT || 1808;
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
})
    .catch(error => {
    console.log('Error during DataSource initialization: ', error);
});
//# sourceMappingURL=index.js.map