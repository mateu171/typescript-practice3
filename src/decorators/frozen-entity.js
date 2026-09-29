export function FrozenEntity() {
    return function (constructor) {
        Object.freeze(constructor);
        Object.freeze(constructor.prototype);
    };
}
//# sourceMappingURL=frozen-entity.js.map