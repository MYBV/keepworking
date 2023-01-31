//###############################################################################################
import { IContract } from 'src/interfaces/contract.interface';
import { Column, Entity, OneToMany } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
import { JobOfferEntity } from './joboffer.entity';
//###############################################################################################

//###############################################################################################
@Entity('contracts')
export class ContractEntity extends FoundationEntity implements IContract {
  @Column({ type: 'varchar', length: 50, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @OneToMany(() => JobOfferEntity, (joboffer) => joboffer.contract)
  joboffers: JobOfferEntity[];
}
//###############################################################################################
