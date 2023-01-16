import { Column, Entity, JoinTable, OneToOne, PrimaryColumn } from 'typeorm';
import { BenefitEntity } from './benefit.entity';
import { JobOfferEntity } from './joboffer.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

@Entity('jobofferbenefits')
export class JobOfferBenefitEntity {
  @PrimaryColumn({ type: 'int', length: 0 })
  jobofferId: number;

  @PrimaryColumn({ type: 'int', length: 0 })
  benefitId: number;

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

  @OneToOne(() => BenefitEntity)
  @JoinTable()
  benefit: BenefitEntity;
}
