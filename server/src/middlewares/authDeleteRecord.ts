import { Request, Response, NextFunction } from 'express';
import { CanDoWithManager } from '../permissions';

const authDeleteRecord = (req: Request, res: Response, next: NextFunction) => {
    const person = req.body.person;

    if (!CanDoWithManager({ roles: person.roles })) {
        return res.status(403).json({
            message: 'You are not allowed to delete this record',
        });
    }
    next();
    return null;
};

export default authDeleteRecord;
