import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { DatabaseModule } from 'src/db/database.module';
import { ownerProviders } from './owners.providers';

@Module({
  imports:[TypeOrmModule.forFeature([Owner]),DatabaseModule],
  providers: [...ownerProviders,OwnersResolver, OwnersService],
  exports:[OwnersService]
})
export class OwnersModule {}
