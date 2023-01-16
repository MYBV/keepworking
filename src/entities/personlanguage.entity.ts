import { Column, Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import { LanguageEntity } from './language.entity';
import { PersonEntity } from './person.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

export enum LevelFormat {
  NATIVE = 'NATIVO',
  BASIC = 'BASICO',
  INTERMEDIATE = 'INTERMEDIO',
  ADVANCED = 'AVANZADO',
}

@Entity('personlanguages')
export class PersonLanguageEntity {
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
  level: StateFormat;

  @Column({
    type: 'enum',
    enum: StateFormat,
    default: StateFormat.ACTIVE,
    length: 0,
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

  @OneToOne(() => LanguageEntity)
  @JoinTable()
  language: LanguageEntity;
}
