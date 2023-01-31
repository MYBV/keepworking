//###############################################################################################
import { IBenefit } from 'src/interfaces/benefit.interface';
import { Column, Entity, ManyToMany } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
import { JobOfferEntity } from './joboffer.entity';
//###############################################################################################

//###############################################################################################
@Entity('benefits')
export class BenefitEntity
  extends FoundationEntity
  implements IBenefit
{
  @Column({ type: 'varchar', length: 50, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon: string;

  @ManyToMany(() => JobOfferEntity, (joboffer) => joboffer.benefits)
  joboffers: JobOfferEntity[];
}
//###############################################################################################
