import { Column, Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import { PersonEntity } from './person.entity';
import { TechnologyEntity } from './technology.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

@Entity('persontecnologies')
export class PersonTecnologyEntity {
  @PrimaryColumn({ type: 'int', length: 0 })
  personId: number;

  @PrimaryColumn({ type: 'int', length: 0 })
  tecnologyId: number;

  @Column({ type: 'int', length: 0 })
  experience_years: number;

  @Column({
    type: 'enum',
    enum: StateFormat,
    default: StateFormat.ACTIVE,
    width: 0,
  })
  state: StateFormat;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToOne(() => PersonEntity)
  @JoinTable()
  person: PersonEntity;

  @OneToOne(() => TechnologyEntity)
  @JoinTable()
  tecnology: TechnologyEntity;
}
