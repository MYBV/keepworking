import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { JobOfferEntity } from './joboffer.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

@Entity('currencies')
export class CurrencyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 10 })
  symbol: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon: string;

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

  @OneToMany(() => JobOfferEntity, (joboffer) => joboffer.currency)
  joboffers: JobOfferEntity[];
}
