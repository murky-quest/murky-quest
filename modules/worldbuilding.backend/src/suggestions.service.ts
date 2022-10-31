import { generateId, Injectable } from '@shared/common';
import { Suggestion } from './suggestion';

@Injectable()
export class SuggestionsService {
  private readonly suggestions: Suggestion[] = [
    {
      id: generateId(),
      title: 'Great Gatsby',
      suggestionsCount: 2132,
    },
    {
      id: generateId(),
      title: "Sam's adventures",
      suggestionsCount: 22,
    },
    {
      id: generateId(),
      title: 'How to become a bum',
      suggestionsCount: 1,
    },
  ];

  async findMany(): Promise<Suggestion[]> {
    return this.suggestions;
  }
}
