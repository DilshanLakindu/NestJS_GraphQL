import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { find } from 'rxjs';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entity/pet.entity';

@Injectable()
export class PetsService {
    constructor(@Inject('PET_REPO') private petsRepository: Repository<Pet>, private ownersService : OwnersService){} 
    
    createPet(createPetInput: CreatePetInput):Promise<Pet>{
        const newPet = this.petsRepository.create(createPetInput);// newPet=new Pet();new.name=input.name
 
        return this.petsRepository.save(newPet); //insert
    }
    
    findAll():Promise<Pet[]>{
       return this.petsRepository.find(); //SELECT * pet
 
    }

    findOne(id:number): Promise<Pet>{
        return this.petsRepository.findOneByOrFail({id});
    }
    
    //get pets owner by using ownerid
    async getOwner(ownerId:number):Promise<Owner>{

        return this.ownersService.findOne(ownerId)
    }

}
