import { Entity, ManyToMany } from 'typeorm';
import { Person } from './Person';
import { Basic } from './utils/Basic';

@Entity()
export class Role extends Basic {
    @ManyToMany(() => Person, person => person.roles)
    persons: Person[];
}
