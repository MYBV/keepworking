//######################################################################################
import { ModalityEntity } from '../entities/modality.entity';
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
//######################################################################################

//######################################################################################
export default class DataModality implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
    .createQueryBuilder()
    .insert()
    .into(ModalityEntity)
    .values([
      { description: 'Remoto' },
      { description: 'Presencial' },
      { description: 'Híbrido' },
    ])
      .execute()
  }  
}
//######################################################################################
