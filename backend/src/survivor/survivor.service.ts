import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survivor } from './survivor.entity';

@Injectable()
export class SurvivorService {
  constructor(
    @InjectRepository(Survivor)
    private survivorRepository: Repository<Survivor>,
  ) {}

  async findAll(): Promise<Survivor[]> {
    return this.survivorRepository.find();
  }

  async findById(id: number): Promise<Survivor> {
    return this.survivorRepository.findOneBy({
      id: id,
    });
  }

  async create(survivor: Survivor): Promise<Survivor> {
    return this.survivorRepository.save(survivor);
  }

  async update(id: number, survivor: Survivor): Promise<Survivor> {
    await this.survivorRepository.update(id, survivor);
    return this.survivorRepository.findOneBy({
      id: id,
    });
  }

  async delete(id: number): Promise<void> {
    await this.survivorRepository.delete(id);
  }
}
