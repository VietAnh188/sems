import { DataSource } from 'typeorm';
import { Account } from './entities/Account';
import { Department } from './entities/Department';
import { Ethnicity } from './entities/Ethnicity';
import { Person } from './entities/Person';
import { Role } from './entities/Role';

export const AppDataSource: DataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: 'sems',
    synchronize: true,
    logging: true,
    entities: [Account, Person, Role, Department, Ethnicity],
    subscribers: [],
    migrations: [],
});
