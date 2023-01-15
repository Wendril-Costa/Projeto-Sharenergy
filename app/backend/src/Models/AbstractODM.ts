import {
    Model,
    models,
    Schema,
    model,
    UpdateQuery,
  } from 'mongoose';
  
  export default abstract class AbstractODM<T> {
    protected model: Model<T>;
    protected schema: Schema;
    protected modelName: string;
  
    constructor(schema: Schema, modelName: string) {
      this.schema = schema;
      this.modelName = modelName;
      this.model = models[this.modelName] || model(this.modelName, this.schema);
    }
  
    public async create(obj: T): Promise<T> {
      return this.model.create({ ...obj });
    }
  
    public async getAll(): Promise<T[]> {
      return this.model.find({});
    }
  
  
    // public async update(id: string, update: T): Promise<T | null> {
    //   return this.model.findByIdAndUpdate(
    //     { _id: id }, 
    //     { ...update as UpdateQuery<T> },
    //     { new: true },
    //   );
    // }
  }