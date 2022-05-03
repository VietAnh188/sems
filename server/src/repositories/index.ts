import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Person } from '../entities/Person';
import { Account } from '../entities/Account';
import { Department } from '../entities/Department';
import { Ethnicity } from '../entities/Ethnicity';
import { Role } from '../entities/Role';

export const personRepository: Repository<Person> =
    AppDataSource.getRepository(Person);

export const accountRepository: Repository<Account> =
    AppDataSource.getRepository(Account);

export const departmentRepository: Repository<Department> =
    AppDataSource.getRepository(Department);

export const ethnicityRepository: Repository<Ethnicity> =
    AppDataSource.getRepository(Ethnicity);

export const roleRepository: Repository<Role> =
    AppDataSource.getRepository(Role);
