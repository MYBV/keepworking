//##############################################################################################
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryService } from 'src/country/country.service';
import { ProvinceEntity } from 'src/database/entities/province.entity';
import { Repository } from 'typeorm';
import { CreateProvinceDTO } from './dto/create-province.dto';
import { UpdateProvinceDTO } from './dto/update-province.dto';
//##############################################################################################

//##############################################################################################
@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(ProvinceEntity)
    private readonly provinceRepository: Repository<ProvinceEntity>,
    private readonly countryService: CountryService,
  ) {}

  async getProvinceId(id: number) {
    let provinceFound = await this.provinceRepository.findOne({
      where: { id: id },
    });

    if (!provinceFound)
      return new HttpException('Province not found', HttpStatus.NOT_FOUND);

    return provinceFound;
  }

  async getProvincesCountryId(countryId: number) {
    let provinceFound = await this.provinceRepository.find({
      where: { countryId: countryId, state: 'ACTIVO' },
    });

    return provinceFound;
  }

  async createProvince(province: CreateProvinceDTO) {
    let countryFound = await this.countryService.getCountryId(
      province.countryId,
    );
    if (!countryFound.hasOwnProperty('id'))
      return new HttpException('Country not Found', HttpStatus.BAD_REQUEST);

    let newProvince = this.provinceRepository.create(province);
    return await this.provinceRepository.save(newProvince);
  }

  getProvinces() {
    return this.provinceRepository.find({
      where: { state: 'ACTIVO' },
    });
  }

  async updateProvince(id: number, province: UpdateProvinceDTO) {
    let provinceFound = await this.getProvinceId(id);
    if (!provinceFound.hasOwnProperty('id')) return provinceFound;

    return await this.provinceRepository.update({ id: id }, province);
  }

  async deleteProvince(id: number) {
    let provinceFound = await this.getProvinceId(id);
    if (!provinceFound.hasOwnProperty('id')) return provinceFound;

    return await this.provinceRepository.update(
      { id: id },
      { state: 'INACTIVO' },
    );
  }
}
//##############################################################################################
