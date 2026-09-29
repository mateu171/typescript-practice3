import type { BaseEntity, CreateDto } from "../types/index.js";
import type { IRepository } from "./index.js";


export class InMemoryRepository<T extends BaseEntity> implements IRepository<T>
{
  protected items: T[] = []

  create(item: T): T {
    this.items.push(item);
      return item;
  }

  findAll(): T[] {
        return [...this.items];
    }

  findById(id: string): T | null {
      return this.items.find(item => item.id === id) ?? null
  }

  deleteById(id: string): boolean {
      const index = this.items.findIndex(item => item.id === id)

      if(index === -1)
        return false

      this.items.splice(index,1)
      return true;

  }

  update(id: string, patch: Partial<CreateDto<T>>): T | null {
     const item = this.findById(id);

    if (!item) {
        return null;
    }
     Object.assign(item,patch)
     item.updatedAt = new Date()
     return item  
  }
}