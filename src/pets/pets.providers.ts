import { DataSource } from 'typeorm';
import { Pet } from './entity/pet.entity';

export const petProviders = [
  {
    provide: 'PET_REPO',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pet),
    inject: ['DATA_SOURCE'],
  },
];