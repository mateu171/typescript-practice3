export class InMemoryRepository {
    items = [];
    create(item) {
        this.items.push(item);
        return item;
    }
    findAll() {
        return [...this.items];
    }
    findById(id) {
        return this.items.find(item => item.id === id) ?? null;
    }
    deleteById(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1)
            return false;
        this.items.splice(index, 1);
        return true;
    }
    update(id, patch) {
        const item = this.findById(id);
        if (!item) {
            return null;
        }
        Object.assign(item, patch);
        item.updatedAt = new Date();
        return item;
    }
}
//# sourceMappingURL=in-memory.repository.js.map