export const groupBy = <T, K extends keyof any>(
    data: T[],
    getKey: (item: T) => K
) => {
    return data.reduce((prev: Record<K, T[]>, curr: T): Record<K, T[]> => {
        const key = getKey(curr);
        if (!prev[key]) prev[key] = [];
        prev[key].push(curr);
        return prev;
    }, {} as Record<K, T[]>);
};
