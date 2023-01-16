import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobOfferEntity } from './joboffer.entity';

export enum StateFormat {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
}

@Entity('companies')
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 200 })
  business_name: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  cuil: string;

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

  @OneToMany(() => JobOfferEntity, (joboffer) => joboffer.company)
  joboffers: JobOfferEntity[];
}
