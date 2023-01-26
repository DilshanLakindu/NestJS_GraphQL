import { ObjectType, Field, Int } from '@nestjs/graphql';
import { type } from 'os';
import { petProviders } from 'src/pets/pets.providers';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {Pet} from '../../pets/entity/pet.entity'

@Entity()
@ObjectType()
export class Owner {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
     id: number;
     
     @Column()
     @Field()
     name:string;
     
     @OneToMany(type=> Pet,pet => pet.id)
     pets:Pet[]

}
