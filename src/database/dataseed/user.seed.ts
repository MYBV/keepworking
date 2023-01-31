//###########################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { UserEntity } from '../entities/user.entity';
//###########################################################################################

//###########################################################################################
export default class DataUser implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values([
        {
          username: 'juanf@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 2,
          personId: 1,
        },
        {
          username: 'maria_a@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 2,
          personId: 2,
        },
        {
          username: 'luisp@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 2,
          personId: 3,
        },
        {
          username: 'marcosf@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 2,
          personId: 4,
        },
        {
          username: 'lourdes_r@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 2,
          personId: 5,
        },
        {
          username: 'jhonatanrios@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 1,
          personId: 6,
        },
        {
          username: 'luisnavarrete@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 1,
          personId: 7,
        },
        {
          username: 'williamleon@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 1,
          personId: 8,
        },
        {
          username: 'juanrivera@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 1,
          personId: 9,
        },
        {
          username: 'pablovillamil@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 1,
          personId: 10,
        },
        {
          username: 'jonathanwagner@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 1,
          personId: 11,
        },
        {
          username: 'camilobonilla@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 1,
          personId: 12,
        },
        {
          username: 'cesaralvarado@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 1,
          personId: 13,
        },
        {
          username: 'edilbrandomendoza@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 1,
          personId: 14,
        },
        {
          username: 'yefferbuitrago@correo.com',
          password:
            '$2b$10$VnIZpXKP4rhpVxzcI9jLBuswk8Z6vOVG.3zIws0KcMUTRfw4YKHTa',
          authStrategy: 'Linkedin',
          profileId: 1,
          personId: 15,
        },
      ])
      .execute();
  }
}
//###########################################################################################
