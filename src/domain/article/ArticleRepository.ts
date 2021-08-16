import { Novel } from './Article';

export interface ArticleRepository {
  // eslint-disable-next-line no-unused-vars
  store(novel: Novel): void
}
