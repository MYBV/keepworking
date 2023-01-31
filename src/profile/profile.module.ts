//######################################################################################
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from 'src/database/entities/profile.entity';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
//######################################################################################

//######################################################################################
@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
//######################################################################################

//######################################################################################
export class ProfileModule {}
//######################################################################################
