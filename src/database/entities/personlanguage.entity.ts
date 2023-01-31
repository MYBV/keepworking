//###############################################################################################

import { LevelFormat } from '../../constant';
import { IPersonLanguage } from 'src/interfaces/personlanguage.interface';
import { Column, Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import { LanguageEntity } from './language.entity';
import { PersonEntity } from './person.entity';
import { FoundationMixedEntity } from './foundationmixed.entity';
//###############################################################################################

//###############################################################################################
@Entity('personlanguages')
export class PersonLanguageEntity
  extends FoundationMixedEntity
  implements IPersonLanguage
{
  @PrimaryColumn({ type: 'int', length: 0 })
  personId: number;

  @PrimaryColumn({ type: 'int', length: 0 })
  languageId: number;

  @Column({
    type: 'enum',
    enum: LevelFormat,
    default: LevelFormat.BASIC,
    length: 0,
  })
  level: string;

  @OneToOne(() => PersonEntity)
  @JoinTable()
  person: PersonEntity;

  @OneToOne(() => LanguageEntity)
  @JoinTable()
  language: LanguageEntity;
}
//###############################################################################################
