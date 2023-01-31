//###############################################################################################
import { IPersonCompany } from 'src/interfaces/personcompany.interface';
import { Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import { CompanyEntity } from './company.entity';
import { FoundationMixedEntity } from './foundationmixed.entity';
import { PersonEntity } from './person.entity';
//###############################################################################################

//###############################################################################################
@Entity('personcompanies')
export class PersonCompanyEntity
  extends FoundationMixedEntity
  implements IPersonCompany
{
  @PrimaryColumn({ type: 'int', length: 0 })
  personId: number;

  @PrimaryColumn({ type: 'int', length: 0 })
  companyId: number;

  @OneToOne(() => PersonEntity)
  @JoinTable()
  person: PersonEntity;

  @OneToOne(() => CompanyEntity)
  @JoinTable()
  company: CompanyEntity;
}
//###############################################################################################
