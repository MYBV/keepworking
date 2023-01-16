import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from 'typeorm';
import { JobOfferEntity } from './joboffer.entity';
import { PersonEntity } from './person.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

@Entity('technologies')
export class TechnologyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon: string;

  @Column({
    type: 'enum',
    enum: StateFormat,
    default: StateFormat.ACTIVE,
    length: 0,
  })
  state: StateFormat;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToMany(() => PersonEntity, (person) => person.tecnologies)
  persons: PersonEntity[];

  @ManyToMany(() => JobOfferEntity, (joboffer) => joboffer.tecnologies)
  joboffers: JobOfferEntity[];
}
