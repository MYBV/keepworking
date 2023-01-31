//#######################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { JobEntity } from '../entities/job.entity';
//#######################################################################################

//#######################################################################################
export default class DataJob implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(JobEntity)
      .values([
        { description: 'Fronted' },
        { description: 'Backend' },
        { description: 'Fullstack' },
        { description: 'Mobile' },
        { description: 'Data Science' },
        { description: 'Data Analytics' },
        { description: 'Data Engineer' },
        { description: 'Diseño UX/UI' },
        { description: 'Soporte al Cliente' },
        { description: 'Marketing Digital' },
        { description: 'DevOps' },
        { description: 'SysAdmin' },
        { description: 'QA' },
        { description: 'Machine Learning' },
        { description: 'Ciber Seguridad' },
      ])
      .execute();
  }
}
//#######################################################################################
