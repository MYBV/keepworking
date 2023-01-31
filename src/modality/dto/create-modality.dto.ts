//#######################################################################
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class CreateModalityDTO {
  @ApiProperty({
    description: 'Descripción de la modalidad de trabajo',
    type: String,
    maxLength: 100,
    example: 'Híbrido',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
//#######################################################################
