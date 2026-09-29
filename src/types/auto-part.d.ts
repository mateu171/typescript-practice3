import type { BaseEntity, EntityStatus } from "./index.js";
export declare class AutoPart implements BaseEntity {
    id: string;
    title: string;
    price: number;
    vinCompatibility: string[];
    oemCode: string;
    condition: string;
    status: EntityStatus;
    createdAt: Date;
    updatedAt: Date;
    constructor(id: string, title: string, price: number, vinCompatibility: string[], oemCode: string, condition: string, status: EntityStatus, createdAt: Date, updatedAt: Date);
}
//# sourceMappingURL=auto-part.d.ts.map