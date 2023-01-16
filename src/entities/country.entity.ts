import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobOfferEntity } from './joboffer.entity';
import { PersonEntity } from './person.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

@Entity('countries')
export class CountryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 5 })
  phone_code: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon: string;

  @Column({
    type: 'enum',
    length: 0,
    enum: StateFormat,
    default: StateFormat.ACTIVE,
  })
  state: StateFormat;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => PersonEntity, (person) => person.country)
  persons: PersonEntity;

  @ManyToMany(() => JobOfferEntity, (joboffer) => joboffer.countries)
  joboffers: JobOfferEntity[];
}
