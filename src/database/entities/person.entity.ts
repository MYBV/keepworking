//###############################################################################################
import { IPerson } from 'src/interfaces/person.interface';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { CompanyEntity } from './company.entity';
import { CountryEntity } from './country.entity';
import { FoundationEntity } from './foundation.entity';
import { JobEntity } from './job.entity';
import { LanguageEntity } from './language.entity';
import { ModalityEntity } from './modality.entity';
import { TechnologyEntity } from './technology.entity';
//###############################################################################################

//###############################################################################################
@Entity('persons')
export class PersonEntity extends FoundationEntity implements IPerson {
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

  @ManyToMany(() => CompanyEntity, (company) => company.persons)
  @JoinTable({
    name: 'personcompanies',
    joinColumn: {
      name: 'personId',
    },
    inverseJoinColumn: {
      name: 'companyId',
    },
  })
  companies: CompanyEntity[];
}
//###############################################################################################
