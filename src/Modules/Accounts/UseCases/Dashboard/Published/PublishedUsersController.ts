import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DashboardUsersUseCase } from './PublishedUsersUseCase';

export class PublishedUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const createUsersUseCase = container.resolve(DashboardUsersUseCase);
    const res = await createUsersUseCase.execute({ id });

    return response.status(201).send(res);
  }
}
