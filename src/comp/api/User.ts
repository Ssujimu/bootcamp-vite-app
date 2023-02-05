export interface User {
    //
    id: string;
    name: string;
    pw: string;
}

export const newUserData = (id = '', name='', pw = ''): User => {
    //
    return { id, name, pw };
}