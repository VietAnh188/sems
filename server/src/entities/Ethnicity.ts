import { Entity, OneToMany } from 'typeorm';
import { Person } from './Person';
import { Basic } from './utils/Basic';

@Entity()
export class Ethnicity extends Basic {
    @OneToMany(() => Person, person => person.ethnicity)
    persons: Person[];
}
