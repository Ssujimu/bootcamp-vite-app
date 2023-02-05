import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {Board} from "./api/Board";
import {BoardCreate} from "./api/BoardCreate";
import {IdName, userIdName} from "./api/types";
import {BoardType} from "./api/BoardType";
import {BoardUpdate} from "./api/BoardUpdate";
import {UserContext} from "./api/UserContext";


export const BoardDetailContainer = () => {
    //
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    const { boardType = 'Normal', boardId } = useParams<string>();
    const [ board, setBoard ] = useState<Board | null>(null);

    const findBoardByBoardId = async () => {
        //
        const res = await axios.get(`/api/board/${boardId}`);
        setBoard(res.data);
    }

    useEffect( () => {
        //
        if (boardId && boardId.length) {
            findBoardByBoardId();
        } else {
            setBoard(new Board('', '', '', userIdName(userData.id, userData.name), '', 0));
        }
    }, [boardId])

    if (!board) return <></>;
    // Board 생성 로직
    const register = async () => {
        // Board 생성 api 호출
        // const res = axios.post('/api/board',{title: "", content: "", boardType, user: ""});
        // 기존 화면에서 관리하던 데이터(registerBoard)객체를 백엔드로 전송
        // 주의 백엔드 api가 반환해주는 데이터가 있는지 확인 해 볼것
        const res = await axios.post('/api/board', BoardCreate.newCommand(board, boardType as BoardType));
    }

    const update = async () => {
        //
        const res = await axios.put(`/api/board/${boardId}`, BoardUpdate.newCommand(board, boardType as BoardType));
    }

    const onClickSubmit = () => {
        //
        // 생성 버튼 클릭시 작동하는 함수 위에 있는 register함수가 호출되야 할까요...?(이부분은 고민해보세요)
        if (boardId?.length) {
            navigate(`/board/form/${boardType}`)
        }
        else {
            register().then(() => navigate(`/board/${boardType}`));
        }
    }

    const onClickUpdate = () => {
        //
        update().then(() => navigate(`/board/${boardType}`));
    }

    const onClickDelete = () => {
        // 이렇게 간결하게도 가능
        axios.delete(`/api/board/${boardId}`).then( ()=> navigate(`/board/${boardType}`));
    }

    //하위 태그에서 데이터가 변경시 사용하는 메서드 name은 태그의 name이고 value는 태그내에 입력된 데이터
    const onChange = (name: string, value: any) => {
        //아래에 작성한 코드가 어떤 의미를 가지는 지 고민해보세요
        setBoard({...board, [name]: value});
    }

    console.log("BoardType" , boardType);

    return (
        <>
            <h2 className="fw-bold">{boardType}</h2>
            <div>
                <div className="row">
                    <table className="table table-striped text-center">
                        <tbody>
                        <tr>
                            <td colSpan={3}>
                                {/* input에서 데이터를 관리해야 하지 않을까요?
                                    ex) value={registerBoard.title} onChange={}
                                    예시 적어드리니 확인해보세요
                                    name은 왜 지정했을지
                                    value는 왜 지정했고
                                    onChange 메서드는 왜 만들어서 넣어줬는지
                                */}
                                <input type="text" className="form-control" placeholder="제목을 입력해 주세요." disabled={!userData.id.length && userData.id === board.user.id} name='title' value={board.title} onChange={(event)=>{
                                    onChange(event.target.name, event.target.value);
                                }}/>
                            </td>
                        </tr>
                        {
                            boardId && boardId.length && (
                                <>
                                    <tr className="fw-bold">
                                        <td>
                                            작성일 - {board.registerTime}
                                        </td>
                                        <td>
                                            작성자 - {board.user.name}
                                        </td>
                                        <td>
                                            조회수 - {board.sequence}
                                        </td>
                                    </tr>
                                </>
                            )
                        }
                        <tr>
                            <td colSpan={3}>
                                <textarea className="form-control" placeholder="내용을 입력해 주세요." disabled={!userData.id.length && userData.id === board.user.id} style={{height: '50vh'}}  name='content' value={board.content}
                                          onChange={(event)=>{
                                              onChange(event.target.name, event.target.value);
                                          }}/>
                            </td>
                        </tr>
                        </tbody>
                        <div className="row justify-content-evenly">
                            {
                                boardId && (userData.id === board.user.id) ?
                                    <>
                                        <div className="col-4">
                                            <button onClick={onClickUpdate}>수정</button>
                                        </div>
                                        <div className="col-4">
                                            <button onClick={onClickDelete}>삭제</button>
                                        </div>
                                    </>
                                    :
                                    <div className="col-4">
                                        <button onClick={onClickSubmit}>글쓰기</button>
                                    </div>
                            }
                            <div className="col-4">
                                <button onClick={() => history.back()}>목록</button>
                            </div>
                        </div>
                    </table>
                </div>
            </div>
        </>
    )
}