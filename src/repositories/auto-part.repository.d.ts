import type { AutoPartEntity, UpdateDto } from "../types/index.js";
import { InMemoryRepository } from "./index.js";
export declare class AutoPartRepository extends InMemoryRepository<AutoPartEntity> {
    create(item: AutoPartEntity): AutoPartEntity;
    update(id: string, patch: UpdateDto<AutoPartEntity>): AutoPartEntity | null;
    findAll(): AutoPartEntity[];
    findById(id: string): AutoPartEntity | null;
    deleteById(id: string): boolean;
}
//# sourceMappingURL=auto-part.repository.d.ts.map