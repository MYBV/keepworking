//###############################################################################################
import { Column, Entity } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
//###############################################################################################

//###############################################################################################
@Entity('pruebas')
export class PruebasEntity extends FoundationEntity {
  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon: string;
}
//###############################################################################################
