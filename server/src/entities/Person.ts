import {
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToOne,
} from 'typeorm';
import { Info } from './utils/Info';
import { Account } from './Account';
import { Department } from './Department';
import { Ethnicity } from './Ethnicity';
import { Role } from './Role';

@Entity()
export class Person extends Info {
    @OneToOne(() => Account, account => account.person)
    @JoinColumn({
        name: 'account_id',
    })
    account: Account;

    @ManyToOne(() => Department, department => department.persons)
    @JoinColumn({
        name: 'department_id',
    })
    department: Department;

    @ManyToOne(() => Ethnicity, ethnicity => ethnicity.persons)
    @JoinColumn({
        name: 'ethnicity_id',
    })
    ethnicity: Ethnicity;

    @ManyToMany(() => Role, role => role.persons, {
        cascade: true,
    })
    @JoinTable({
        name: 'person_role',
        joinColumn: {
            name: 'person_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        },
    })
    roles: Role[];
}
