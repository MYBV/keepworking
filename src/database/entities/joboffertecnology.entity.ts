//###############################################################################################
import { IJobOfferTecnology } from 'src/interfaces/joboffertecnology.interface';
import { Column, Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import { JobOfferEntity } from './joboffer.entity';
import { TechnologyEntity } from './technology.entity';
import { FoundationMixedEntity } from './foundationmixed.entity';
//###############################################################################################

//###############################################################################################
@Entity('joboffertecnologies')
export class JobOfferTecnologyEntity
  extends FoundationMixedEntity
  implements IJobOfferTecnology
{
  @PrimaryColumn({ type: 'int', length: 0 })
  jobofferId: number;

  @PrimaryColumn({ type: 'int', length: 0 })
  tecnologyId: number;

  @Column({ type: 'int', length: 0 })
  experience_years: number;

  @OneToOne(() => JobOfferEntity)
  @JoinTable()
  joboffer: JobOfferEntity;

  @OneToOne(() => TechnologyEntity)
  @JoinTable()
  tecnology: TechnologyEntity;
}
//###############################################################################################
