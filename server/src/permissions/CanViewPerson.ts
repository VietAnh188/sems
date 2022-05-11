import { Role } from '../entities/Role';
import CanDoWithManager from './CanDoWithManager';

const CanViewPerson = (
    person: { id: string; roles: Role[] },
    targetId: string
): boolean => {
    return CanDoWithManager({ roles: person.roles }) || person.id === targetId;
};

export default CanViewPerson;
