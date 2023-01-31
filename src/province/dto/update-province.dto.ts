//#######################################################################
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class UpdateProvinceDTO {
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
}
//#######################################################################
