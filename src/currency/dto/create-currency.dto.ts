//#######################################################################
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class CreateCurrencyDTO {
  @ApiProperty({
    description: 'Nombre de la moneda',
    type: String,
    maxLength: 100,
    example: 'Libra Esterlina',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Simbolo de la moneda',
    type: String,
    maxLength: 10,
    example: 'GPB',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly symbol: string;

  @ApiPropertyOptional({
    description: 'Path del icono de la moneda',
    type: String,
    maxLength: 255,
    example: '/home/mipc/images/libesterlin.svg',
    nullable: true
  })
  @IsString()
  icon?: string;
}
//#######################################################################
