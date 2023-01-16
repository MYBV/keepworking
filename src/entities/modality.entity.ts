import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobOfferEntity } from './joboffer.entity';
import { PersonEntity } from './person.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

@Entity('modalities')
export class ModalityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 100, unique: true})
  description: string;

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

  @OneToMany(()=> PersonEntity, (person) => person.modality)
  persons: PersonEntity[];

  @OneToMany(()=> JobOfferEntity, (joboffer) => joboffer.modality)
  joboffers: JobOfferEntity[];
}
