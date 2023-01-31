//##############################################################################################
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BenefitEntity } from 'src/database/entities/benefit.entity';
import { Repository } from 'typeorm';
import { CreateBenefitDTO } from './dto/create-benefit.dto';
import { UpdateBenefitDTO } from './dto/update-benefit.dto';
//##############################################################################################

//##############################################################################################
@Injectable()
export class BenefitService {
  constructor(
    @InjectRepository(BenefitEntity)
    private readonly benefitRepository: Repository<BenefitEntity>,
  ) {}

  async getBenefitId(id: number) {
    let benefitFound = await this.benefitRepository.findOne({
      where: { id: id },
    });

    if (!benefitFound)
      return new HttpException('Benefit not found', HttpStatus.NOT_FOUND);

    return benefitFound;
  }

  async getBenefitTitle(title: string) {
    let benefitFound = await this.benefitRepository.findOne({
      where: { title: title },
    });

    if (!benefitFound)
      return new HttpException('Benefit not found', HttpStatus.NOT_FOUND);

    return benefitFound;
  }

  async createBenefit(benefit: CreateBenefitDTO) {
    let benefitFound = await this.getBenefitTitle(benefit.title);
    if (benefitFound.hasOwnProperty('id'))
      return new HttpException(
        'Benefit Title Duplicate',
        HttpStatus.BAD_REQUEST,
      );

    let newBenefit = this.benefitRepository.create(benefit);
    return await this.benefitRepository.save(newBenefit);
  }

  getBenefits() {
    return this.benefitRepository.find({
      where: { state: 'ACTIVO' },
    });
  }

  async updateBenefit(id: number, benefit: UpdateBenefitDTO) {
    let benefitFound = await this.getBenefitId(id);
    if (!benefitFound.hasOwnProperty('id')) return benefitFound;

    let benefitTitle = await this.getBenefitTitle(benefit.title);
    if (benefitTitle[0].hasOwnProperty('id')) {
      if (benefitTitle[0].id != id) {
        return new HttpException(
          'Benefit Title Duplicate',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return await this.benefitRepository.update({ id: id }, benefit);
  }

  async deleteBenefit(id: number) {
    let benefitFound = await this.getBenefitId(id);
    if (!benefitFound.hasOwnProperty('id')) return benefitFound;

    return await this.benefitRepository.update(
      { id: id },
      { state: 'INACTIVO' },
    );
  }
}
//##############################################################################################
