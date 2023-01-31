//##############################################################################################
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProfileEntity } from 'src/database/entities/profile.entity';
import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';
//##############################################################################################

//##############################################################################################
@ApiTags('Profiles')
@Controller('/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @ApiOperation({ summary: 'List All Actives Profiles' })
  getProfiles(): Promise<ProfileEntity[]> {
    return this.profileService.getProfiles();
  }

  @Get(':id([0-9]+)')
  @ApiOperation({ summary: 'Consult a Profile' })
  getProfileId(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.getProfileId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a Profile' })
  createProfile(@Body() newProfile: CreateProfileDTO) {
    return this.profileService.createProfile(newProfile);
  }

  @Patch(':id([0-9]+)')
  @ApiOperation({ summary: 'Update a Profile' })
  updateProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() profile: UpdateProfileDTO,
  ) {
    return this.profileService.updateProfile(id, profile);
  }

  @Delete(':id([0-9]+)')
  @ApiOperation({ summary: 'Delete a Profile' })
  deleteProfile(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.deleteProfile(id);
  }
}
//##############################################################################################
