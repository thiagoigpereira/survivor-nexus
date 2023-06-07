import { DataSource } from 'typeorm';
import { Survivor } from './survivor.entity';

export const survivorProvider = [
  {
    provide: 'SURVIVOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Survivor),
    inject: ['DATA_SOURCE'],
  }
]