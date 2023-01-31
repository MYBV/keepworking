//################################################################################
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractEntity } from 'src/database/entities/contract.entity';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
//################################################################################

//################################################################################
@Module({
  imports: [TypeOrmModule.forFeature([ContractEntity])],
  controllers: [ContractController],
  providers: [ContractService],
})
//################################################################################

//################################################################################
export class ContractModule {}
//################################################################################
