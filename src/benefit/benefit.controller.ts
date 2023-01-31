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
import { BenefitEntity } from 'src/database/entities/benefit.entity';
import { BenefitService } from './benefit.service';
import { CreateBenefitDTO } from './dto/create-benefit.dto';
import { UpdateBenefitDTO } from './dto/update-benefit.dto';
//###########################################################################################

//###########################################################################################
@ApiTags('Benefits')
@Controller('/benefit')
export class BenefitController {
  constructor(private readonly benefitService: BenefitService) {}

  @Get()
  @ApiOperation({ summary: 'List All Actives Benefits' })
  getBenefits(): Promise<BenefitEntity[]> {
    return this.benefitService.getBenefits();
  }

  @Get(':id([0-9]+)')
  @ApiOperation({ summary: 'Consult a Benefit' })
  getBenefitId(@Param('id', ParseIntPipe) id: number) {
    return this.benefitService.getBenefitId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a Benefit' })
  createBenefit(@Body() newBenefit: CreateBenefitDTO) {
    return this.benefitService.createBenefit(newBenefit);
  }

  @Patch(':id([0-9]+)')
  @ApiOperation({ summary: 'Update a Benefit' })
  updateBenefit(
    @Param('id', ParseIntPipe) id: number,
    @Body() benefit: UpdateBenefitDTO,
  ) {
    return this.benefitService.updateBenefit(id, benefit);
  }

  @Delete(':id([0-9]+)')
  @ApiOperation({ summary: 'Delete a Benefit' })
  deleteBenefit(@Param('id', ParseIntPipe) id: number) {
    return this.benefitService.deleteBenefit(id);
  }
}
//###########################################################################################
