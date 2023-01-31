//######################################################################################
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModalityEntity } from 'src/database/entities/modality.entity';
import { ModalityController } from './modality.controller';
import { ModalityService } from './modality.service';
//######################################################################################

//######################################################################################
@Module({
  imports: [TypeOrmModule.forFeature([ModalityEntity])],
  controllers: [ModalityController],
  providers: [ModalityService]
})
//######################################################################################

//######################################################################################
export class ModalityModule {}
//######################################################################################
