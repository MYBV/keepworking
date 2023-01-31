//###############################################################################
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
//###############################################################################

//###############################################################################
ConfigModule.forRoot({
  envFilePath: ['develop.env'],
});
//###############################################################################
const configService = new ConfigService();
//###############################################################################

//###############################################################################
export const DataSourceConfig: DataSourceOptions = {
  type: 'mysql', // type database
  host: configService.get('DB_HOST'), //server  database
  port: configService.get('DB_PORT'), // port the database
  username: configService.get('DB_USER'), //user database
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [__dirname + '/**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../database/migrations/*.ts'],
  logging: true,
  synchronize: true,
  migrationsRun:false
};
//###############################################################################

//###############################################################################
export const AppDS = new DataSource(DataSourceConfig);
//###############################################################################
