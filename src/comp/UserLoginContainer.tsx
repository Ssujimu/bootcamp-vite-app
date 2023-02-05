import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {UserContext} from "./api/UserContext";
import {newUserData, User} from "./api/User";
import axios from "axios";

export const UserLoginContainer = () => {
    //
    const navigate = useNavigate();
    const {setUserData} = useContext(UserContext);
    const [ user, setUser ] = useState<User>(newUserData);

    const onClickRegister = () => {
        //
        navigate('/register');
    }

    const onClickLogin = () => {
        //
        axios.get(`/api/user/${user.id}?pw=${user.pw}`)
            .then(res => {
                setUserData(res.data);
                navigate('/board/Normal');
            })
            .catch(() => alert("로그인 실패"));
    }

    const onChange = (name: string, value: any) => {
        // 유저가 입력한 id 값과 현재 pw의 값이 일치한지 보기위해서
        // newUserData(value, user.name, user.pw)
        setUser({...user, [name]: value});
    }


    return (
        <>
            <div className="card" style={{marginLeft: "50rem", marginRight: "50rem"}}>
                <div className="card-body">
                    <div className="card-title">
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example1">User Id</label>
                            <input type="email" id="form2Example1" name={'id'} className="form-control" onChange={event => onChange(event.target.name, event.target.value)}/>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                            <input type="password" id="form2Example2" name={'pw'} className="form-control" onChange={event => onChange(event.target.name, event.target.value)}/>
                        </div>
                    </div>

                    <div className="text-center mt-3">
                        <button type="button" className="btn btn-primary btn-block center" onClick={onClickLogin}>Login</button>
                    </div>

                    <div className="text-center mt-3">
                        <p>Not a member? <a onClick={onClickRegister}>Register</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}