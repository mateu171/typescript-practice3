import { LogExecutionTime } from "../decorators/index.js";
import type { AutoPartEntity, UpdateDto } from "../types/index.js";
import { InMemoryRepository } from "./index.js";

export class AutoPartRepository extends InMemoryRepository<AutoPartEntity>{
    @LogExecutionTime()
    override create(item: AutoPartEntity): AutoPartEntity {
        return super.create(item);
    }

    @LogExecutionTime()
    override update(id: string, patch: UpdateDto<AutoPartEntity>): AutoPartEntity | null {
        return super.update(id,patch);
    }

    @LogExecutionTime()
    override findAll(): AutoPartEntity[] {
        return super.findAll();
    }

    @LogExecutionTime()
    override findById(id: string): AutoPartEntity | null {
        return super.findById(id);
    }

    @LogExecutionTime()
    override deleteById(id: string): boolean {
        return super.deleteById(id);
    }
}