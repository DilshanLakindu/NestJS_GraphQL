import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(@Inject('OWNER_REPO') private ownerRepository: Repository<Owner>){}
  create(createOwnerInput: CreateOwnerInput) {
   const newOwner = this.ownerRepository.create(createOwnerInput);
   return this.ownerRepository.save(newOwner);
  }

  findAll() {
    return this.ownerRepository.find();
  }

  async findOne(id: number): Promise<Owner> {
    const owner = await this.ownerRepository.findOneByOrFail({id});
    if(!owner)
      throw new BadRequestException(`Owner with id ${id} not found`)
      return owner;
    
  }

  async update(id: number, updateOwnerInput: UpdateOwnerInput):Promise<Owner> {
    const foundProduct = await this.ownerRepository.findOneBy({id});
    if (!foundProduct)
     throw new BadRequestException(`Owner with id ${id} not found`)

     await this.ownerRepository.update(id, updateOwnerInput);
     return await this.ownerRepository.findOneBy({id});
  }

  async remove(id: number): Promise<Owner> {
    try{
       const owner = await this.ownerRepository.findOneBy({id});
       if(!owner) throw new BadRequestException(`Owner not found`);

       const deleted = await this.ownerRepository.delete({id});
       console.log(deleted);
       return owner;
    }catch(error){
       throw new BadRequestException(`Product with id ${id} not found`);
    }
    
  }
}
