//###########################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { ContractEntity } from '../entities/contract.entity';
//###########################################################################################

//###########################################################################################
export default class DataContract implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(ContractEntity)
      .values([
        {name: "Temporal", description: "Contrato por tiempo definido"},
        {name: "Jornada Completa", description: "Contrato Full Time"},
        {name: "Media Jornada", description: "Contrato a medio tiempo"},
        {name: "Prácticas", description: "Contrato por aprendizaje"},
        {name: "Contrato por Obra", description: "Contrato por obra específica"},
      ])
      .execute();
  }
}
//###########################################################################################
