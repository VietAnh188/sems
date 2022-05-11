import { Request, Response, NextFunction } from 'express';
import { CanViewPerson } from '../permissions';

const authGetPerson = (req: Request, res: Response, next: NextFunction) => {
    const person = req.body.person;
    const targetId = req.params.id;

    if (!CanViewPerson({ id: person.id, roles: person.roles }, targetId)) {
        return res.status(403).json({
            message: 'You are not authorized to view this person',
        });
    }
    next();
    return null;
};

export default authGetPerson;
