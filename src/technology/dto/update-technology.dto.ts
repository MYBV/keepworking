//#######################################################################
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class UpdateTechnologyDTO {
  @ApiProperty({
    description: 'Nombre de la tecnología',
    type: String,
    maxLength: 100,
    example: 'Ruby On Rails',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiPropertyOptional({
    description: 'Path del icono de la tecnología',
    type: String,
    maxLength: 255,
    example: '/home/mipc/images/ror.svg',
    nullable: true,
  })
  @IsString()
  icon?: string;
}
//#######################################################################
