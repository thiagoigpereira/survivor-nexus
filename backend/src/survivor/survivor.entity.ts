import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Survivor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column({ type: 'double precision', nullable: true })
  latitude: number;

  @Column({ type: 'double precision', nullable: true })
  longitude: number;

  @Column('json', { nullable: true })
  inventory: Inventory[];

  @Column({ default: false })
  infected: boolean;
}

interface Inventory {
  itemId: number;
  quantity: number;
}
