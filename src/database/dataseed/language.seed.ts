//#######################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { LanguageEntity } from '../entities/language.entity';
//#######################################################################################

//#######################################################################################
export default class DataLanguage implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(LanguageEntity)
      .values([
        { name: 'Español' },
        { name: 'Ingles' },
        { name: 'Portugués' },
        { name: 'Francés' },
        { name: 'Alemán' },
      ])
      .execute();
  }
}
//#######################################################################################
