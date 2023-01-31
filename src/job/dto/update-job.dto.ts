//#######################################################################
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
//#######################################################################

//#######################################################################
export class UpdateJobDTO {
  @ApiProperty({
    description: 'Descripción puesto de trabajo',
    type: String,
    maxLength: 100,
    example: 'Designer Mobile',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
//#######################################################################
