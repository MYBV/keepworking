//######################################################################################
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnologyEntity } from 'src/database/entities/technology.entity';
import { TechnologyController } from './technology.controller';
import { TechnologyService } from './technology.service';
//######################################################################################

//######################################################################################
@Module({
  imports: [TypeOrmModule.forFeature([TechnologyEntity])],
  controllers: [TechnologyController],
  providers: [TechnologyService],
})
//######################################################################################

//######################################################################################
export class TechnologyModule {}
//######################################################################################
