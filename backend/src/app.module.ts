import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survivor } from './survivor/survivor.entity';
import { SurvivorController } from './survivor/survivor.controller';
import { SurvivorService } from './survivor/survivor.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cvirus',
      entities: [Survivor],
      synchronize: true,
      extra: {
        connectionLimit: 10,
      },
      retryAttempts: 5,
      retryDelay: 1000,
    }),
    TypeOrmModule.forFeature([Survivor]),
  ],
  controllers: [SurvivorController],
  providers: [SurvivorService],
})
export class AppModule {}
