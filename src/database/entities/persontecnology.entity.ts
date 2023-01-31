//###############################################################################################
import { IPersonTecnology } from 'src/interfaces/persontecnology.interface';
import { Column, Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import { PersonEntity } from './person.entity';
import { TechnologyEntity } from './technology.entity';
import { FoundationMixedEntity } from './foundationmixed.entity';
//###############################################################################################

//###############################################################################################
@Entity('persontecnologies')
export class PersonTecnologyEntity
  extends FoundationMixedEntity
  implements IPersonTecnology
{
  @PrimaryColumn({ type: 'int', length: 0 })
  personId: number;

  @PrimaryColumn({ type: 'int', length: 0 })
  tecnologyId: number;

  @Column({ type: 'int', length: 0 })
  experience_years: number;

  @OneToOne(() => PersonEntity)
  @JoinTable()
  person: PersonEntity;

  @OneToOne(() => TechnologyEntity)
  @JoinTable()
  tecnology: TechnologyEntity;
}
//###############################################################################################
