import {BoardType} from "./BoardType";

export class BoardUpdate {
    //
    boardId: string;
    title: string;
    content: string;
    boardType: BoardType;

    constructor(
        boardId: string,
        title: string,
        content: string,
        boardType: BoardType,
    ) {
        this.boardId = boardId;
        this.title = title;
        this.content = content;
        this.boardType = boardType;
    }
}