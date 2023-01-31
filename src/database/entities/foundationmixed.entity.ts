//#####################################################################################
import { StateFormat } from '../../constant';
import { Column } from 'typeorm';
//#####################################################################################

//#####################################################################################
export abstract class FoundationMixedEntity {
  @Column({
    type: 'enum',
    length: 0,
    enum: StateFormat,
    default: StateFormat.ACTIVE,
  })
  state: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
//#####################################################################################
