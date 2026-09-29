import { FrozenEntity } from "../decorators/index.js";
import type { BaseEntity, EntityStatus } from "./index.js";


@FrozenEntity()
export class AutoPart implements BaseEntity {

    constructor(
        public id: string,
        public title: string,
        public price: number,
        public vinCompatibility: string[],
        public oemCode: string,
        public condition: string,
        public status: EntityStatus,
        public createdAt: Date,
        public updatedAt: Date
    ) {}
}