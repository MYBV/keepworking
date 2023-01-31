//###############################################################################################
import { ICountry } from 'src/interfaces/country.interface';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
import { JobOfferEntity } from './joboffer.entity';
import { PersonEntity } from './person.entity';
import { ProvinceEntity } from './province.entity';
//###############################################################################################

//###############################################################################################
@Entity('countries')
export class CountryEntity extends FoundationEntity implements ICountry {
  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 10 })
  phone_code: string;

  @Column({ type: 'varchar', length: 5 })
  abreviatura: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon: string;

  @OneToMany(() => PersonEntity, (person) => person.country)
  persons: PersonEntity;

  @OneToMany(() => ProvinceEntity, (province) => province.country)
  provinces: ProvinceEntity;

  @ManyToMany(() => JobOfferEntity, (joboffer) => joboffer.countries)
  joboffers: JobOfferEntity[];
}
//###############################################################################################
