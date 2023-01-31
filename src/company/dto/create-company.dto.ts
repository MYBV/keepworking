//#######################################################################
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class CreateCompanyDTO {
  @ApiProperty({
    description: 'Nombre de la Empresa',
    type: String,
    maxLength: 100,
    example: 'Sourcing Devs',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Nombre Comercial de la empresa',
    type: String,
    maxLength: 200,
    example: 'Sourcing Devs SAS',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly business_name: string;

  @ApiProperty({
    description: 'Cuil Identificador de la empresa',
    type: String,
    maxLength: 50,
    example: 'SAS547812069-7',
    required: true,
  })
  @IsString()
  cuil: string;
}
//#######################################################################
