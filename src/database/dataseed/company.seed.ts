//#########################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { CompanyEntity } from '../entities/company.entity';
//#########################################################################################

//#########################################################################################
export default class DataCompany implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(CompanyEntity)
      .values([
        {
          name: 'Rappi Dev',
          business_name: 'Rappi Dev SAS',
          cuil: 'SAS1234567-2',
        },
        {
          name: 'Factory Soft',
          business_name: 'Factory Soft SA',
          cuil: 'SA0365897-3',
        },
        {
          name: 'Dev Stock',
          business_name: 'Dev Stock CA',
          cuil: 'CA3287460-8',
        },
        {
          name: 'Car Drive',
          business_name: 'Car Drive SAS',
          cuil: 'SAS1450367-6',
        },
        { name: 'Full Dev', business_name: 'Full Dev SA', cuil: 'SA3657841-0' },
        {
          name: 'Op Logictis',
          business_name: 'Op Logictis CA',
          cuil: 'CA1203478-8',
        },
        {
          name: 'Online Jobbers',
          business_name: 'Online Jobbers SAS',
          cuil: 'SAS0214796-9',
        },
      ])
      .execute();
  }
}
//#########################################################################################
