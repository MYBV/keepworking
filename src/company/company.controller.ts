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
import { CompanyEntity } from 'src/database/entities/company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDTO } from './dto/update-company.dto';
//###########################################################################################

//###########################################################################################
@ApiTags('Companies')
@Controller('/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  @ApiOperation({ summary: 'List All Actives Companies' })
  getCompanies(): Promise<CompanyEntity[]> {
    return this.companyService.getCompanies();
  }

  @Get(':id([0-9]+)')
  @ApiOperation({ summary: 'Consult a Company' })
  getCompanyId(@Param('id', ParseIntPipe) id: number) {
    return this.companyService.getCompanyId(id);
  }

  @Get('cuil/:cuilcp')
  @ApiOperation({ summary: 'Consult a company by cuil' })
  getCompanyCuil(@Param('cuilcp') cuilcp: string) {
    return this.companyService.getCompanyCuil(cuilcp);
  }

  @Post()
  @ApiOperation({ summary: 'Create a Company' })
  createCompany(@Body() newCompany: CreateCompanyDTO) {
    return this.companyService.createCompany(newCompany);
  }

  @Patch(':id([0-9]+)')
  @ApiOperation({ summary: 'Update a Company' })
  updateBCompany(
    @Param('id', ParseIntPipe) id: number,
    @Body() company: UpdateCompanyDTO,
  ) {
    return this.companyService.updateBCompany(id, company);
  }

  @Delete(':id([0-9]+)')
  @ApiOperation({ summary: 'Delete a Company' })
  deleteCompany(@Param('id', ParseIntPipe) id: number) {
    return this.companyService.deleteCompany(id);
  }
}
//###########################################################################################
