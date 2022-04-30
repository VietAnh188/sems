import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
}

export enum WorkingType {
    FULLTIME = 'full-time',
    PARTTIME = 'part-time',
}

@Entity()
export class Info extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        type: 'date',
        nullable: true,
    })
    birthday: Date;

    @Column({
        type: 'date',
    })
    hiring_date: Date;

    @Column({
        nullable: true,
        length: 10,
    })
    phone_number: string;

    @Column({
        nullable: true,
    })
    address: string;

    @Column({
        type: 'int',
    })
    vacation: number;

    @Column({
        type: 'money',
    })
    salary: number;

    @Column({
        nullable: true,
    })
    description: string;

    @Column({
        type: 'enum',
        enum: Gender,
        default: Gender.MALE,
    })
    gender: Gender;

    @Column({
        type: 'enum',
        enum: WorkingType,
        default: WorkingType.FULLTIME,
    })
    working_type: WorkingType;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
    })
    updated_at: Date;
}
