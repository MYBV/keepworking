//#############################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { ProfileEntity } from '../entities/profile.entity';
//#############################################################################################

//#############################################################################################
export default class DataProfile implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(ProfileEntity)
      .values([{ description: 'Postulante' }, { description: 'Reclutador' }])
      .execute();
  }
}
//#############################################################################################
