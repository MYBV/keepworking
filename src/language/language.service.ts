//#####################################################################################################
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LanguageEntity } from 'src/database/entities/language.entity';
import { Repository } from 'typeorm';
import { CreateLanguageDTO } from './dto/create-language.dto';
import { UpdateLanguageDTO } from './dto/update-language.dto';
//#####################################################################################################

//#####################################################################################################
@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(LanguageEntity)
    private readonly languageRespository: Repository<LanguageEntity>,
  ) {}

  async getLanguageId(id: number) {
    let languageFound = await this.languageRespository.findOne({
      where: { id: id },
    });

    if (!languageFound)
      return new HttpException('Language not found', HttpStatus.NOT_FOUND);

    return languageFound;
  }

  async getLanguageName(name: string) {
    let languageFound = await this.languageRespository.findOne({
      where: { name: name },
    });

    if (!languageFound)
      return new HttpException('Language not found', HttpStatus.NOT_FOUND);

    return languageFound;
  }

  async createLanguage(language: CreateLanguageDTO) {
    let languageFound = await this.getLanguageName(language.name);

    if (languageFound.hasOwnProperty('id'))
      return new HttpException(
        'Language Name Duplicate',
        HttpStatus.BAD_REQUEST,
      );

    let newLanguage = this.languageRespository.create(language);
    return await this.languageRespository.save(newLanguage);
  }

  async getLanguages() {
    return this.languageRespository.find({
      where: { state: 'ACTIVO' },
    });
  }

  async updateLanguage(id: number, language: UpdateLanguageDTO) {
    let languageFound = await this.getLanguageId(id);
    if (!languageFound.hasOwnProperty('id')) return languageFound;

    let languageName = await this.getLanguageName(language.name);
    if (languageName[0].hasOwnProperty('id')) {
      if (languageName[0].id != id) {
        return new HttpException(
          'Language name Duplicate',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return await this.languageRespository.update({ id: id }, language);
  }

  async deleteLanguage(id: number) {
    let languageFound = await this.getLanguageId(id);

    if (!languageFound.hasOwnProperty('id')) return languageFound;

    return await this.languageRespository.update(
      { id: id },
      { state: 'INACTIVO' },
    );
  }
}
//#####################################################################################################
