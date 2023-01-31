//###########################################################################################
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrencyEntity } from 'src/database/entities/currency.entity';
import { CurrencyService } from './currency.service';
import { CreateCurrencyDTO } from './dto/create-currency.dto';
import { UpdateCurrencyDTO } from './dto/update-currency.dto';
//###########################################################################################

//###########################################################################################
@ApiTags('Currencies')
@Controller('/currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  @ApiOperation({ summary: 'List All Actives Currencies' })
  getCurrencies(): Promise<CurrencyEntity[]> {
    return this.currencyService.getCurrencies();
  }

  @Get(':id([0-9]+)')
  @ApiOperation({ summary: 'Consult a Currency' })
  getCurrencyId(@Param('id', ParseIntPipe) id: number) {
    return this.currencyService.getCurrencyId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a Currency' })
  createCurrency(@Body() newCurrency: CreateCurrencyDTO) {
    return this.currencyService.createCurrency(newCurrency);
  }

  @Patch(':id([0-9]+)')
  @ApiOperation({ summary: 'Update a Currency' })
  updateCurrency(
    @Param('id', ParseIntPipe) id: number,
    @Body() currency: UpdateCurrencyDTO,
  ) {
    return this.currencyService.updateCurrency(id, currency);
  }

  @Delete(':id([0-9]+)')
  @ApiOperation({ summary: 'Delete a Currency' })
  deleteCurrency(@Param('id', ParseIntPipe) id: number) {
    return this.currencyService.deleteCurrency(id);
  }
}
//###########################################################################################
