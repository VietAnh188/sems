import { Role } from '../entities/Role';

const CanDoWithManager = (person: { roles: Role[] }) => {
    return person.roles.some(role => role.name === 'Manager');
};

export default CanDoWithManager;
