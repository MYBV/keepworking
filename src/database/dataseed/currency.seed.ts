//######################################################################################
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { CurrencyEntity } from '../entities/currency.entity';
//######################################################################################

//######################################################################################
export default class DataCurrency implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(CurrencyEntity)
      .values([
        { name: 'Dolar EEUU', symbol: 'USD' },
        { name: 'Peso Chileno', symbol: 'CLP' },
        { name: 'Peso Colombiano', symbol: 'COP' },
        { name: 'Peso Mexicano', symbol: 'MXN' },
        { name: 'Peso Argentino', symbol: 'ARS' },
        { name: 'Real Brasileño', symbol: 'BRL' },
        { name: 'Sol Peruano', symbol: 'PEN' },
        { name: 'Peso Uruguayo', symbol: 'UYU' },
        { name: 'Euro', symbol: 'EUR' },
      ])
      .execute();
  }
}
//######################################################################################
