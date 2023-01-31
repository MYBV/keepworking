//#######################################################################
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class UpdateLanguageDTO {
  @ApiProperty({
    description: 'Nombre del Idioma',
    type: String,
    maxLength: 50,
    example: 'Japonés',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
//#######################################################################
