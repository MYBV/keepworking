//###############################################################################################
import { ILanguage } from 'src/interfaces/language.interface';
import { Column, Entity, ManyToMany } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
import { JobOfferEntity } from './joboffer.entity';
import { PersonEntity } from './person.entity';
//###############################################################################################

//###############################################################################################
@Entity('languages')
export class LanguageEntity extends FoundationEntity implements ILanguage {
  @Column({ type: 'varchar', length: 50, unique: true })
  name: string;

  @ManyToMany(() => PersonEntity, (person) => person.languages)
  persons: PersonEntity[];

  @ManyToMany(() => JobOfferEntity, (joboffer) => joboffer.languages)
  joboffers: JobOfferEntity[];
}
//###############################################################################################
