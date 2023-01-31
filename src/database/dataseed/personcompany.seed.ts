//######################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { PersonCompanyEntity } from '../entities/personcompany.entity';
//######################################################################################

//######################################################################################
export default class DataPersonCompany implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(PersonCompanyEntity)
      .values([
        { personId: 1, companyId: 1 },
        { personId: 1, companyId: 2 },
        { personId: 2, companyId: 3 },
        { personId: 3, companyId: 4 },
        { personId: 3, companyId: 5 },
        { personId: 3, companyId: 6 },
        { personId: 4, companyId: 7 },
        { personId: 4, companyId: 2 },
        { personId: 4, companyId: 6 },
        { personId: 4, companyId: 5 },
        { personId: 5, companyId: 7 },
        { personId: 5, companyId: 5 },
      ])
      .execute();
  }
}
//######################################################################################
