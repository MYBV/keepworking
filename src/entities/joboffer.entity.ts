import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { BenefitEntity } from './benefit.entity';
import { CompanyEntity } from './company.entity';
import { ContractEntity } from './contract.entity';
import { CountryEntity } from './country.entity';
import { CurrencyEntity } from './currency.entity';
import { JobEntity } from './job.entity';
import { ModalityEntity } from './modality.entity';
import { TechnologyEntity } from './technology.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

@Entity('joboffers')
export class JobOfferEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int', length: 0 })
  modalityId: number;

  @Column({ type: 'int', length: 0 })
  jobId: number;

  @Column({ type: 'int', length: 0 })
  contractId: number;

  @Column({ type: 'varchar', length: 255 })
  schedule: string;

  @Column({ type: 'int', length: 0 })
  empresaId: number;

  @Column({ type: 'varchar', length: 100 })
  salary_range: string;

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

  @ManyToOne(() => ModalityEntity, (modality) => modality.joboffers)
  modality: ModalityEntity;

  @ManyToOne(() => JobEntity, (job) => job.joboffers)
  job: JobEntity;

  @ManyToOne(() => ContractEntity, (contract) => contract.joboffers)
  contract: ContractEntity;

  @ManyToOne(() => CompanyEntity, (company) => company.joboffers)
  company: CompanyEntity;

  @ManyToOne(() => CurrencyEntity, (currency) => currency.joboffers)
  currency: CurrencyEntity;

  @ManyToMany(() => TechnologyEntity, (tecnology) => tecnology.joboffers)
  @JoinTable({
    name: 'joboffertecnologies',
    joinColumn: {
      name: 'jobofferId',
    },
    inverseJoinColumn: {
      name: 'tecnologyId',
    },
  })
  tecnologies: TechnologyEntity[];

  @ManyToMany(() => BenefitEntity, (benefit) => benefit.joboffers)
  @JoinTable({
    name: 'jobofferbenefits',
    joinColumn: {
      name: 'jobofferId',
    },
    inverseJoinColumn: {
      name: 'benefitId',
    },
  })
  benefits: BenefitEntity[];

  @ManyToMany(() => CountryEntity, (country) => country.joboffers)
  @JoinTable({
    name: 'joboffercountries',
    joinColumn: {
      name: 'jobofferId',
    },
    inverseJoinColumn: {
      name: 'countryId',
    },
  })
  countries: CountryEntity[];
}
