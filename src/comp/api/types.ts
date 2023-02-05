export type IdName = {
    id: string;
    name: string;
}

export const userIdName = (id = '', name = '') => {
    return { id, name } as IdName;
}