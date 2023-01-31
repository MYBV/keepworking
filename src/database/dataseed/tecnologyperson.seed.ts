//#############################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { PersonTecnologyEntity } from '../entities/persontecnology.entity';
//#############################################################################################

//#############################################################################################
export default class DataPersonTecnology implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(PersonTecnologyEntity)
      .values([
        { personId: 6, tecnologyId: 4, experience_years: 5 },
        { personId: 6, tecnologyId: 14, experience_years: 6 },
        { personId: 7, tecnologyId: 1, experience_years: 4 },
        { personId: 7, tecnologyId: 11, experience_years: 5 },
        { personId: 8, tecnologyId: 18, experience_years: 6 },
        { personId: 8, tecnologyId: 23, experience_years: 8 },
        { personId: 9, tecnologyId: 15, experience_years: 6 },
        { personId: 10, tecnologyId: 11, experience_years: 5 },
        { personId: 11, tecnologyId: 24, experience_years: 7 },
        { personId: 12, tecnologyId: 24, experience_years: 5 },
        { personId: 13, tecnologyId: 25, experience_years: 6 },
        { personId: 13, tecnologyId: 14, experience_years: 8 },
        { personId: 14, tecnologyId: 22, experience_years: 5 },
        { personId: 14, tecnologyId: 12, experience_years: 5 },
        { personId: 15, tecnologyId: 19, experience_years: 3 },
        { personId: 15, tecnologyId: 25, experience_years: 5 },
      ])
      .execute();
  }
}
//#############################################################################################
