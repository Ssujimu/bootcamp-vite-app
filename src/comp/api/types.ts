export type IdName = {
    id: string;
    name: string;
}

export const userIdName = (id = 'suji', name = '나다') => {
    return { id, name } as IdName;
}