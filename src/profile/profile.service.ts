//#####################################################################################################
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from 'src/database/entities/profile.entity';
import { Repository } from 'typeorm';
import { CreateProfileDTO } from './dto/create-profile.dto';
import { UpdateProfileDTO } from './dto/update-profile.dto';
//#####################################################################################################

//#####################################################################################################
@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRespository: Repository<ProfileEntity>,
  ) {}

  async getProfileId(id: number) {
    let profileFound = await this.profileRespository.findOne({
      where: { id: id },
    });

    if (!profileFound)
      return new HttpException('Profile not found', HttpStatus.NOT_FOUND);

    return profileFound;
  }

  async getProfileDescription(description: string) {
    let profileFound = await this.profileRespository.findOne({
      where: { description: description },
    });

    if (!profileFound)
      return new HttpException('Profile not found', HttpStatus.NOT_FOUND);

    return profileFound;
  }

  async createProfile(profile: CreateProfileDTO) {
    let profileFound = await this.getProfileDescription(profile.description);

    if (profileFound.hasOwnProperty('id'))
      return new HttpException(
        'Profile Description Duplicate',
        HttpStatus.BAD_REQUEST,
      );

    let newProfile = this.profileRespository.create(profile);
    return await this.profileRespository.save(newProfile);
  }

  async getProfiles() {
    return this.profileRespository.find({
      where: { state: 'ACTIVO' },
    });
  }

  async updateProfile(id: number, profile: UpdateProfileDTO) {
    let profileFound = await this.getProfileId(id);
    if (!profileFound.hasOwnProperty('id')) return profileFound;

    let prfileDescription = await this.getProfileDescription(
      profile.description,
    );
    if (prfileDescription[0].hasOwnProperty('id')) {
      if (prfileDescription[0].id != id) {
        return new HttpException(
          'Profile description Duplicate',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return await this.profileRespository.update({ id: id }, profile);
  }

  async deleteProfile(id: number) {
    let profileFound = await this.getProfileId(id);

    if (!profileFound.hasOwnProperty('id')) return profileFound;

    return await this.profileRespository.update(
      { id: id },
      { state: 'INACTIVO' },
    );
  }
}
//#####################################################################################################
