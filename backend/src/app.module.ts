import { Module } from '@nestjs/common';
import { AppService } from './api/services/app.service';
import { AppController } from './api/controllers/app.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
