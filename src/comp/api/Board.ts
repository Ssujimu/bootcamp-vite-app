import {IdName} from "./types";

export class Board {
    //
    boardId: string;
    title: string;
    content: string;
    user: IdName;
    registerTime: string;
    sequence: number;

    constructor(
        boardId: string,
        title: string,
        content: string,
        user: IdName,
        registerTime: string,
        sequence: number
    ) {
        this.boardId = boardId;
        this.title = title;
        this.content = content;
        this.user = user;
        this.registerTime = registerTime;
        this.sequence = sequence;
    }
}
