//#####################################################################################################
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModalityEntity } from 'src/database/entities/modality.entity';
import { Repository } from 'typeorm';
import { CreateModalityDTO } from './dto/create-modality.dto';
import { UpdateModalityDTO } from './dto/update-modality.dto';
//#####################################################################################################

//#####################################################################################################
@Injectable()
export class ModalityService {
  constructor(
    @InjectRepository(ModalityEntity)
    private readonly modalityRespository: Repository<ModalityEntity>,
  ) {}

  async getModalityId(id: number) {
    let modalityFound = await this.modalityRespository.findOne({
      where: { id: id },
    });

    if (!modalityFound)
      return new HttpException('Modality not found', HttpStatus.NOT_FOUND);

    return modalityFound;
  }

  async getModalityDescription(description: string) {
    let modalityFound = await this.modalityRespository.findOne({
      where: { description: description },
    });

    if (!modalityFound)
      return new HttpException('Modality not found', HttpStatus.NOT_FOUND);

    return modalityFound;
  }

  async createModality(modality: CreateModalityDTO) {
    let modalityFound = await this.getModalityDescription(modality.description);

    if (modalityFound.hasOwnProperty('id'))
      return new HttpException(
        'Description Modality Duplicate',
        HttpStatus.BAD_REQUEST,
      );

    let newModality = this.modalityRespository.create(modality);
    return await this.modalityRespository.save(newModality);
  }

  async getModalities() {

    return this.modalityRespository.find({
      where: { state: 'ACTIVO' },
      relations: ['persons' ,'joboffers']
    })
  }

  async updateModality(id: number, modality: UpdateModalityDTO) {
    let modalityFound = await this.getModalityId(id);
    if (!modalityFound.hasOwnProperty('id')) return modalityFound;

    let modalityDescription = await this.getModalityDescription(
      modality.description,
    );
    if (modalityDescription[0].hasOwnProperty('id'))
    {
      if(modalityDescription[0].id != id)
      {
        return new HttpException(
          'Description Modality Duplicate',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
      

    return await this.modalityRespository.update({ id: id }, modality);
  }

  async deleteModality(id: number) {
    let modalityFound = await this.getModalityId(id);

    if (!modalityFound.hasOwnProperty('id')) return modalityFound;

    return await this.modalityRespository.update(
      { id: id },
      { state: 'INACTIVO' },
    );
  }
}
//#####################################################################################################
