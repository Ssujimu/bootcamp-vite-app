import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {BoardCreate} from "./api/BoardCreate";
import axios from "axios";
import {IdName} from "./api/types";

interface Props {
    user: IdName;
}

export const BoardFormContainer = (
    {
        // props 받는곳
        user,
    }: Props) => {
    //
    const navigate = useNavigate();
    const {boardType = 'Normal'} = useParams<string>();
    // Board 생성 데이터를 화면에서 관리하기 위한 state
    // 초기 생성값이 없습니다
    // const [registerBoard, setRegisterBoard ] = useState<BoardCreate>( 여기 이곳에 초기 값을 셋팅 해줘야해요 );
    // 예시 const [registerBoard, setRegisterBoard ] = useState<BoardCreate>({title: '', content: '' ...});
    const [ registerBoard, setRegisterBoard ] = useState<BoardCreate>(BoardCreate.new('','', 'Normal', user));

    // Board 생성 로직
    const register = async () => {
        // Board 생성 api 호출
        // const res = axios.post('/api/board',{title: "", content: "", boardType, user: ""});
        // 기존 화면에서 관리하던 데이터(registerBoard)객체를 백엔드로 전송
        // 주의 백엔드 api가 반환해주는 데이터가 있는지 확인 해 볼것
        const res = await axios.post('/api/board', registerBoard);
    }
    const onClickSubmit = () => {
        // 생성 버튼 클릭시 작동하는 함수 위에 있는 register함수가 호출되야 할까요...?(이부분은 고민해보세요)
        register().then(() => navigate('/board/Normal'));
    }

    //하위 태그에서 데이터가 변경시 사용하는 메서드 name은 태그의 name이고 value는 태그내에 입력된 데이터
    const onChange = (name: string, value: any) => {
        //아래에 작성한 코드가 어떤 의미를 가지는 지 고민해보세요
        setRegisterBoard({...registerBoard, [name]: value});
    }

    return (
        <>
            <h2 className="fw-bold">{boardType}</h2>
            <div>
                <div className="row">
                    <table className="table table-striped text-center">
                        <tbody>
                        <tr>
                            <td>
                                {/* input에서 데이터를 관리해야 하지 않을까요?
                                    ex) value={registerBoard.title} onChange={}
                                    예시 적어드리니 확인해보세요
                                    name은 왜 지정했을지
                                    value는 왜 지정했고
                                    onChange 메서드는 왜 만들어서 넣어줬는지
                                */}
                                <input type="text" className="form-control" placeholder="제목을 입력해 주세요." name='title' value={registerBoard.title} onChange={(event)=>{
                                    onChange("title",event.target.value);
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <textarea className="form-control" placeholder="내용을 입력해 주세요." style={{height: '50vh'}}  name='content' value={registerBoard.content}
                                          onChange={(event)=>{
                                    onChange("content",event.target.value);
                                }}/>
                            </td>
                        </tr>
                        </tbody>
                        <div className="row justify-content-evenly">
                            <div className="col-4">
                                <button onClick={onClickSubmit}>글쓰기</button>
                            </div>
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