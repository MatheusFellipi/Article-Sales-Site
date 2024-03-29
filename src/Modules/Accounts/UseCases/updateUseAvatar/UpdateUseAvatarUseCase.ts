import { IUsersRepository } from '@Modules/Accounts/Repositories/IUsersRepository';
import { deleteFile } from '@Shared/Utils/file';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  user_id: string;
  avatar_File: string;
}

@injectable()
class UpdateUseAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({ user_id, avatar_File }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);
    if (user.avatar) {
      await deleteFile(user.avatar);
    }
    user.avatar = `./tmp/avatar/${avatar_File}`;
    await this.usersRepository.create(user);
  }
}

export { UpdateUseAvatarUseCase };
