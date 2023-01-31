//###############################################################################################
import { ICompany } from 'src/interfaces/company.interface';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
import { JobOfferEntity } from './joboffer.entity';
import { PersonEntity } from './person.entity';
//###############################################################################################

//###############################################################################################
@Entity('companies')
export class CompanyEntity extends FoundationEntity implements ICompany {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 200 })
  business_name: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  cuil: string;

  @OneToMany(() => JobOfferEntity, (joboffer) => joboffer.company)
  joboffers: JobOfferEntity[];

  @ManyToMany(() => PersonEntity, (person) => person.companies)
  persons: PersonEntity[];
}
//###############################################################################################
