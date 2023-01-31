//#######################################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { PersonEntity } from '../entities/person.entity';
//#######################################################################################################

//#######################################################################################################
export default class DataPersons implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(PersonEntity)
      .values([
        {
          firstname: 'Juan',
          lastname: 'Fuentes',
          email_address: 'juanf@correo.com',
          phone_number: '+573116528746',
          linkedin_profile: 'https://www.linkedin.com/in/juanfuentes/',
        },
        {
          firstname: 'Maria',
          lastname: 'Andrade',
          email_address: 'maria_a@correo.com',
          phone_number: '+526658743201',
          linkedin_profile: 'https://www.linkedin.com/in/maria_andrade/',
        },
        {
          firstname: 'Luis',
          lastname: 'Pérez',
          email_address: 'luisp@correo.com',
          phone_number: '+518654723198',
          linkedin_profile: 'https://www.linkedin.com/in/luisperez/',
        },
        {
          firstname: 'Marcos',
          lastname: 'Finol',
          email_address: 'marcosf@correo.com',
          phone_number: '+543657841209',
          linkedin_profile: 'https://www.linkedin.com/in/marcosfino/',
        },
        {
          firstname: 'Lourdes',
          lastname: 'Rodríguez',
          email_address: 'lourdes_r@correo.com',
          phone_number: '+584147896523',
          linkedin_profile: 'https://www.linkedin.com/in/lourdes_rodriguez/',
        },
        {
          firstname: 'Jhonatan',
          lastname: 'Ríos',
          email_address: 'jhonatanrios@correo.com',
          phone_number: '+543256874123',
          linkedin_profile: 'https://www.linkedin.com/in/jhonatanrios/',
          modalityId: 1,
          birthdate: '1995-08-17',
          jobId: 1,
          experience_years: 7,
          countryId: 11,
        },
        {
          firstname: 'Luis',
          lastname: 'Navarrete',
          email_address: 'luisnavarrete@correo.com',
          phone_number: '+572587469320',
          linkedin_profile: 'https://www.linkedin.com/in/luisnavarrete/',
          modalityId: 1,
          birthdate: '1998-07-26',
          jobId: 2,
          experience_years: 6,
          countryId: 42,
        },
        {
          firstname: 'William',
          lastname: 'León',
          email_address: 'williamleon@correo.com',
          phone_number: '+513201457894',
          linkedin_profile: 'https://www.linkedin.com/in/williamleon/',
          modalityId: 2,
          birthdate: '1999-06-07',
          jobId: 3,
          experience_years: 5,
          countryId: 151,
        },
        {
          firstname: 'Juan',
          lastname: 'Rivera',
          email_address: 'juanrivera@correo.com',
          phone_number: '+584165879230',
          linkedin_profile: 'https://www.linkedin.com/in/juanrivera/',
          modalityId: 2,
          birthdate: '1987-05-20',
          jobId: 4,
          experience_years: 8,
          countryId: 207,
        },
        {
          firstname: 'Pablo',
          lastname: 'Villamil',
          email_address: 'pablovillamil@correo.com',
          phone_number: '+573658749320',
          linkedin_profile: 'https://www.linkedin.com/in/pablovillamil/',
          modalityId: 1,
          birthdate: '1985-02-21',
          jobId: 8,
          experience_years: 5,
          countryId: 42,
        },
        {
          firstname: 'Jonathan',
          lastname: 'Wagner',
          email_address: 'jonathanwagner@correo.com',
          phone_number: '+542105478936',
          linkedin_profile: 'https://www.linkedin.com/in/jonathanwagner/',
          modalityId: 2,
          birthdate: '1984-03-14',
          jobId: 5,
          experience_years: 7,
          countryId: 11,
        },
        {
          firstname: 'Camilo',
          lastname: 'Bonilla',
          email_address: 'camilobonilla@correo.com',
          phone_number: '+584125789036',
          linkedin_profile: 'https://www.linkedin.com/in/camilobonilla/',
          modalityId: 1,
          birthdate: '1990-12-15',
          jobId: 6,
          experience_years: 6,
          countryId: 207,
        },
        {
          firstname: 'Cesar',
          lastname: 'Alvarado',
          email_address: 'cesaralvarado@correo.com',
          phone_number: '+513689520147',
          linkedin_profile: 'https://www.linkedin.com/in/cesaralvarado/',
          modalityId: 1,
          birthdate: '1992-02-04',
          jobId: 1,
          experience_years: 9,
          countryId: 151,
        },
        {
          firstname: 'Edilbrando',
          lastname: 'Mendoza',
          email_address: 'edilbrandomendoza@correo.com',
          phone_number: '+513021457896',
          linkedin_profile: 'https://www.linkedin.com/in/edilbrandomendoza/',
          modalityId: 2,
          birthdate: '1996-08-08',
          jobId: 2,
          experience_years: 2,
          countryId: 151,
        },
        {
          firstname: 'Yeffer',
          lastname: 'Buitrago',
          email_address: 'yefferbuitrago@correo.com',
          phone_number: '+576325870149',
          linkedin_profile: 'https://www.linkedin.com/in/yefferbuitrago/',
          modalityId: 1,
          birthdate: '1991-07-16',
          jobId: 3,
          experience_years: 7,
          countryId: 42,
        },
      ])
      .execute();
  }
}
//#######################################################################################################
