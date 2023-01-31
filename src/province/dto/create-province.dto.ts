//#######################################################################
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class CreateProvinceDTO {
  @ApiProperty({
    description: 'Nombre de la provincia',
    type: String,
    maxLength: 255,
    example: 'Misiones',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Id del País',
    type: Number,
    example: 11,
    required: true,
  })
  @IsNotEmpty()
  @IsInt()
  readonly countryId: number;
}
//#######################################################################
