import { Module } from '@nestjs/common';
import { AppService } from './api/services/app.service';
import { AppController } from './api/controllers/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
