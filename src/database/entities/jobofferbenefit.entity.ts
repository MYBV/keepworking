//###############################################################################################
import { IJobOfferBenefit } from 'src/interfaces/jobofferbenefit.interface';
import { Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import { BenefitEntity } from './benefit.entity';
import { JobOfferEntity } from './joboffer.entity';
import { FoundationMixedEntity } from './foundationmixed.entity';
//###############################################################################################

//###############################################################################################
@Entity('jobofferbenefits')
export class JobOfferBenefitEntity
  extends FoundationMixedEntity
  implements IJobOfferBenefit
{
  @PrimaryColumn({ type: 'int', length: 0 })
  jobofferId: number;

  @PrimaryColumn({ type: 'int', length: 0 })
  benefitId: number;

  @OneToOne(() => JobOfferEntity)
  @JoinTable()
  joboffer: JobOfferEntity;

  @OneToOne(() => BenefitEntity)
  @JoinTable()
  benefit: BenefitEntity;
}
//###############################################################################################
