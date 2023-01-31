//######################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { PersonLanguageEntity } from '../entities/personlanguage.entity';
//######################################################################################

//######################################################################################
export default class DataPersonLanguage implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(PersonLanguageEntity)
      .values([
        { personId: 6, languageId: 1, level: 'NATIVO' },
        { personId: 6, languageId: 2, level: 'AVANZADO' },
        { personId: 7, languageId: 1, level: 'NATIVO' },
        { personId: 7, languageId: 2, level: 'AVANZADO' },
        { personId: 7, languageId: 3, level: 'INTERMEDIO' },
        { personId: 8, languageId: 1, level: 'NATIVO' },
        { personId: 8, languageId: 2, level: 'INTERMEDIO' },
        { personId: 9, languageId: 1, level: 'NATIVO' },
        { personId: 9, languageId: 2, level: 'AVANZADO' },
        { personId: 10, languageId: 1, level: 'NATIVO' },
        { personId: 10, languageId: 2, level: 'AVANZADO' },
        { personId: 10, languageId: 3, level: 'INTERMEDIO' },
        { personId: 10, languageId: 4, level: 'INTERMEDIO' },
        { personId: 11, languageId: 2, level: 'NATIVO' },
        { personId: 11, languageId: 1, level: 'INTERMEDIO' },
        { personId: 12, languageId: 1, level: 'NATIVO' },
        { personId: 12, languageId: 2, level: 'INTERMEDIO' },
        { personId: 13, languageId: 1, level: 'NATIVO' },
        { personId: 13, languageId: 2, level: 'AVANZADO' },
        { personId: 14, languageId: 1, level: 'NATIVO' },
        { personId: 14, languageId: 2, level: 'AVANZADO' },
        { personId: 15, languageId: 1, level: 'NATIVO' },
        { personId: 15, languageId: 2, level: 'AVANZADO' },
      ])
      .execute();
  }
}
//######################################################################################
