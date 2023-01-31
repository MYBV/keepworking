//#######################################################################
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class CreateProfileDTO {
  @ApiProperty({
    description: 'Nombre del Perfil',
    type: String,
    maxLength: 100,
    example: 'Operario',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
//#######################################################################
