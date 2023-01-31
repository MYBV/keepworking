//##############################################################################################
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContractEntity } from 'src/database/entities/contract.entity';
import { Repository } from 'typeorm';
import { CreateContractDTO } from './dto/create-contract.dto';
import { UpdateContractDTO } from './dto/update-contract.dto';
//##############################################################################################

//##############################################################################################
@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(ContractEntity)
    private readonly contractRepository: Repository<ContractEntity>,
  ) {}

  async getContratId(id: number) {
    let contractFound = await this.contractRepository.findOne({
      where: { id: id },
    });

    if (!contractFound)
      return new HttpException('Contract not found', HttpStatus.NOT_FOUND);

    return contractFound;
  }

  async getContractName(name: string) {
    let contractFound = await this.contractRepository.findOne({
      where: { name: name },
    });

    if (!contractFound)
      return new HttpException('Contract not found', HttpStatus.NOT_FOUND);

    return contractFound;
  }

  async createContract(contract: CreateContractDTO) {
    let contractFound = await this.getContractName(contract.name);
    if (contractFound.hasOwnProperty('id'))
      return new HttpException(
        'Name Contract type Duplicate',
        HttpStatus.BAD_REQUEST,
      );

    let newContract = this.contractRepository.create(contract);
    return await this.contractRepository.save(newContract);
  }

  getContracts() {
    return this.contractRepository.find({
      where: { state: 'ACTIVO' },
    });
  }

  async updateContract(id: number, contract: UpdateContractDTO) {
    let contractFound = await this.getContratId(id);
    if (!contractFound.hasOwnProperty('id')) return contractFound;

    let contractName = await this.getContractName(contract.name);
    if (contractName.hasOwnProperty('id'))
    {
      if(contractName[0].id != id)
      {
        return new HttpException(
          'Name Contract type Duplicate',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return await this.contractRepository.update({ id: id }, contract);
  }

  async deleteContract(id: number) {
    let contractFound = await this.getContratId(id);

    if (!contractFound.hasOwnProperty('id')) return contractFound;

    return await this.contractRepository.update(
      { id: id },
      { state: 'INACTIVO' },
    );
  }
}
//##############################################################################################
