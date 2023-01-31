//##############################################################################################
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/database/entities/company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDTO } from './dto/update-company.dto';
//##############################################################################################

//##############################################################################################
@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {}

  async getCompanyId(id: number) {
    let companyFound = await this.companyRepository.findOne({
      where: { id: id },
    });

    if (!companyFound)
      return new HttpException('Company not found', HttpStatus.NOT_FOUND);

    return companyFound;
  }

  async getCompanyCuil(cuil: string) {
    let companyFound = await this.companyRepository.findOne({
      where: { cuil: cuil },
    });

    if (!companyFound)
      return new HttpException('Company not found', HttpStatus.NOT_FOUND);

    return companyFound;
  }

  async createCompany(company: CreateCompanyDTO) {
    let companyFound = await this.getCompanyCuil(company.cuil);
    if (companyFound.hasOwnProperty('id'))
      return new HttpException(
        'Company Cuil Duplicate',
        HttpStatus.BAD_REQUEST,
      );

    let newCompany = this.companyRepository.create(company);
    return await this.companyRepository.save(newCompany);
  }

  getCompanies() {
    return this.companyRepository.find({
      where: { state: 'ACTIVO' },
    });
  }

  async updateBCompany(id: number, company: UpdateCompanyDTO) {
    let companyFound = await this.getCompanyId(id);
    if (!companyFound.hasOwnProperty('id')) return companyFound;

    let companyCuil = await this.getCompanyCuil(companyFound[0].cuil);
    if (companyCuil[0].hasOwnProperty('id')) {
      if (companyCuil[0].id != id) {
        return new HttpException(
          'Company Cuil Duplicate',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return await this.companyRepository.update({ id: id }, company);
  }

  async deleteCompany(id: number) {
    let companyFound = await this.getCompanyId(id);
    if (!companyFound.hasOwnProperty('id')) return companyFound;

    return await this.companyRepository.update(
      { id: id },
      { state: 'INACTIVO' },
    );
  }
}
//##############################################################################################
