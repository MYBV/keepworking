//########################################################################################
import { IProvince } from 'src/interfaces/provinces.interface';
import { Column, Entity, ManyToOne } from 'typeorm';
import { CountryEntity } from './country.entity';
import { FoundationEntity } from './foundation.entity';
//########################################################################################

//########################################################################################
@Entity('provinces')
export class ProvinceEntity extends FoundationEntity implements IProvince {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int', length: 0 })
  countryId: number;

  @ManyToOne(() => CountryEntity, (country) => country.provinces)
  country: CountryEntity;
}
//########################################################################################
