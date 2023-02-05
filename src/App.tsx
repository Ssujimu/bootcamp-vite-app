import {BoardListContainer} from "./comp/BoardListContainer";
import {HeaderMenu} from "./comp/HeaderMenu";
import {Route, Routes} from "react-router-dom";
import {userIdName} from "./comp/api/types";
import {BoardDetailContainer} from "./comp/BoardDetailContainer";
import {UserLoginContainer} from "./comp/UserLoginContainer";
import {UserLoginCheck} from "./comp/UserLoginCheck";

function App() {

    return (
        <div className="App">
            <UserLoginCheck>
                <HeaderMenu/>
                <div style={{marginTop: '10vh'}}>
                    <Routes>
                        <Route path="/board/:boardType" element={<BoardListContainer/>}/>
                        <Route path="/board/detail/:boardType/:boardId"
                               element={<BoardDetailContainer />}/>
                        <Route path="/board/form/:boardType" element={<BoardDetailContainer />}/>
                    </Routes>
                    <Routes>
                        <Route path="/login" element={<UserLoginContainer/>}/>
                    </Routes>
                </div>
            </UserLoginCheck>
        </div>
    )
}

export default App
