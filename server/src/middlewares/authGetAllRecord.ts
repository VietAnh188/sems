import { Request, Response, NextFunction } from 'express';
import { CanDoWithManager } from '../permissions';

const authGetAllRecord = (req: Request, res: Response, next: NextFunction) => {
    const person = req.body.person;

    if (!CanDoWithManager({ roles: person.roles })) {
        return res.status(403).json({
            message: 'You are not authorized to do get all record',
        });
    }

    next();
    return null;
};

export default authGetAllRecord;
