//#######################################################################
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class CreateCountryDTO {
  @ApiProperty({
    description: 'Nombre del país',
    type: String,
    maxLength: 100,
    example: 'Argentina',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Código telefónico de marcado internacional',
    type: String,
    maxLength: 10,
    example: '+54',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly phone_code: string;

  @ApiProperty({
    description: 'Abreviatura ISO del país',
    type: String,
    maxLength: 5,
    example: 'ARG',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly abreviatu: string;

  @ApiPropertyOptional({
    description: 'Path del icono del país',
    type: String,
    maxLength: 255,
    example: '/home/mipc/images/argentina.svg',
    nullable: true,
  })
  @IsString()
  icon?: string;
}
//#######################################################################
