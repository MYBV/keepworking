//##############################################################################################
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrencyEntity } from 'src/database/entities/currency.entity';
import { Repository } from 'typeorm';
import { CreateCurrencyDTO } from './dto/create-currency.dto';
import { UpdateCurrencyDTO } from './dto/update-currency.dto';
//##############################################################################################

//##############################################################################################
@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(CurrencyEntity)
    private readonly currencyRepository: Repository<CurrencyEntity>,
  ) {}

  async getCurrencyId(id: number) {
    let currencyFound = await this.currencyRepository.findOne({
      where: { id: id },
    });

    if (!currencyFound)
      return new HttpException('Currency not found', HttpStatus.NOT_FOUND);

    return currencyFound;
  }

  async getCurrencyName(name: string) {
    let currencyFound = await this.currencyRepository.findOne({
      where: { name: name },
    });

    if (!currencyFound)
      return new HttpException('Currency not found', HttpStatus.NOT_FOUND);

    return currencyFound;
  }

  async createCurrency(currency: CreateCurrencyDTO) {
    let currencyFound = await this.getCurrencyName(currency.name);
    if (currencyFound.hasOwnProperty('id'))
      return new HttpException(
        'Name Currency Duplicate',
        HttpStatus.BAD_REQUEST,
      );

    let newCurrency = this.currencyRepository.create(currency);
    return await this.currencyRepository.save(newCurrency);
  }

  getCurrencies() {
    return this.currencyRepository.find({
      where: { state: 'ACTIVO' },
    });
  }

  async updateCurrency(id: number, currency: UpdateCurrencyDTO) {
    let currencyFound = await this.getCurrencyId(id);
    if (!currencyFound.hasOwnProperty('id')) return currencyFound;

    let currencyName = await this.getCurrencyName(currency.name);
    if (currencyName[0].hasOwnProperty('id')) 
    {
      if(currencyName[0].id != id)
      {
        return new HttpException(
          'Name Currency Duplicate',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return await this.currencyRepository.update({ id: id }, currency);
  }

  async deleteCurrency(id: number) {
    let currencyFound = await this.getCurrencyId(id);

    if (!currencyFound.hasOwnProperty('id')) return currencyFound;

    return await this.currencyRepository.update(
      { id: id },
      { state: 'INACTIVO' },
    );
  }
}
//##############################################################################################
