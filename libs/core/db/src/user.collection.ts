import { Db } from 'mongodb';
import { BaseCollection } from './base.collection';

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export class UserCollection extends BaseCollection<User> {
  constructor(db: Db) {
    super(db, 'users');
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.findOne({ email });
  }
}
