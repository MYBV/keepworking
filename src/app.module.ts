//#######################################################################
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProvinceModule } from './province/province.module';
//#######################################################################

//#######################################################################
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['develop.env'],
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//#######################################################################
