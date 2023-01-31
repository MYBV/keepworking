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
import { LanguageEntity } from 'src/database/entities/language.entity';
import { CreateLanguageDTO } from './dto/create-language.dto';
import { UpdateLanguageDTO } from './dto/update-language.dto';
import { LanguageService } from './language.service';
//##############################################################################################

//##############################################################################################
@ApiTags('Languages')
@Controller('/language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  @ApiOperation({ summary: 'List All Actives Languages' })
  getLanguages(): Promise<LanguageEntity[]> {
    return this.languageService.getLanguages();
  }

  @Get(':id([0-9]+)')
  @ApiOperation({ summary: 'Consult a Technology' })
  getLanguageId(@Param('id', ParseIntPipe) id: number) {
    return this.languageService.getLanguageId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a Language' })
  createLanguage(@Body() newLanguage: CreateLanguageDTO) {
    return this.languageService.createLanguage(newLanguage);
  }

  @Patch(':id([0-9]+)')
  @ApiOperation({ summary: 'Update a Language name' })
  updateLanguage(
    @Param('id', ParseIntPipe) id: number,
    @Body() language: UpdateLanguageDTO,
  ) {
    return this.languageService.updateLanguage(id, language);
  }

  @Delete(':id([0-9]+)')
  @ApiOperation({ summary: 'Delete a Language' })
  deleteLanguage(@Param('id', ParseIntPipe) id: number) {
    return this.languageService.deleteLanguage(id);
  }
}
//##############################################################################################
