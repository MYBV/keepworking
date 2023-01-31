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
import { ContractEntity } from 'src/database/entities/contract.entity';
import { ContractService } from './contract.service';
import { CreateContractDTO } from './dto/create-contract.dto';
import { UpdateContractDTO } from './dto/update-contract.dto';
//###########################################################################################

//###########################################################################################
@ApiTags('Contracts')
@Controller('/contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Get()
  @ApiOperation({ summary: 'List All Actives Contracts types' })
  getContracts(): Promise<ContractEntity[]> {
    return this.contractService.getContracts();
  }

  @Get(':id([0-9]+)')
  @ApiOperation({ summary: 'Consult a Contract type' })
  getContratId(@Param('id', ParseIntPipe) id: number) {
    return this.contractService.getContratId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a Contract type' })
  createContract(@Body() newContract: CreateContractDTO) {
    return this.contractService.createContract(newContract);
  }

  @Patch(':id([0-9]+)')
  @ApiOperation({ summary: 'Update a Contract type' })
  updateContract(
    @Param('id', ParseIntPipe) id: number,
    @Body() contract: UpdateContractDTO,
  ) {
    return this.contractService.updateContract(id, contract);
  }

  @Delete(':id([0-9]+)')
  @ApiOperation({ summary: 'Delete a Contract type' })
  deleteContract(@Param('id', ParseIntPipe) id: number) {
    return this.contractService.deleteContract(id);
  }
}
//###########################################################################################
