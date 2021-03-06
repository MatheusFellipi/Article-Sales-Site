import { DTOCreateUsers } from '../DTOS/DTOCreateUsers';
import { User } from '../Infra/typeorm/Entities/Users';

export interface IUsersRepository {
  create(data: DTOCreateUsers): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
