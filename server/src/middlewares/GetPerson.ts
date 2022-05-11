import { Request, Response, NextFunction } from 'express';

const GetPerson = (req: Request, _res: Response, next: NextFunction) => {
    console.log(req.body);
    next();
};

export default GetPerson;
