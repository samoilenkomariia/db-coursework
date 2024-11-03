import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from 'src/shared/dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/shared/dto/update-user.dto';

@ApiTags('users')
@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved users' })
  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved the user' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiParam({ name: 'id', description: 'ID of the user', type: Number })
  @Get(':id')
  async get(@Param('id', ParseIntPipe) userId: number) {
    return await this.userService.get(userId);
  }

  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @Post()
  async create(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @ApiOperation({ summary: 'Update an existing user' })
  @ApiResponse({ status: 200, description: 'User successfully updated' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiParam({ name: 'id', description: 'ID of the user', type: Number })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) userId: number,
    @Body() dto: UpdateUserDto
  ) {
    return await this.userService.update(userId, dto);
  }

  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiResponse({ status: 200, description: 'User successfully deleted' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiParam({ name: 'id', description: 'ID of the user', type: Number })
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) userId: number) {
    return await this.userService.delete(userId);
  }
}
