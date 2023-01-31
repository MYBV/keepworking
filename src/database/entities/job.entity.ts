//###############################################################################################
import { IJob } from 'src/interfaces/job.interface';
import { Column, Entity, OneToMany } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
import { JobOfferEntity } from './joboffer.entity';
import { PersonEntity } from './person.entity';
//###############################################################################################

//###############################################################################################
@Entity('jobs')
export class JobEntity extends FoundationEntity implements IJob {
  @Column({ type: 'varchar', length: 100, unique: true })
  description: string;

  @OneToMany(() => PersonEntity, (person) => person.job)
  persons: PersonEntity;

  @OneToMany(() => JobOfferEntity, (joboffer) => joboffer.job)
  joboffers: JobOfferEntity[];
}
//###############################################################################################
