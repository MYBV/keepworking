//###########################################################################################
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
import { CountryEntity } from 'src/database/entities/country.entity';
import { CountryService } from './country.service';
import { CreateCountryDTO } from './dto/create-country.dto';
import { UpdateCountryDTO } from './dto/update-country.dto';
//###########################################################################################

//###########################################################################################
@ApiTags('Countries')
@Controller('/country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  @ApiOperation({ summary: 'List All Actives Countries' })
  getCountries(): Promise<CountryEntity[]> {
    return this.countryService.getCountries();
  }

  @Get(':id([0-9]+)')
  @ApiOperation({ summary: 'Consult a Country' })
  getCountryId(@Param('id', ParseIntPipe) id: number) {
    return this.countryService.getCountryId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a Country' })
  createCountry(@Body() newCountry: CreateCountryDTO) {
    return this.countryService.createCountry(newCountry);
  }

  @Patch(':id([0-9]+)')
  @ApiOperation({ summary: 'Update a Country' })
  updateCountry(
    @Param('id', ParseIntPipe) id: number,
    @Body() country: UpdateCountryDTO,
  ) {
    return this.countryService.updateCountry(id, country);
  }

  @Delete(':id([0-9]+)')
  @ApiOperation({ summary: 'Delete a Country' })
  deleteCountry(@Param('id', ParseIntPipe) id: number) {
    return this.countryService.deleteCountry(id);
  }
}
//###########################################################################################
