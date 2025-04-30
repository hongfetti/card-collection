import type { Book } from './Book';

export interface User {
  username: string | null;
  name: string | null;
  email: string | null;
  password: string | null;
  savedBooks: Book[];
}
