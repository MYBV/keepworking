//#######################################################################
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class CreateContractDTO {
  @ApiProperty({
    description: 'Nombre del tipo de contrato',
    type: String,
    maxLength: 50,
    example: 'Part Time',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Descripción del tipo de contrato',
    type: String,
    maxLength: 150,
    example: 'Contrato a tiempo parcial',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
//#######################################################################
