//################################################################################
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BenefitEntity } from 'src/database/entities/benefit.entity';
import { BenefitController } from './benefit.controller';
import { BenefitService } from './benefit.service';
//################################################################################

//################################################################################
@Module({
  imports: [TypeOrmModule.forFeature([BenefitEntity])],
  controllers: [BenefitController],
  providers: [BenefitService],
})
//################################################################################

//################################################################################
export class BenefitModule {}
//################################################################################
