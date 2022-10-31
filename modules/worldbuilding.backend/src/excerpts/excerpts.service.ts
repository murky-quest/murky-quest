import { generateId, Injectable } from '@shared/common';
import { Excerpt } from './excerpt';

@Injectable()
export class ExcerptsService {
  private readonly excerpts: Excerpt[] = [
    {
      id: generateId(),
      content: 'Hey, you!',
    },
    {
      id: generateId(),
      content: 'I need a bottle of rum.',
    },
    {
      id: generateId(),
      content: 'You must go somewhere.',
    },
  ];

  async findMany(): Promise<Excerpt[]> {
    return this.excerpts;
  }
}
