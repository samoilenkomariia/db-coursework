import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/api/services/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  private include = {
    members: true,
  };

  async create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
      include: this.include,
    });
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: this.include,
    });
  }

  async updateById(id: number, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data,
      include: this.include,
    });
  }

  async findMany() {
    return this.prisma.user.findMany({
      include: this.include,
    });
  }

  async count(data: Prisma.UserCountArgs) {
    return this.prisma.user.count(data);
  }

  async deleteById(id: number) {
    return this.prisma.user.delete({
      where: { id },
      include: this.include,
    });
  }
}
