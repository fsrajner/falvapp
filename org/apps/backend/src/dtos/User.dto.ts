import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';

export class UserSignUpDto {
    @ApiProperty({ type: 'string', required: false })
    name: string;
    @ApiProperty({ type: 'string', required: false })
    email: string;
  }