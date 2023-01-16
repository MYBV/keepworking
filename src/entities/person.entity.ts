import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CountryEntity } from './country.entity';
import { JobEntity } from './job.entity';
import { LanguageEntity } from './language.entity';
import { ModalityEntity } from './modality.entity';
import { TechnologyEntity } from './technology.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

@Entity('persons')
export class PersonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  firstname: string;

  @Column({ type: 'varchar', length: 100 })
  lastname: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email_address: string;

  @Column({ type: 'varchar', length: 25 })
  phone_number: string;

  @Column({ type: 'varchar', length: 255 })
  linkedin_profile: string;

  @Column({ type: 'int', length: 0, nullable: true })
  modalityId: number;

  @Column({ type: 'date', length: 0, nullable: true })
  birthdate: Date;

  @Column({ type: 'int', length: 0, nullable: true })
  jobId: number;

  @Column({ type: 'int', length: 0, nullable: true })
  experience_years: number;

  @Column({ type: 'int', length: 0, nullable: true })
  countryId: number;

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

  @ManyToOne(() => ModalityEntity, (modality) => modality.persons)
  modality: ModalityEntity;

  @ManyToOne(() => JobEntity, (job) => job.persons)
  job: JobEntity;

  @ManyToOne(() => CountryEntity, (country) => country.persons)
  country: CountryEntity;

  @ManyToMany(() => LanguageEntity, (language) => language.persons)
  @JoinTable({
    name: 'personlanguages',
    joinColumn: {
      name: 'personId',
    },
    inverseJoinColumn: {
      name: 'languageId',
    },
  })
  languages: LanguageEntity[];

  @ManyToMany(() => TechnologyEntity, (tecnology) => tecnology.persons)
  @JoinTable({
    name: 'persontecnologies',
    joinColumn: {
      name: 'personId',
    },
    inverseJoinColumn: {
      name: 'tecnologyId',
    },
  })
  tecnologies: TechnologyEntity[];
}
