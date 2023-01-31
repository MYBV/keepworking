//##############################################################################################
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
import { ModalityEntity } from 'src/database/entities/modality.entity';
import { CreateModalityDTO } from './dto/create-modality.dto';
import { UpdateModalityDTO } from './dto/update-modality.dto';
import { ModalityService } from './modality.service';
//##############################################################################################

//##############################################################################################
@ApiTags('Modalities')
@Controller('/modality')
export class ModalityController {
  constructor(private readonly modalityService: ModalityService) {}

  @Get()
  @ApiOperation({ summary: 'List All Actives Modalities' })
  getModalities(): Promise<ModalityEntity[]> {
    return this.modalityService.getModalities();
  }

  @Get(':id([0-9]+)')
  @ApiOperation({ summary: 'Consult a Modality' })
  getModalityId(@Param('id', ParseIntPipe) id: number) {
    return this.modalityService.getModalityId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a Modality' })
  createModality(@Body() newModality: CreateModalityDTO) {
    return this.modalityService.createModality(newModality);
  }

  @Patch(':id([0-9]+)')
  @ApiOperation({ summary: 'Update a description Modality' })
  updateModality(
    @Param('id', ParseIntPipe) id: number,
    @Body() modality: UpdateModalityDTO,
  ) {
    return this.modalityService.updateModality(id, modality);
  }

  @Delete(':id([0-9]+)')
  @ApiOperation({ summary: 'Delete a Modality' })
  deleteModality(@Param('id', ParseIntPipe) id: number) {
    return this.modalityService.deleteModality(id)
  }
}
//##############################################################################################
