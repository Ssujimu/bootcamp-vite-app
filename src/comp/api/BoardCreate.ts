import {IdName} from "./types";
import {BoardType} from "./BoardType";

export class BoardCreate {
    //
    title: string;
    content: string;
    boardType: BoardType;
    user: IdName;

    constructor(
        title: string,
        content: string,
        boardType: BoardType,
        user: IdName
    ) {
        this.title = title;
        this.content = content;
        this.boardType = boardType;
        this.user = user;
    }
}
