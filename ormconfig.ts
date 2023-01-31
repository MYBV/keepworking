//###############################################################################
import { ConfigModule, ConfigService } from '@nestjs/config';
//###############################################################################

//###############################################################################
ConfigModule.forRoot({
  envFilePath: ['develop.env'],
});
//###############################################################################
const configService = new ConfigService();
//###############################################################################

//###############################################################################
module.exports = {
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  synchronize: false,
  logging: true,
  entities: ['src/database/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  seeds: ['src/database/dataseed/*.ts']
};
//###############################################################################
