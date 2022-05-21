import { DataSource } from 'typeorm';
import { Account } from './entities/Account';
import { Department } from './entities/Department';
import { Ethnicity } from './entities/Ethnicity';
import { Person } from './entities/Person';
import { Role } from './entities/Role';

export const AppDataSource: DataSource = new DataSource({
    type: 'postgres',
    host: process.env.PRODUCTION_HOST || 'localhost',
    port: Number(process.env.PRODUCTION_PORT) || 5432,
    username: process.env.PRODUCTION_USERNAME || process.env.POSTGRES_USERNAME,
    password: process.env.PRODUCTION_PASSWORD || process.env.POSTGRES_PASSWORD,
    database: process.env.PRODUCTION_DATABASE || 'sems',
    synchronize: true,
    logging: true,
    entities: [Account, Person, Role, Department, Ethnicity],
    subscribers: [],
    migrations: [],
});
