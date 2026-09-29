import { AutoPartRepository } from "./repositories/index.js";
import { EntityStatus } from "./types/index.js";
console.log("ІНІЦІАЛІЗАЦІЯ GENERIC SERVICE LAYER");
const repository = new AutoPartRepository();
const part1 = {
    id: "part-1",
    title: "Гальмівні колодки",
    price: 1500,
    vinCompatibility: ["WVW123", "WVW456"],
    oemCode: "BP-001",
    condition: "new",
    status: EntityStatus.Active,
    createdAt: new Date(),
    updatedAt: new Date()
};
const part2 = {
    id: "part-2",
    title: "Повітряний фільтр",
    price: 700,
    vinCompatibility: ["BMW123"],
    oemCode: "AF-002",
    condition: "new",
    status: EntityStatus.Archived,
    createdAt: new Date(),
    updatedAt: new Date()
};
const part3 = {
    id: "part-3",
    title: "Масляний фільтр",
    price: 450,
    vinCompatibility: ["AUDI123"],
    oemCode: "OF-003",
    condition: "new",
    status: EntityStatus.Active,
    createdAt: new Date(),
    updatedAt: new Date()
};
repository.create(part1);
repository.create(part2);
repository.create(part3);
repository.update("part-1", {
    price: 1700
});
const allParts = repository.findAll();
console.log(`Отримано сутностей у репозиторії: ${allParts.length}`);
const analytics = {
    [EntityStatus.Active]: 0,
    [EntityStatus.Archived]: 0,
    [EntityStatus.Draft]: 0
};
for (const part of allParts) {
    analytics[part.status]++;
}
console.log("СТАТИСТИКА СТАТУСІВ");
console.log(analytics);
const response = {
    success: true,
    timestamp: new Date(),
    data: part1,
    meta: {
        totalCount: allParts.length,
        version: "1.0.0"
    }
};
console.log("API RESPONSE");
console.log(JSON.stringify(response, null, 2));
//# sourceMappingURL=index.js.map