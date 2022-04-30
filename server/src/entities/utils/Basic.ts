import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Basic extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        unique: true,
        length: 20,
    })
    name: string;

    @Column({
        nullable: true,
    })
    description: string;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
    })
    updated_at: Date;
}
