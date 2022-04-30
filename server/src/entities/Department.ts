import { Entity, OneToMany } from 'typeorm';
import { Basic } from './utils/Basic';
import { Person } from './Person';

@Entity()
export class Department extends Basic {
    @OneToMany(() => Person, person => person.department)
    persons: Person[];
}
