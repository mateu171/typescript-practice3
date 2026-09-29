import type { BaseEntity, CreateDto } from "../types/index.js";
import type { IRepository } from "./index.js";
export declare class InMemoryRepository<T extends BaseEntity> implements IRepository<T> {
    protected items: T[];
    create(item: T): T;
    findAll(): T[];
    findById(id: string): T | null;
    deleteById(id: string): boolean;
    update(id: string, patch: Partial<CreateDto<T>>): T | null;
}
//# sourceMappingURL=in-memory.repository.d.ts.map