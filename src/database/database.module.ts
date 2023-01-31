//#######################################################################
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BenefitModule } from 'src/benefit/benefit.module';
import { CompanyModule } from 'src/company/company.module';
import { ContractModule } from 'src/contract/contract.module';
import { CountryModule } from 'src/country/country.module';
import { CurrencyModule } from 'src/currency/currency.module';
import { JobModule } from 'src/job/job.module';
import { LanguageModule } from 'src/language/language.module';
import { ModalityModule } from 'src/modality/modality.module';
import { ProfileModule } from 'src/profile/profile.module';
import { ProvinceModule } from 'src/province/province.module';
import { TechnologyModule } from 'src/technology/technology.module';
import { DataSource } from 'typeorm';
import { DataSourceConfig } from './data.source';
//#######################################################################

//#######################################################################
@Module({
  imports: [
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    ModalityModule,
    ContractModule,
    CurrencyModule,
    JobModule,
    TechnologyModule,
    LanguageModule,
    ProfileModule,
    BenefitModule,
    CompanyModule,
    CountryModule,
    ProvinceModule,
  ],
})
export class DatabaseModule {
  constructor(private readonly dataSource: DataSource) {}
}
//#######################################################################
