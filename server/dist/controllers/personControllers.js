"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personControllers = void 0;
const data_source_1 = require("../data-source");
const Person_1 = require("../entities/Person");
const personRepository = data_source_1.AppDataSource.getRepository(Person_1.Person);
exports.personControllers = {
    createNewPerson: async (req, res) => {
        try {
            const person = personRepository.create(req.body);
            await personRepository.save(person);
            return res.status(200).json(person);
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
    connectToAccount: async (req, res) => {
        try {
            const { personId, accountId } = req.params;
            await personRepository
                .createQueryBuilder()
                .relation(Person_1.Person, 'account')
                .of(personId)
                .set(accountId);
            return res.status(200).json({
                message: 'Successfully connected to account',
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    },
};
//# sourceMappingURL=personControllers.js.map