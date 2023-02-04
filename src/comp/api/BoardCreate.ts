import {IdName} from "./types";
import {BoardType} from "./BoardType";
import {Board} from "./Board";

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

    static new(title: string, content: string, boardType: BoardType, user: IdName) {
        //
        return new BoardCreate(
            title,
            content,
            boardType,
            user,
        );
    }

    static newCommand(board: Board, boardType: BoardType) {
        //
        return new BoardCreate(
            board.title,
            board.content,
            boardType,
            board.user,
        );
    }
}