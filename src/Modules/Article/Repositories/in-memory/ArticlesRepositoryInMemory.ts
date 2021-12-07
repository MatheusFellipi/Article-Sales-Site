import { DTOCreateArticle } from '@Modules/Article/DTOS/DTOCreateArticle';
import { Articles } from '@Modules/Article/Infra/Typeorm/Entities/Articles';
import { IArticlesRepository } from '../IArticlesRepository';

export class ThemeRepositoryInMemory implements IArticlesRepository {
  private _articles: Articles[];

  constructor() {
    this._articles = [];
  }

  async create({
    theme_id,
    user_id,
    text,
    title,
  }: DTOCreateArticle): Promise<void> {
    const entitiesArticles = new Articles();

    Object.assign(entitiesArticles, { theme_id, user_id, text, title });

    this._articles.push(entitiesArticles);
  }
}
