import { Module } from "@nestjs/common";
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pet } from "./entity/pet.entity";
import { DatabaseModule } from "src/db/database.module";
import { petProviders} from "./pets.providers"
import { OwnersModule } from "src/owners/owners.module";

@Module({
    imports:[TypeOrmModule.forFeature([Pet]),DatabaseModule,OwnersModule],
    providers: [...petProviders, PetsService, PetsResolver]
  
})
export class PetsModule{}