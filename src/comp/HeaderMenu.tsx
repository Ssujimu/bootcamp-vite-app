import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "./api/UserContext";

export const HeaderMenu = () => {
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto fw-bold">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => navigate('/board/Normal')}>Normal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => navigate('/board/Notice')}>Notice</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => navigate('/board/FAQ')}>FAQ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => navigate('/board/QNA')}>QNA</a>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-text">
                    <li className="nav-item mx-lg-5">
                        {
                            userData.id.length ?
                                <a className="nav-link" href="#">{userData.name}</a>
                                :
                                <a className="nav-link" onClick={() => navigate('/login')}>Login</a>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}