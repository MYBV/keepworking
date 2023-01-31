//###############################################################################################
import { ITechnology } from 'src/interfaces/technology.interface';
import { Column, Entity, ManyToMany } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
import { JobOfferEntity } from './joboffer.entity';
import { PersonEntity } from './person.entity';
//###############################################################################################

//###############################################################################################
@Entity('technologies')
export class TechnologyEntity extends FoundationEntity implements ITechnology {
  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon: string;

  @ManyToMany(() => PersonEntity, (person) => person.tecnologies)
  persons: PersonEntity[];

  @ManyToMany(() => JobOfferEntity, (joboffer) => joboffer.tecnologies)
  joboffers: JobOfferEntity[];
}
//###############################################################################################
