import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobOfferEntity } from './joboffer.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

@Entity('benefits')
export class BenefitEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon: string;

  @Column({
    type: 'enum',
    length: 0,
    enum: StateFormat,
    default: StateFormat.ACTIVE,
  })
  state: StateFormat;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToMany(() => JobOfferEntity, (joboffer) => joboffer.benefits)
  joboffers: JobOfferEntity[];
}
