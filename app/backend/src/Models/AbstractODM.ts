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
  
    public async findByName(username: string): Promise<T | null> {
      return this.model.findOne({ username });
    }

    public async findByCpf(cpf: number): Promise<T | null> {
      return this.model.findOne({ cpf });
    }
  
    public async update(cpf: number, update: T): Promise<T | null> {
      return this.model.findOneAndUpdate(
        { _cpf: cpf }, 
        { ...update as UpdateQuery<T> },
        { new: true },
      );
    }

    public async delete(cpf: number): Promise<T | null> {
      return this.model.remove(cpf);
    }
  }