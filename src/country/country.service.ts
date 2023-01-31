//##############################################################################################
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from 'src/database/entities/country.entity';
import { Repository } from 'typeorm';
import { CreateCountryDTO } from './dto/create-country.dto';
import { UpdateCountryDTO } from './dto/update-country.dto';
//##############################################################################################

//##############################################################################################
@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>,
  ) {}

  async getCountryId(id: number) {
    let countryFound = await this.countryRepository.findOne({
      where: { id: id },
    });

    if (!countryFound)
      return new HttpException('Country not found', HttpStatus.NOT_FOUND);

    return countryFound;
  }

  async getCoutryName(name: string) {
    let countryFound = await this.countryRepository.findOne({
      where: { name: name },
    });

    if (!countryFound)
      return new HttpException('Country not found', HttpStatus.NOT_FOUND);

    return countryFound;
  }

  async createCountry(country: CreateCountryDTO) {
    let countryFound = await this.getCoutryName(country.name);
    if (countryFound.hasOwnProperty('id'))
      return new HttpException(
        'Country Name Duplicate',
        HttpStatus.BAD_REQUEST,
      );

    let newCountry = this.countryRepository.create(country);
    return await this.countryRepository.save(newCountry);
  }

  getCountries() {
    return this.countryRepository.find({
      where: { state: 'ACTIVO' },
    });
  }

  async updateCountry(id: number, country: UpdateCountryDTO) {
    let countryFound = await this.getCountryId(id);
    if (!countryFound.hasOwnProperty('id')) return countryFound;

    let countryName = await this.getCoutryName(country.name);
    if (countryName[0].hasOwnProperty('id')) {
      if (countryName[0].id != id) {
        return new HttpException(
          'Country name Duplicate',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return await this.countryRepository.update({ id: id }, country);
  }

  async deleteCountry(id: number) {
    let countryFound = await this.getCountryId(id);
    if (!countryFound.hasOwnProperty('id')) return countryFound;

    return await this.countryRepository.update(
      { id: id },
      { state: 'INACTIVO' },
    );
  }
}
//##############################################################################################
