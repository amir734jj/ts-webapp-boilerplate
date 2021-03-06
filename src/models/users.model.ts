import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Token } from './token.model';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 256, default: '' })
  name: string;

  @ApiProperty()
  @Column({ length: 256 })
  username: string;

  @Exclude()
  @ApiProperty()
  @Column({ length: 256 })
  password: string;

  @ApiProperty()
  @OneToMany((type) => Token, (token) => token.user)
  tokens: Token[];
}
