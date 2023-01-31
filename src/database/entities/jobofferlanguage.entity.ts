//#####################################################################################
import { LevelFormat } from '../../constant';
import { IJobOfferLanguage } from 'src/interfaces/jobofferlanguage.interface';
import { Column, Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import { FoundationMixedEntity } from './foundationmixed.entity';
import { JobOfferEntity } from './joboffer.entity';
import { LanguageEntity } from './language.entity';
//#####################################################################################

//#####################################################################################
@Entity('jobofferlanguages')
export class JobOfferLanguageEntity
  extends FoundationMixedEntity
  implements IJobOfferLanguage
{
  @PrimaryColumn({ type: 'int', length: 0 })
  jobofferId: number;

  @PrimaryColumn({ type: 'int', length: 0 })
  languageId: number;

  @Column({
    type: 'enum',
    enum: LevelFormat,
    default: LevelFormat.BASIC,
    length: 0,
  })
  level: string;

  @OneToOne(() => JobOfferEntity)
  @JoinTable()
  joboffer: JobOfferEntity;

  @OneToOne(() => LanguageEntity)
  @JoinTable()
  language: LanguageEntity;
  
}
//#####################################################################################
