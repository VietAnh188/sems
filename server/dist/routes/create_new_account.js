"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRouter = void 0;
const express_1 = __importDefault(require("express"));
const data_source_1 = require("../data-source");
const argon2_1 = __importDefault(require("argon2"));
const Account_1 = require("../entities/Account");
const router = express_1.default.Router();
exports.RegisterRouter = router;
const accountRepository = data_source_1.AppDataSource.getRepository(Account_1.Account);
router.post('/api/auth/register', async (req, res) => {
    try {
        const existUsername = await accountRepository.findOneBy({
            username: req.body.username,
        });
        if (existUsername)
            return res.status(400).json({ message: 'Username already exists' });
        const existEmail = await accountRepository.findOneBy({
            email: req.body.email,
        });
        const hashedPassword = await argon2_1.default.hash(req.body.password);
        if (existEmail)
            return res.status(400).json({ message: 'Email already exists' });
        const newAccount = accountRepository.create(Object.assign(Object.assign({}, req.body), { password: hashedPassword }));
        await accountRepository.save(newAccount);
        return res.status(200).json(newAccount);
    }
    catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
});
//# sourceMappingURL=create_new_account.js.map