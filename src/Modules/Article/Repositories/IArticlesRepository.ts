import { DTOCreateArticle } from '../DTOS/DTOCreateArticle';
import { Articles } from '../Infra/Typeorm/Entities/Articles';

interface IArticlesRepository {
  create(data: DTOCreateArticle): Promise<void>;
  list(): Promise<Articles[]>;
  FindById(termoPesquisa: string): Promise<Articles>;
  FindByName(termoPesquisa: string): Promise<Articles[]>;
  FindByIdOne(termoPesquisa: string): Promise<Articles>;
  FindByIdUser(termoPesquisa: string): Promise<Articles[]>;
}

export { IArticlesRepository };
