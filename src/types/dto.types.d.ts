import type { AutoPartEntity, BaseEntity, EntityStatus } from "./entity.types.js";
export type CreateDto<T extends BaseEntity> = Omit<T, "id" | "createdAt" | "updateAt">;
export type UpdateDto<T extends BaseEntity> = Partial<CreateDto<T>>;
export type EntitySummary<T extends AutoPartEntity> = Pick<T, "id" | "title" | "price">;
export type EntityAnalytics<T extends BaseEntity> = Record<EntityStatus, number>;
//# sourceMappingURL=dto.types.d.ts.map