//#####################################################################################################
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TechnologyEntity } from 'src/database/entities/technology.entity';
import { Repository } from 'typeorm';
import { CreateTechnologyDTO } from './dto/create-technology.dto';
import { UpdateTechnologyDTO } from './dto/update-technology.dto';
//#####################################################################################################

//#####################################################################################################
@Injectable()
export class TechnologyService {
  constructor(
    @InjectRepository(TechnologyEntity)
    private readonly technologyRespository: Repository<TechnologyEntity>,
  ) {}

  async getTechnologyId(id: number) {
    let technologyFound = await this.technologyRespository.findOne({
      where: { id: id },
    });

    if (!technologyFound)
      return new HttpException('Technology not found', HttpStatus.NOT_FOUND);

    return technologyFound;
  }

  async getTechnologyName(name: string) {
    let technologyFound = await this.technologyRespository.findOne({
      where: { name: name },
    });

    if (!technologyFound)
      return new HttpException('Technology not found', HttpStatus.NOT_FOUND);

    return technologyFound;
  }

  async createTechnology(technology: CreateTechnologyDTO) {
    let technologyFound = await this.getTechnologyName(technology.name);

    if (technologyFound.hasOwnProperty('id'))
      return new HttpException(
        'Technology Name Duplicate',
        HttpStatus.BAD_REQUEST,
      );

    let newTechnology = this.technologyRespository.create(technology);
    return await this.technologyRespository.save(newTechnology);
  }

  async getTechnologies() {
    return this.technologyRespository.find({
      where: { state: 'ACTIVO' }
    });
  }

  async updateTechnology(id: number, technology: UpdateTechnologyDTO) {
    let technologyFound = await this.getTechnologyId(id);
    if (!technologyFound.hasOwnProperty('id')) return technologyFound;

    let technologyName = await this.getTechnologyName(
      technology.name,
    );
    if (technologyName[0].hasOwnProperty('id')) {
      if (technologyName[0].id != id) {
        return new HttpException(
          'Technology name Duplicate',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return await this.technologyRespository.update({ id: id }, technology);
  }

  async deleteTechnology(id: number) {
    let technologyFound = await this.getTechnologyId(id);

    if (!technologyFound.hasOwnProperty('id')) return technologyFound;

    return await this.technologyRespository.update(
      { id: id },
      { state: 'INACTIVO' },
    );
  }
}
//#####################################################################################################
