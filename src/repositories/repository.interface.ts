import type { BaseEntity, UpdateDto } from "../types/index.js";


export interface ApiResponse<TData> {
    success: boolean;
    data: TData;
    timestamp: Date;
    meta?: Record<string, unknown>;
}

export interface IRepository<T extends BaseEntity>
{
     create(item:T): T
     findById(id: string) : T | null
     findAll(): T[]
     deleteById(id: string) : boolean 
     update(id: string, patch: UpdateDto<T>): T | null
}