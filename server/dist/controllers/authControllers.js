"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authControllers = void 0;
const argon2_1 = __importDefault(require("argon2"));
const repositories_1 = require("../repositories");
exports.authControllers = {
    login: async (req, res) => {
        try {
            const account = await repositories_1.accountRepository.findOneBy({
                username: req.body.username,
            });
            if (!account)
                return res
                    .status(400)
                    .json({ message: 'Username does not exist' });
            if (await argon2_1.default.verify(account.password, req.body.password)) {
                const accountRelational = await repositories_1.accountRepository
                    .createQueryBuilder('account')
                    .leftJoinAndSelect('account.person', 'person')
                    .where('account.id = :id', { id: account.id })
                    .getOne();
                if (!accountRelational) {
                    return res.status(404).json({
                        message: 'Account not found',
                    });
                }
                const { password } = accountRelational, remain = __rest(accountRelational, ["password"]);
                return res.status(200).json(Object.assign({}, remain));
            }
            else {
                return res
                    .status(400)
                    .json({ message: 'Password is incorrect' });
            }
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    register: async (req, res) => {
        try {
            const existUsername = await repositories_1.accountRepository.findOneBy({
                username: req.body.username,
            });
            if (existUsername)
                return res
                    .status(400)
                    .json({ message: 'Username already exists' });
            const existEmail = await repositories_1.accountRepository.findOneBy({
                email: req.body.email,
            });
            const hashedPassword = await argon2_1.default.hash(req.body.password);
            if (existEmail)
                return res
                    .status(400)
                    .json({ message: 'Email already exists' });
            const newAccount = repositories_1.accountRepository.create(Object.assign(Object.assign({}, req.body), { password: hashedPassword }));
            await repositories_1.accountRepository.save(newAccount);
            return res.status(200).json(newAccount);
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
};
//# sourceMappingURL=authControllers.js.map