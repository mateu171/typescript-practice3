export interface BaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export enum EntityStatus {
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Draft = "DRAFT"
}

export interface AutoPartEntity extends BaseEntity {
    title: string;
    price: number;
    vinCompatibility: string[];
    oemCode: string;
    condition: string;
    status: EntityStatus;
}