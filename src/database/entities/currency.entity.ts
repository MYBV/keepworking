//###############################################################################################
import { ICurrency } from 'src/interfaces/currency.interface';
import { Column, Entity, OneToMany } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
import { JobOfferEntity } from './joboffer.entity';
//###############################################################################################

//###############################################################################################
@Entity('currencies')
export class CurrencyEntity extends FoundationEntity implements ICurrency {
  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 10 })
  symbol: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon: string;

  @OneToMany(() => JobOfferEntity, (joboffer) => joboffer.currency)
  joboffers: JobOfferEntity[];
}
//###############################################################################################
