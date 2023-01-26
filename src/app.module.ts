import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsModule } from './pets/pets.module';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { OwnersModule } from './owners/owners.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile : join(process.cwd(),'schema.gql'),
    driver: ApolloDriver,
  }),
    TypeOrmModule.forRoot({
    type : 'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'nesttest',
    entities:[],
    synchronize:true,
    // dropSchema:true

    }),
  PetsModule,
  OwnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
