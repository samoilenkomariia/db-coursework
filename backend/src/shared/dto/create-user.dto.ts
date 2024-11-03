import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Name of the user', example: 'John Doe' })
  @IsString()
  @Length(1, 255)
  name: string;

  @ApiProperty({
    description: 'Email of the user',
    example: 'johndoe@example.com',
  })
  @IsEmail()
  @Length(1, 255)
  email: string;

  @ApiProperty({ description: 'Password for the user', example: 'P@ssw0rd!' })
  @IsString()
  @Length(8, 255)
  password: string;

  @ApiProperty({
    description: 'Profile picture URL of the user',
    example: 'https://example.com/profile.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(1, 255)
  profilePicture?: string;
}
