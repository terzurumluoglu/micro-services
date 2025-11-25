import {
  Db,
  Collection,
  Filter,
  Document,
  InsertOneResult,
  UpdateResult,
  DeleteResult,
  WithId,
  OptionalUnlessRequiredId,
} from 'mongodb';

export abstract class BaseCollection<T extends Document> {
  protected collection: Collection<T>;

  constructor(db: Db, collectionName: string) {
    this.collection = db.collection<T>(collectionName);
  }

  async find(filter: Filter<T> = {}): Promise<WithId<T>[]> {
    return this.collection.find(filter).toArray();
  }

  async findOne(filter: Filter<T>): Promise<WithId<T> | null> {
    return this.collection.findOne(filter);
  }

  async insert(doc: OptionalUnlessRequiredId<T>): Promise<InsertOneResult<T>> {
    return this.collection.insertOne(doc);
  }

  async update(filter: Filter<T>, update: Partial<T>): Promise<UpdateResult> {
    return this.collection.updateOne(filter, { $set: update });
  }

  async delete(filter: Filter<T>): Promise<DeleteResult> {
    return this.collection.deleteOne(filter);
  }
}
