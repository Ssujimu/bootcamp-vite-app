import {BoardType} from "./BoardType";
import {Board} from "./Board";

export class BoardUpdate {
    //
    title: string;
    content: string;
    boardType: BoardType;

    constructor(
        title: string,
        content: string,
        boardType: BoardType,
    ) {
        this.title = title;
        this.content = content;
        this.boardType = boardType;
    }

    static newCommand(board: Board, boardType: BoardType) {
        //
        return new BoardUpdate(
            board.title,
            board.content,
            boardType,
        );
    }
}