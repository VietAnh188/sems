export const groupByKey = <T, K extends keyof any>(
    data: T[],
    getKey: (item: T) => K
): Record<K, T[]> => {
    return data.reduce((prev: Record<K, T[]>, curr: T): Record<K, T[]> => {
        const key: K = getKey(curr);
        if (!prev[key]) prev[key] = [];
        prev[key].push(curr);
        return prev;
    }, {} as Record<K, T[]>);
};

export const groupByMonth = <T extends any>(
    data: T[],
    getKey: (item: T) => Date
): Record<string, T[]> => {
    const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    return data.reduce(
        (prev: Record<string, T[]>, curr: T): Record<string, T[]> => {
            const key: Date = getKey(curr);
            const month: string = months[new Date(key).getMonth()];
            return { ...prev, [month]: [...(prev[month] || []), curr] };
        },
        {} as Record<string, T[]>
    );
};

export const groupByYear = <T extends any>(
    data: T[],
    getKey: (item: T) => Date
): Record<string, T[]> => {
    return data.reduce(
        (prev: Record<string, T[]>, curr: T): Record<string, T[]> => {
            const key: Date = getKey(curr);
            const year: string = new Date(key).getFullYear().toString();
            return { ...prev, [year]: [...(prev[year] || []), curr] };
        },
        {} as Record<string, T[]>
    );
};
