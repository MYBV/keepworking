//################################################################################
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from 'src/country/country.module';
import { ProvinceEntity } from 'src/database/entities/province.entity';
import { ProvinceController } from './province.controller';
import { ProvinceService } from './province.service';
//################################################################################

//################################################################################
@Module({
  imports: [TypeOrmModule.forFeature([ProvinceEntity]), CountryModule],
  controllers: [ProvinceController],
  providers: [ProvinceService],
})
export class ProvinceModule {}
//################################################################################
