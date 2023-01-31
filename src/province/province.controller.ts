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
import { ProvinceEntity } from 'src/database/entities/province.entity';
import { CreateProvinceDTO } from './dto/create-province.dto';
import { UpdateProvinceDTO } from './dto/update-province.dto';
import { ProvinceService } from './province.service';
//###########################################################################################

//###########################################################################################
@ApiTags('Provinces')
@Controller('/province')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Get()
  @ApiOperation({ summary: 'List All Actives Provinces' })
  getProvinces(): Promise<ProvinceEntity[]> {
    return this.provinceService.getProvinces();
  }

  @Get(':id([0-9]+)')
  @ApiOperation({ summary: 'Consult a Province' })
  getProvinceId(@Param('id', ParseIntPipe) id: number) {
    return this.provinceService.getProvinceId(id);
  }

  @Get('country/:countryId([0-9]+)')
  @ApiOperation({ summary: 'Consult a Provinces by CountryId' })
  getProvincesCountryId(@Param('countryId', ParseIntPipe) countryId: number) {
    return this.provinceService.getProvincesCountryId(countryId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a Province' })
  createProvince(@Body() newCProvince: CreateProvinceDTO) {
    return this.provinceService.createProvince(newCProvince);
  }

  @Patch(':id([0-9]+)')
  @ApiOperation({ summary: 'Update a Province' })
  updateProvince(
    @Param('id', ParseIntPipe) id: number,
    @Body() province: UpdateProvinceDTO,
  ) {
    return this.provinceService.updateProvince(id, province);
  }

  @Delete(':id([0-9]+)')
  @ApiOperation({ summary: 'Delete a Province' })
  deleteProvince(@Param('id', ParseIntPipe) id: number) {
    return this.provinceService.deleteProvince(id);
  }
}
//###########################################################################################
