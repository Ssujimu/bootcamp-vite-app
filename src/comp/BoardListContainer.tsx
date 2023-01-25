import {useEffect, useState} from "react";
import {Board} from "./api/Board";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BoardType} from "./api/BoardType";
import {useNavigate, useParams} from "react-router-dom";

interface Props {
}

export const BoardListContainer = (
    {
    }: Props) => {

    const [boardList, setBoardList] = useState<Board[]>([]);
    const navigate = useNavigate();
    const { boardType = 'Normal' } = useParams<string>();

    const findBoardList = async (): Promise<Board[]> => {
        // backend에서 endPoint의 header에서 query=""인 것이 들어올 것이다.
        const res = await axios.get(`/api/board?boardType=${boardType}`, {headers: {query: "QueryBoardByBoardType"}});
        console.log('res', res);
        return res.data;
    }

    useEffect(() => {
        findBoardList().then(res => setBoardList(res));
    }, [boardType]);

    return (
        <>
            <span>{boardType}</span>
            <button onClick={() => navigate("/board/form")}>글쓰기</button>
            <table className="table table-sm">
                <thead>
                <tr>
                    <th scope="col">제목</th>
                    <th scope="col">작성자</th>
                    <th scope="col">작성일</th>
                    <th scope="col">조회</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {boardList.map((value) =>
                    <tr>
                        <td onClick={ () => navigate("/board/modify")}>{value.title}</td>
                        <td>{value.user.name}</td>
                        <td>{value.registerTime}</td>
                        <td>{value.sequence}</td>
                    </tr>
                )}
                </tbody>
            </table>
            <button>글쓰기</button>
        </>
    )
}