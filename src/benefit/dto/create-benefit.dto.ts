//#######################################################################
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class CreateBenefitDTO {
  @ApiProperty({
    description: 'Título del beneficio',
    type: String,
    maxLength: 100,
    example: 'Guarderia',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'Descripcion del beneficio',
    type: String,
    maxLength: 10,
    example: 'Se subsidia o paga la matrícula de guardería',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiPropertyOptional({
    description: 'Path del icono del beneficio',
    type: String,
    maxLength: 255,
    example: '/home/mipc/images/lguarderia.svg',
    nullable: true,
  })
  @IsString()
  icon?: string;
}
//#######################################################################
