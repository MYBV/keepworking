import { Column, Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import { JobOfferEntity } from './joboffer.entity';
import { TechnologyEntity } from './technology.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

@Entity('joboffertecnologies')
export class JobOfferTecnologyEntity {
  @PrimaryColumn({ type: 'int', length: 0 })
  jobofferId: number;

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

  @OneToOne(() => JobOfferEntity)
  @JoinTable()
  joboffer: JobOfferEntity;

  @OneToOne(() => TechnologyEntity)
  @JoinTable()
  tecnology: TechnologyEntity;
}
