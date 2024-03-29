import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSaleItemUseCase } from './CreateSaleItemUseCase';

class CreateSaleItemController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ids_product } = request.body;
    const { id } = request.user;
    const createArticlesUseCase = container.resolve(CreateSaleItemUseCase);
    await createArticlesUseCase.execute({
      ids_product,
      consumer: id,
    });
    return response.status(201).send();
  }
}
export { CreateSaleItemController };
