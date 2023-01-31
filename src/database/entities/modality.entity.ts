//###############################################################################################
import { IModality } from 'src/interfaces/modality.interface';
import { Column, Entity, OneToMany } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
import { JobOfferEntity } from './joboffer.entity';
import { PersonEntity } from './person.entity';
//###############################################################################################

//###############################################################################################
@Entity('modalities')
export class ModalityEntity
  extends FoundationEntity
  implements IModality
{
  @Column({ type: 'varchar', length: 100, unique: true })
  description: string;

  @OneToMany(() => PersonEntity, (person) => person.modality)
  persons: PersonEntity[];

  @OneToMany(() => JobOfferEntity, (joboffer) => joboffer.modality)
  joboffers: JobOfferEntity[];

}
//###############################################################################################
