import { CanDoWithManager } from '../permissions';
import { Request, Response, NextFunction } from 'express';

const authUpdatePerson = (req: Request, res: Response, next: NextFunction) => {
    const person = req.body.person;
    const targetPersonId = req.params.id;
    if (
        !CanDoWithManager({ roles: person.roles }) ||
        person.id === targetPersonId
    ) {
        return res.status(403).json({
            message: 'You are not allowed to update this person',
        });
    }
    next();
    return null;
};

export default authUpdatePerson;
