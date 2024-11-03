import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { UserRepository } from 'src/database/repositories/user.repository';
import { CreateUserDto } from 'src/shared/dto/create-user.dto';
import { UpdateUserDto } from 'src/shared/dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: CreateUserDto) {
    try {
      const user = await this.userRepository.create(data);

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Data is already used');
        }
      }
    }
  }

  async get(id: number) {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async getAll() {
    const users = await this.userRepository.findMany();
    return users;
  }

  async update(id: number, body: UpdateUserDto) {
    const user = await this.userRepository.findById(id);
    if (!user) throw new NotFoundException('User not found');

    const updatedUser = await this.userRepository.updateById(id, body);

    return updatedUser;
  }

  async delete(id: number) {
    const user = await this.userRepository.findById(id);
    if (!user) throw new NotFoundException('User not found');

    return await this.userRepository.deleteById(id);
  }
}
