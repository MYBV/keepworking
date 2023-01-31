//###############################################################################################
import { IJobOfferCountry } from 'src/interfaces/joboffercountry.interface';
import { Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import { CountryEntity } from './country.entity';
import { JobOfferEntity } from './joboffer.entity';
import { FoundationMixedEntity } from './foundationmixed.entity';
//###############################################################################################

//###############################################################################################
@Entity('joboffercountries')
export class JobOfferCountryEntity
  extends FoundationMixedEntity
  implements IJobOfferCountry
{
  @PrimaryColumn({ type: 'int', length: 0 })
  jobofferId: number;

  @PrimaryColumn({ type: 'int', length: 0 })
  countryId: number;

  @OneToOne(() => JobOfferEntity)
  @JoinTable()
  joboffer: JobOfferEntity;

  @OneToOne(() => CountryEntity)
  @JoinTable()
  country: CountryEntity;
}
//###############################################################################################
