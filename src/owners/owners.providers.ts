import { DataSource } from 'typeorm';
import { Owner} from '../owners/entities/owner.entity'

export const ownerProviders = [
  {
    provide: 'OWNER_REPO',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Owner),
    inject: ['DATA_SOURCE'],
  },
];