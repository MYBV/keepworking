//#############################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { TechnologyEntity } from '../entities/technology.entity';
//#############################################################################################

//#############################################################################################
export default class DataTecnology implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(TechnologyEntity)
      .values([
        { name: '.Net' },
        { name: 'Agile' },
        { name: 'Android' },
        { name: 'Angular' },
        { name: 'API' },
        { name: 'AWS' },
        { name: 'Azure' },
        { name: 'Cloud' },
        { name: 'Cloud Computing' },
        { name: 'Compose' },
        { name: 'CSS' },
        { name: 'Express' },
        { name: 'Git' },
        { name: 'HTML' },
        { name: 'iOS' },
        { name: 'Java' },
        { name: 'Javascript' },
        { name: 'Laravel' },
        { name: 'MERN' },
        { name: 'Nestjs' },
        { name: 'Nextjs' },
        { name: 'Nodejs' },
        { name: 'PHP' },
        { name: 'Python' },
        { name: 'React' },
        { name: 'React Native' },
        { name: 'Scrum' },
        { name: 'SQL' },
        { name: 'Swift' },
        { name: 'GraphQL' },
        { name: 'Google Cloud' },
        { name: 'MySQL' },
        { name: 'MariaDB' },
        { name: 'Postgres' },
        { name: 'MongoDB' },
        { name: 'Redis' },
      ])
      .execute();
  }
}
//#############################################################################################
