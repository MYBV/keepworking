import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BenefitEntity } from 'src/entities/benefit.entity';
import { CompanyEntity } from 'src/entities/company.entity';
import { ContractEntity } from 'src/entities/contract.entity';
import { CountryEntity } from 'src/entities/country.entity';
import { CurrencyEntity } from 'src/entities/currency.entity';
import { JobEntity } from 'src/entities/job.entity';
import { JobOfferEntity } from 'src/entities/joboffer.entity';
import { JobOfferBenefitEntity } from 'src/entities/jobofferbenefit.entity';
import { JobOfferCountryEntity } from 'src/entities/joboffercountry.entity';
import { JobOfferTecnologyEntity } from 'src/entities/joboffertecnology.entity';
import { LanguageEntity } from 'src/entities/language.entity';
import { ModalityEntity } from 'src/entities/modality.entity';
import { PersonEntity } from 'src/entities/person.entity';
import { PersonLanguageEntity } from 'src/entities/personlanguage.entity';
import { PersonTecnologyEntity } from 'src/entities/persontecnology.entity';
import { ProfileEntity } from 'src/entities/profile.entity';
import { TechnologyEntity } from 'src/entities/technology.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // type database
      host: 'localhost', //server  database
      port: 3306, // port the database
      username: 'desarrollo', //user database
      password: 'BerSys29*',
      database: 'keepworking',
      entities: [UserEntity, ProfileEntity, PersonEntity, CountryEntity, JobEntity, ModalityEntity, CurrencyEntity, BenefitEntity, LanguageEntity, CompanyEntity, TechnologyEntity, ContractEntity,PersonLanguageEntity, PersonTecnologyEntity, JobOfferEntity, JobOfferTecnologyEntity, JobOfferBenefitEntity, JobOfferCountryEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {
  constructor(private readonly connection: Connection) {}
}
