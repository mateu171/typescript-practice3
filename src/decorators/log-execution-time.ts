export function LogExecutionTime()
{
    return function(
     target: object,
     propertyKey: string,
     descriptor: PropertyDescriptor        
    ) : PropertyDescriptor {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: unknown[])
        {
            const start = performance.now();
            const result = originalMethod.apply(this,args);
            const duration = performance.now() - start;
        console.log(
                `[BENCHMARK] Метод ${propertyKey} виконано за ${duration.toFixed(2)} ms.`
            );

            return result;
        };

        return descriptor;
    }
}