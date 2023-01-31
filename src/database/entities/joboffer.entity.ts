//###############################################################################################
import { IJobOffer } from 'src/interfaces/joboffer.interface';
import { Column, Entity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { BenefitEntity } from './benefit.entity';
import { CompanyEntity } from './company.entity';
import { ContractEntity } from './contract.entity';
import { CountryEntity } from './country.entity';
import { CurrencyEntity } from './currency.entity';
import { FoundationEntity } from './foundation.entity';
import { JobEntity } from './job.entity';
import { LanguageEntity } from './language.entity';
import { ModalityEntity } from './modality.entity';
import { TechnologyEntity } from './technology.entity';
//###############################################################################################

//###############################################################################################
@Entity('joboffers')
export class JobOfferEntity extends FoundationEntity implements IJobOffer {
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

  @Column({ type: 'int', length: 0 })
  salary_min: number;

  @Column({ type: 'int', length: 0 })
  salary_max: number;

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

  @ManyToMany(() => LanguageEntity, (language) => language.joboffers)
  @JoinTable({
    name: 'jobofferlanguages',
    joinColumn: {
      name: 'jobofferId',
    },
    inverseJoinColumn: {
      name: 'languageId',
    },
  })
  languages: LanguageEntity[];

}
//###############################################################################################
