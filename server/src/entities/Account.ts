import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Person } from './Person';

@Entity()
export class Account extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        unique: true,
        length: 10,
    })
    username: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column({
        unique: true,
    })
    password: string;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
    })
    updated_at: Date;

    @OneToOne(() => Person, person => person.account)
    person: Person;
}
