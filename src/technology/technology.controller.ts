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
import { TechnologyEntity } from 'src/database/entities/technology.entity';
import { CreateTechnologyDTO } from './dto/create-technology.dto';
import { UpdateTechnologyDTO } from './dto/update-technology.dto';
import { TechnologyService } from './technology.service';
//##############################################################################################

//##############################################################################################
@ApiTags('Technologies')
@Controller('/technology')
export class TechnologyController {
  constructor(private readonly technologyService: TechnologyService) {}

  @Get()
  @ApiOperation({ summary: 'List All Actives Technologies' })
  getTechnologies(): Promise<TechnologyEntity[]> {
    return this.technologyService.getTechnologies();
  }

  @Get(':id([0-9]+)')
  @ApiOperation({ summary: 'Consult a Technology' })
  getTechnologyId(@Param('id', ParseIntPipe) id: number) {
    return this.technologyService.getTechnologyId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a Technology' })
  createTechnology(@Body() newTechnology: CreateTechnologyDTO) {
    return this.technologyService.createTechnology(newTechnology);
  }

  @Patch(':id([0-9]+)')
  @ApiOperation({ summary: 'Update a Technology name' })
  updateTechnology(
    @Param('id', ParseIntPipe) id: number,
    @Body() technology: UpdateTechnologyDTO,
  ) {
    return this.technologyService.updateTechnology(id, technology);
  }

  @Delete(':id([0-9]+)')
  @ApiOperation({ summary: 'Delete a Technology' })
  deleteTechnology(@Param('id', ParseIntPipe) id: number) {
    return this.technologyService.deleteTechnology(id);
  }
}
//##############################################################################################
