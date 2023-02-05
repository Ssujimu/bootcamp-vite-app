import {useContext, useEffect, useState} from "react";
import {Board} from "./api/Board";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, useParams} from "react-router-dom";
import {UserContext} from "./api/UserContext";

interface Props {
}

export const BoardListContainer = (
    {
    }: Props) => {

    const [boardList, setBoardList] = useState<Board[]>([]);
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    const { boardType = 'Normal' } = useParams<string>();

    const findBoardList = async (): Promise<Board[]> => {
        // backend에서 endPoint의 header에서 query=""인 것이 들어올 것이다.
        const res = await axios.get(`/api/board?boardType=${boardType}`, {headers: {query: "QueryBoardByBoardType"}});
        console.log('res', res);
        return res.data;
    }

    const onClickForm = () => {
        //
        if (userData.id.length) {
            // 로그인한 자
            navigate(`/board/form/${boardType}`);
        } else {
            // 비로그인자
            alert("로그인 필요");
            navigate(`/login`);
        }
    }

    const onClickDetail = (boardId: string) => {
        //
        navigate(`/board/detail/${boardType}/${boardId}`);
    }

    useEffect(() => {
        findBoardList().then(res => setBoardList(res));
    }, [boardType]);

    return (
        <>
            <h1 className="fw-bold">{boardType}</h1>
            <button onClick={onClickForm}>글쓰기</button>
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
                        <td onClick={()=>onClickDetail(value.boardId)}>{value.title}</td>
                        <td>{value.user.name}</td>
                        <td>{value.registerTime}</td>
                        <td>{value.sequence}</td>
                    </tr>
                )}
                </tbody>
            </table>
            <button onClick={onClickForm}>글쓰기</button>
        </>
    )
}