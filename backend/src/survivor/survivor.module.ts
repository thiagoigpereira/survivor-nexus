import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { survivorProvider } from './survivor.providers';
import { SurvivorService } from './survivor.service';

@Module({
  imports: [DatabaseModule],
  providers: [...survivorProvider, SurvivorService]
})

export class SurvivorModule {}