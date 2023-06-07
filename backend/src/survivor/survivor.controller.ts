import { 
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { Survivor } from './survivor.entity';
import { SurvivorService } from './survivor.service';

@Controller('survivors')
export class SurvivorController {
  constructor(private readonly survivorService: SurvivorService) {}

  @Get()
  findAll(): Promise<Survivor[]> {
    return this.survivorService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Survivor> {
    return this.survivorService.findById(id);
  }

  @Post()
  create(@Body() survivor: Survivor): Promise<Survivor> {
    return this.survivorService.create(survivor);
  }

  @Put(':id')
  update(
    @Param('id') id: number, 
    @Body() survivor: Survivor
  ): Promise<Survivor> {
    return this.survivorService.update(id, survivor);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.survivorService.delete(id);
  }
}
