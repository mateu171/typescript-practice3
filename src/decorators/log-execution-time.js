export function LogExecutionTime() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const start = performance.now();
            const result = originalMethod.apply(this, args);
            const duration = performance.now() - start;
            console.log(`[BENCHMARK] Метод ${propertyKey} виконано за ${duration.toFixed(2)} ms.`);
            return result;
        };
        return descriptor;
    };
}
//# sourceMappingURL=log-execution-time.js.map