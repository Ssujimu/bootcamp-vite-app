import {useNavigate} from "react-router-dom";

export const HeaderMenu = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto">
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
                    <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Sign up</a></li>
                </ul>
            </div>
        </nav>
    )
}